import { useCallback, useEffect, useRef, useState } from 'react';

const RETRY_ATTEMPTS = 2;
const RETRY_DELAY_MS = 1000;

type LoadStatus = 'idle' | 'loading' | 'error';

const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

const useLoader = <R>(
  loadFn: (signal: AbortSignal) => Promise<R>,
  enabled = true,
  initialData?: R,
) => {
  const [data, setData] = useState<R | undefined>(initialData);
  const [status, setStatus] = useState<LoadStatus>('idle');
  const controllerRef = useRef<AbortController | null>(null);
  const isFirstRun = useRef(true);

  const load = useCallback(async () => {
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();
    setStatus('loading');

    for (let attempt = 0; attempt <= RETRY_ATTEMPTS; attempt++) {
      try {
        const result = await loadFn(controllerRef.current.signal);

        if (!controllerRef.current.signal.aborted) {
          setData(result);
          setStatus('idle');
        }

        return;
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') return;

        if (attempt === RETRY_ATTEMPTS) {
          setStatus('error');

          return;
        }

        await delay(RETRY_DELAY_MS * (attempt + 1));
      }
    }
  }, [loadFn]);

  useEffect(() => {
    if (!enabled) return;

    if (isFirstRun.current && initialData !== undefined) {
      isFirstRun.current = false;

      return;
    }

    isFirstRun.current = false;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();

    return () => controllerRef.current?.abort();
  }, [load, enabled, initialData]);

  return {
    data,
    status,
    reload: load,
    abort: () => controllerRef.current?.abort(),
  };
};

export { useLoader, type LoadStatus };

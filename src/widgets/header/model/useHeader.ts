import { useState, useRef, useEffect, useMemo } from 'react';

export const useHeader = () => {
  const [searchExpanded, setExpanded] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [bmExpanded, setBMExpanded] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const lastExpandedAtRef = useRef<number>(0);

  const effectHandler = useMemo(
    () => ({
      scroll: () => {
        setScrolled(window.scrollY > 20);
        if (performance.now() - lastExpandedAtRef.current > 150) {
          setExpanded(false);
          inputRef.current?.blur();
          setBMExpanded(false);
        }
      },
      touchMove: () => {
        if (searchExpanded) {
          setExpanded(false);
          inputRef.current?.blur();
        }
      },
      keydown: (e: KeyboardEvent) => {
        if (e.key === 'Escape' && searchExpanded) {
          setExpanded(false);
          inputRef.current?.blur();
        }
      },
      outsideClick: (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          if (searchExpanded) {
            setExpanded(false);
            inputRef.current?.blur();
          }

          if (bmExpanded) {
            setBMExpanded(false);
          }
        }
      },
    }),
    [searchExpanded, bmExpanded],
  );

  useEffect(() => {
    if (searchExpanded) {
      inputRef.current?.focus();
    }
  }, [searchExpanded]);

  useEffect(() => {
    if (!searchExpanded && !bmExpanded) return;

    document.addEventListener('mousedown', effectHandler.outsideClick);
    document.addEventListener('keydown', effectHandler.keydown);

    return () => {
      document.removeEventListener('mousedown', effectHandler.outsideClick);
      document.removeEventListener('keydown', effectHandler.keydown);
    };
  }, [effectHandler, searchExpanded, bmExpanded]);

  useEffect(() => {
    window.addEventListener('scroll', effectHandler.scroll, { passive: true });
    document.addEventListener('touchmove', effectHandler.touchMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', effectHandler.scroll);
      document.removeEventListener('touchmove', effectHandler.touchMove);
    };
  }, [effectHandler]);

  const handler = {
    query: (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    clearQuery: () => setQuery(''),
    expand: () => {
      if (searchExpanded) {
        setExpanded(false);
        inputRef.current?.blur();
      } else {
        lastExpandedAtRef.current = performance.now();
        setExpanded(true);
      }
    },
    focus: () => {
      lastExpandedAtRef.current = performance.now();
      setExpanded(true);
      inputRef.current?.focus();
    },
    menu: () => setBMExpanded(!bmExpanded),
  };

  return {
    searchExpanded,
    bmExpanded,
    scrolled,
    query,
    handler,
    inputRef,
    containerRef,
  };
};

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';

export const useHeader = () => {
  const [searchExpanded, setExpanded] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [bmExpanded, setBMExpanded] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const lastExpandedAtRef = useRef<number>(0);

  // Refs mirror state so stable callbacks can read current values without re-registering
  const searchExpandedRef = useRef(searchExpanded);
  const bmExpandedRef = useRef(bmExpanded);

  searchExpandedRef.current = searchExpanded;

  bmExpandedRef.current = bmExpanded;

  // Stable — registered once, reads state via refs
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    if (performance.now() - lastExpandedAtRef.current > 150) {
      setExpanded(false);
      inputRef.current?.blur();
      setBMExpanded(false);
    }
  }, []);

  const onTouchMove = useCallback(() => {
    if (searchExpandedRef.current) {
      setExpanded(false);
      inputRef.current?.blur();
    }
  }, []);

  const onKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && searchExpandedRef.current) {
      setExpanded(false);
      inputRef.current?.blur();
    }
  }, []);

  const onOutsideClick = useCallback((e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      if (searchExpandedRef.current) {
        setExpanded(false);
        inputRef.current?.blur();
      }

      if (bmExpandedRef.current) {
        setBMExpanded(false);
      }
    }
  }, []);

  // Focus input when search expands
  useEffect(() => {
    if (searchExpanded) inputRef.current?.focus();
  }, [searchExpanded]);

  // Scroll and touch — stable, registered once
  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('touchmove', onTouchMove);
    };
  }, [onScroll, onTouchMove]);

  // Keyboard and outside-click — only active when a panel is open
  useEffect(() => {
    if (!searchExpanded && !bmExpanded) return;

    document.addEventListener('mousedown', onOutsideClick);
    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('mousedown', onOutsideClick);
      document.removeEventListener('keydown', onKeydown);
    };
  }, [searchExpanded, bmExpanded, onOutsideClick, onKeydown]);

  // Stable — reads state via refs
  const handler = useMemo(
    () => ({
      query: (e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.target.value),
      clearQuery: () => setQuery(''),
      expand: () => {
        if (searchExpandedRef.current) {
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
      },
      menu: () => setBMExpanded(prev => !prev),
    }),
    [],
  );

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

import { useState, useRef, useEffect } from 'react';

export const useHeader = () => {
  const [searchExpanded, setExpanded] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [bmExpanded, setBMExpanded] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (searchExpanded) {
      inputRef.current?.focus();
    }
  }, [searchExpanded]);

  useEffect(() => {
    if (!searchExpanded && !bmExpanded) return;

    const handleOutsideClick = (e: MouseEvent) => {
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
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [searchExpanded, bmExpanded]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handler = {
    query: (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    expand: () => {
      if (searchExpanded) {
        setExpanded(false);
        inputRef.current?.blur();
      } else {
        setExpanded(true);
      }
    },
    focus: () => {
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

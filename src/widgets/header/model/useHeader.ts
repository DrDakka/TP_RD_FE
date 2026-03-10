import { useState } from 'react';

export const useHeader = () => {
  const [searchExpanded, setExpanded] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const handler = {
    query: (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    expand: () => setExpanded(!searchExpanded),
  };

  return { searchExpanded, query, handler };
};

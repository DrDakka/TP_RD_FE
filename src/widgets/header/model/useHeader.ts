import { useState } from 'react';

export const useHeader = () => {
  const [searchExpanded, setExpanded] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [bmExpanded, setBMExpanded] = useState<boolean>(false);
  const handler = {
    query: (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    expand: () => setExpanded(!searchExpanded),
    menu: () => setBMExpanded(!bmExpanded),
  };

  return { searchExpanded, bmExpanded, query, handler };
};

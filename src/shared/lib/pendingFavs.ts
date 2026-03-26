const KEYS = {
  add: 'tp_rd_pending_add',
  remove: 'tp_rd_pending_remove',
} as const;

const read = (key: string): Set<number> => {
  try {
    if (typeof window === 'undefined') return new Set();
    const raw = localStorage.getItem(key);

    return raw ? new Set(JSON.parse(raw) as number[]) : new Set();
  } catch {
    return new Set();
  }
};

const write = (key: string, set: Set<number>) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify([...set]));
};

const clear = () => {
  localStorage.removeItem(KEYS.add);
  localStorage.removeItem(KEYS.remove);
};

const getPending = () => ({
  add: read(KEYS.add),
  remove: read(KEYS.remove),
});

const setPending = (add: Set<number>, remove: Set<number>) => {
  write(KEYS.add, add);
  write(KEYS.remove, remove);
};

export { getPending, setPending, clear };

import { FullItem } from '@/shared/api/types';

const DB_NAME = 'tp_rd';
const STORE = 'favorites';

const openDb = (): Promise<IDBDatabase> =>
  new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);

    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE, { keyPath: 'item.id' });
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

const getItem = (db: IDBDatabase, id: number): Promise<FullItem | undefined> =>
  new Promise((resolve, reject) => {
    const req = db.transaction(STORE).objectStore(STORE).get(id);

    req.onsuccess = () => resolve(req.result as FullItem | undefined);
    req.onerror = () => reject(req.error);
  });

const putItem = (db: IDBDatabase, item: FullItem): Promise<void> =>
  new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');

    tx.objectStore(STORE).put(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });

const deleteItem = (db: IDBDatabase, id: number): Promise<void> =>
  new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');

    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });

const getAllKeys = (db: IDBDatabase): Promise<number[]> =>
  new Promise((resolve, reject) => {
    const req = db.transaction(STORE).objectStore(STORE).getAllKeys();

    req.onsuccess = () => resolve(req.result as number[]);
    req.onerror = () => reject(req.error);
  });

export { openDb, getItem, getAllKeys, putItem, deleteItem };

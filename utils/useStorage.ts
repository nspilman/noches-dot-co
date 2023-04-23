// useStorage.ts
interface IStorage<T extends string, U extends string | null> {
  getItem(key: T): U | null;
  setItem(key: T, value: U): void;
  removeItem(key: T): void;
  clear(): void;
}

class InMemoryStore<T extends string, U extends string | null>
  implements IStorage<T, U>
{
  private store: Record<T, U>;

  constructor() {
    this.store = {} as Record<T, U>;
  }

  getItem(key: T): U | null {
    return this.store[key as unknown as T] || null;
  }

  setItem(key: T, value: U): void {
    this.store[key] = value;
  }

  removeItem(key: T): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {} as Record<T, U>;
  }
}

const useInMemoryStorage = <
  T extends string,
  U extends string | null
>(): IStorage<T, U> => {
  const inMemoryStorage = new InMemoryStore<T, U>();
  return {
    getItem: (key) => inMemoryStorage.getItem(key),
    setItem: (key, value) => inMemoryStorage.setItem(key, value),
    removeItem: (key) => inMemoryStorage.removeItem(key),
    clear: () => inMemoryStorage.clear(),
  };
};

const useLocalStorage = <T extends string, U extends string | null>(): IStorage<
  T,
  U
> => {
  return {
    getItem: (key) => localStorage.getItem(key) as U,
    setItem: (key, value) => localStorage.setItem(key, value as string),
    removeItem: (key) => localStorage.removeItem(key as unknown as string),
    clear: () => localStorage.clear(),
  };
};

export const useStorage = <T extends string, U extends string | null>() => {
  const localStorage = useLocalStorage<T, U>();
  const inMemoryStorage = useInMemoryStorage<T, U>();
  return typeof window !== "undefined" ? localStorage : inMemoryStorage;
};

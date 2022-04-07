class LocalStorageManager {
  static setItem = (key: string, data: any) => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = JSON.stringify(data);

        localStorage.setItem(key, serializedState);
      } catch {
        // ignore write errors
      }
    }
  };

  static getItem = (key: string): any | undefined => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = localStorage.getItem(key);

        if (serializedState === null) {
          return;
        }

        return JSON.parse(serializedState);
      } catch {
        // ignore write errors
      }
    }
  };

  static removeItem = (key: string) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch {
        // ignore write errors
      }
    }
  };

  static clear = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.clear();
      } catch {
        // ignore write errors
      }
    }
  };
}

export default LocalStorageManager;

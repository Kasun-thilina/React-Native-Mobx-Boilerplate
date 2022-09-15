import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * AsyncStorage only supports saving strings. so there are two functions written in here to save/read strings and to 
 * save JSON object as strings
 */

/**
 * Reads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function readString(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Reads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function read(key: string): Promise<any | null> {
  try {
    const result = await AsyncStorage.getItem(key);
    if (result != null) {
      return JSON.parse(result);
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key: string, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to remove.
 */
export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch { }
}

/**
 * Clear all data in the AsyncStorage
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch { }
}

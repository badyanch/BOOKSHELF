import Notiflix, { Notify } from 'notiflix';

export const STORAGE_KEY = 'card-info';
export let newArray = [];

export async function saveInStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getStorageItem() {
  try {
    const storageData = localStorage.getItem(STORAGE_KEY);
    if (storageData) {
      const parsedData = JSON.parse(storageData);
      return parsedData;
    }
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
}
export async function clearStorage(key) {
  localStorage.removeItem(key);
}

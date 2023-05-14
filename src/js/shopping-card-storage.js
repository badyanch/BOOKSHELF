import Notiflix, { Notify } from "notiflix";

export const STORAGE_KEY = 'card-info';

export function saveInStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getStorageItem() {
    try {
        const storageData = localStorage.getItem(STORAGE_KEY);
        const parsedData = JSON.parse(storageData)
        return parsedData;

    } catch (error) {
        Notify.failure(`${error.message}`);
    }
}
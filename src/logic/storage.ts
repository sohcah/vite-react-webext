import { useLocalStorage } from "react-use-storage";

export function useStorageDemo() {
    return useLocalStorage<string>("webext-demo");
}
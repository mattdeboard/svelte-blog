import { writable } from "svelte/store";

export type KeyPath =
  `20${number}${number}/${number}${number}/${number}${number}`;
type StoreData = {
  [K in KeyPath]?: {
    public: "yes" | "no";
    summary?: string;
    tags: string;
  };
} & { hasFetched: boolean; orderedEntries?: KeyPath[] };
const indexData: StoreData = { hasFetched: false, orderedEntries: [] };

export const indexStore = writable(indexData);

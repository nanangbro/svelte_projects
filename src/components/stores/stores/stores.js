import { writable } from 'svelte/store';

export const countWritable = writable(0);
export const countAutoSubscriptions = writable(0);
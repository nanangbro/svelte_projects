import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const countWritable = writable(0);
export const countAutoSubscriptions = writable(0);

//Readable Store
export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
import { writable } from 'svelte/store';
import { readable, derived } from 'svelte/store';

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

//Derived Store
const start = new Date();

export const elapsed = derived(
	time,
	$time => Math.round(($time - start) / 1000)
);

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const countCustom = createCount();
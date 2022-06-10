import { derived, writable } from 'svelte/store';

const promises: Promise<unknown>[] = [];
const waitingCount = writable(0);
export const loading = derived(waitingCount, (count) => count > 0 || promises.length === 0);

/**
 * Wait for promise to finish loading. If waitFor is never called, loading will be true forever.
 */
export function waitFor<T>(promise: Promise<T>) {
	promises.push(promise);
	waitingCount.update((count) => count + 1);
	promise.finally(() => {
		waitingCount.update((count) => count - 1);
	});
	return promise;
}

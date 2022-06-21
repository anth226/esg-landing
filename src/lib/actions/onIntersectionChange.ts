import type { Action } from 'svelte/action';

export const onIntersectionChange: Action<
	HTMLElement,
	{ targets: HTMLElement[]; callback: (entries: IntersectionObserverEntry[]) => void }
> = (node, params) => {
	let cb = params?.callback ?? (() => undefined);
	const observer = new IntersectionObserver((entries) => cb(entries), {
		root: node,
	});
	const observe = (elements: HTMLElement[]) => {
		elements.forEach((element) => {
			observer.observe(element);
		});
	};
	const unobserve = (elements: HTMLElement[]) => {
		elements.forEach((element) => {
			observer.unobserve(element);
		});
	};

	params && observe(params.targets);

	return {
		destroy() {
			observer.disconnect();
		},
		update({ targets, callback }) {
			cb = callback;
			params && unobserve(params.targets);
			observe(targets);
		},
	};
};

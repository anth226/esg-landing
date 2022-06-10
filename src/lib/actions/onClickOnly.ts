import type { Action } from 'svelte/action';

export const onClickOnly: Action<HTMLElement, (e: MouseEvent) => void> = (node, fn) => {
	let isDragging = false;
	let onClick = fn;
	const onMouseMove = () => {
		isDragging = true;
		window.removeEventListener('mousemove', onMouseMove);
	};
	const onMousedown = () => {
		window.addEventListener('mousemove', onMouseMove);
	};
	const onMouseup = (e: MouseEvent) => {
		const wasDragging = isDragging;
		isDragging = false;
		window.removeEventListener('mousemove', onMouseMove);
		if (!wasDragging) {
			onClick?.(e);
		}
	};

	node.addEventListener('mousedown', onMousedown);
	node.addEventListener('mouseup', onMouseup);

	return {
		destroy() {
			node.removeEventListener('mousedown', onMousedown);
			node.removeEventListener('mouseup', onMouseup);
		},
		update(fn) {
			onClick = fn;
		},
	};
};

<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import { onIntersectionChange } from '$lib/actions/onIntersectionChange';
	import TimelineItem from './TimelineItem.svelte';

	const data = [
		{
			year: 2022,
			projects: [
				{ name: 'DEI Policy', translateX: '-60%' },
				{ name: 'Procurement', translateX: '-20%' },
				{ name: 'Scope 3 GHG', translateX: '50%' },
				{ name: 'Responsive Design', translateX: '-50%' },
				{ name: 'ESG Baseline', translateX: '-50%' },
			],
		},
		{
			year: 2023,
			projects: [
				{ name: 'Procurement', translateX: '-20%' },
				{ name: 'SOC 2 Certification', translateX: '-50%' },
				{ name: 'Scope 1 & 2 GHG', translateX: '20%' },
				{ name: 'Employee Handbook', translateX: '-20%' },
				{ name: 'Fair Wage Analysis', translateX: '-50%' },
			],
		},
		{
			year: 2024,
			projects: [
				{ name: 'Hazardous Waste Policy', translateX: '-60%' },
				{ name: 'Local Community Engagement', translateX: '-20%' },
				{ name: 'Remote Working Policy', translateX: '50%' },
				{ name: 'Security Control Certification', translateX: '-50%' },
				{ name: 'Disaster Recovery Process', translateX: '-50%' },
			],
		},
		{
			year: 2025,
			projects: [
				{ name: 'Disaster Recovery Process', translateX: '-50%' },
				{ name: 'Impact Analysis', translateX: '-60%' },
				{ name: 'Stakeholder Surveys', translateX: '50%' },
				{ name: 'Benchmark Analysis', translateX: '-20%' },
				{ name: 'Svelte Kit 1.0', translateX: '-50%' },
			],
		},
		{
			year: 2026,
			projects: [
				{ name: 'Stakeholder Surveys', translateX: '-20%' },
				{ name: 'Benchmark Analysis', translateX: '-50%' },
				{ name: 'Svelte Kit 1.0', translateX: '50%' },
				{ name: 'Svelte Kit 2.0', translateX: '-50%' },
				{ name: 'Svelte Kit 3.0', translateX: '-50%' },
			],
		},
		{
			year: 2027,
			projects: [
				{ name: 'Svelte Kit 3.0', translateX: '-50%' },
				{ name: 'Svelte Kit 4.0', translateX: '-50%' },
				{ name: 'Svelte Kit 5.0', translateX: '-50%' },
				{ name: 'Svelte Kit 6.0', translateX: '-50%' },
				{ name: 'Svelte Kit 7.0', translateX: '-50%' },
			],
		},
		{
			year: 2028,
			projects: [
				{ name: 'Svelte Kit 7.0', translateX: '-50%' },
				{ name: 'Svelte Kit 8.0', translateX: '-50%' },
				{ name: 'Svelte Kit 9.0', translateX: '-50%' },
				{ name: 'Svelte Kit 10.0', translateX: '-50%' },
				{ name: 'Svelte Kit 11.0', translateX: '-50%' },
			],
		},
	];

	const projectDisplayConfig = [
		{ border: 'primary' as const },
		{ border: 'gray' as const },
		{ border: 'secondary' as const },
		{ border: 'gray' as const },
		{ border: 'primary' as const },
	];

	let ulElement: HTMLUListElement;
	let targetNodes: HTMLElement[] = [];
	let visibleNodes = new Set<Element>();
	const getIndex = (node: Element) => {
		const index = node.getAttribute('data-order-index');
		return parseInt(index ?? '0', 10);
	};
	$: selectedYear = +(
		[...visibleNodes.values()].sort((a, b) => getIndex(a) - getIndex(b)).at(1)?.textContent ?? '0'
	);
	$: isFirst = selectedYear === data[0].year;
	$: isLast = selectedYear === data[data.length - 1].year;
	$: projects = data.find(({ year }) => year === selectedYear)?.projects ?? [];

	onMount(() => {
		targetNodes = Array.from(ulElement.children) as HTMLElement[];
		targetNodes.forEach((child, idx) => {
			child.setAttribute('data-order-index', idx.toString());
		});
	});

	function onIntersect(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				visibleNodes = visibleNodes.add(entry.target);
			} else {
				visibleNodes.delete(entry.target);
				visibleNodes = visibleNodes;
			}
		});
	}

	const gapSize = 64;
	const itemSize = 30;
	const axisX = 135;

	function scroll(items: number) {
		ulElement.scrollBy({ left: items * (itemSize + gapSize), behavior: 'smooth' });
	}

	function scrollToYear(year: number) {
		scroll(year - selectedYear);
	}
</script>

<div class="relative">
	<!-- year selector -->
	<div class="flex gap-4 items-center text-gray-500 relative py-4">
		<button on:click={() => scroll(-1)} disabled={isFirst} class="disabled:invisible">&lt;</button>
		<ul
			class="flex gap-[64px] w-[26rem] overflow-x-scroll p-2 snap-x snap-mandatory relative z-10"
			style="scrollbar-width: none; scroll-snap-type: mandatory;"
			bind:this={ulElement}
			use:onIntersectionChange={{
				targets: targetNodes,
				callback: onIntersect,
			}}
		>
			<div class="snap-start" />
			{#each data as item, idx}
				<li
					class:snap-start={idx !== data.length - 1}
					class:text-white={item.year === selectedYear}
					bind:this={targetNodes[idx]}
				>
					<button on:click={() => scrollToYear(item.year)}>
						{item.year}
					</button>
				</li>
			{/each}
			<div />
			<div />
			<div />
		</ul>
		<button on:click={() => scroll(1)} disabled={isLast} class="disabled:invisible">&gt;</button>

		<!-- circle -->
		<div
			class="w-12 h-12 bg-secondary rounded-full absolute z-0"
			style="transform: translateX(calc({axisX}px - 50%));"
		/>
	</div>

	<!-- vertical line -->
	<div
		class="w-1 h-96 bg-gradient-to-b from-secondary"
		style="transform: translate(calc({axisX}px - 50%), -15px);"
	/>

	<!-- projects -->
	{#each projects as project, idx}
		{@const translateX = project.translateX || '-50%'}
		{@const flyDirection = parseInt(translateX) >= -50 ? 1 : -1}
		<div
			class="absolute text-gray-600 hover:text-primary transition-transform"
			style="
				top: {90 + idx * 70}px;
				left: {axisX}px;
				transform: translateX({translateX});"
			in:fly={{ x: flyDirection * 100, delay: 200, duration: 200 }}
			out:fly={{ x: flyDirection * 100, duration: 200 }}
		>
			<TimelineItem border={projectDisplayConfig[idx].border}>{project.name}</TimelineItem>
		</div>
	{/each}
</div>

<style lang="postcss">
	ul::-webkit-scrollbar {
		display: none;
	}

	ul > :is(li, div) {
		flex-basis: 30px;
		flex-shrink: 0;
	}
</style>

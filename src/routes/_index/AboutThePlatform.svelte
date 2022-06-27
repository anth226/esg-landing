<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	const items = [
		{ name: 'Sign Up', image: '/examples/screenshots.png' },
		{ name: 'Materiality', image: '/examples/screenshots.png' },
		{ name: 'ESG Assessment', image: '/examples/screenshots.png' },
		{ name: 'Analyst Call', image: '/examples/screenshots.png' },
		{ name: 'Next Steps', image: '/examples/screenshots.png' },
	];
	let active = 0;
</script>

<section class="text-secondary bg-[#F7F7F7] overflow-hidden">
	<div class="items-center max-w-6xl m-auto">
		<div class="text-center mt-24 max-w-2xl m-auto">
			<div class="text-gray-400 font-sans">About the Platform</div>
			<div class="text-3xl mb-6 text-secondary font-bold">The ESG Impact Process</div>
			<p class="font-sans mb-6 text-secondary ">
				Our flagship process takes ~3 hours and guides your company or fund through qualitative and
				quantitative assessments. The end result is an ESG rating, report, and recommended projects.
			</p>
			<p class="font-sans mb-6 text-secondary">
				The <span class="text-primary underline">next steps</span> are on your own time and discretion.
			</p>
		</div>

		<div class="grid grid-cols-2 my-24 gap-[120px] py-12">
			<ul class="menu text-black grid grid-rows-5 gap-4 col-span-1 w-[300px]">
				{#each items as { name }, idx}
					<li class:pre-gold={active === idx}>
						<button class="text-xl w-full" on:click={() => (active = idx)}>{name}</button>
					</li>
				{/each}
			</ul>
			<div class="grid">
				{#key active}
					<img
						src={items[active].image}
						alt={`${items[active].name} screenshot`}
						class="shadow-2xl row-start-1 row-end-2 col-start-1 col-end-2"
						style="transform: translateX(250px) translateY(-50px) rotateX(60deg) rotateZ(-34deg) rotateY(0deg) scale(2.5);"
						in:fly={{ y: -50, duration: 250, delay: 250 }}
						out:fly={{ y: 50, duration: 250 }}
					/>
				{/key}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.pre-gold {
		background: #b7824b25;
		border-left: 3px solid hsl(var(--p));
		page-break-inside: avoid;
		display: block;
		word-wrap: break-word;
	}

	.pre-navy {
		background: #11334525;
		border-left: 3px solid hsl(var(--s));
		page-break-inside: avoid;
		display: block;
		word-wrap: break-word;
	}
	.pre-gray {
		background: #aeaeae25;
		/* border-left: 3px solid #aeaeaeae; */
		page-break-inside: avoid;
		display: block;
		word-wrap: break-word;
	}
</style>

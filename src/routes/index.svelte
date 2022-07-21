<script lang="ts">
	/// COMPONENTS ///
	import Globe from '$lib/components/Globe.svelte';
	import Stat from '$lib/components/Stat.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';

	/// STATE ///
	import { email } from '$lib/stores/user';
</script>

<svelte:head>
	<title>ESG Impact</title>
</svelte:head>
<section class="flex-1 flex flex-col gradient-background">
	<div class="max-w-6xl w-full mx-auto px-2 flex-1 flex flex-col justify-center">
		<div class="flex flex-col lg:flex-row w-full justify-between items-center py-4">
			<div class="max-w-lg">
				<h1 class="text-6xl">
					<div class="text-white">
						The Pragmatic <p class="text-primary">ESG Platform</p>
					</div>
					<hr class="border-primary w-[68%]" />
				</h1>
				<p class="py-12 font-sans text-gray-300 text-md">
					Transparency-as-a-Service ESG for venture capital funds, private equity groups, family
					offices, and companies.
				</p>
				<div class="flex flex-wrap gap-3 w-full">
					<div class="form-control font-sans flex-1">
						<input
							type="email"
							id="hero-email"
							placeholder="Email address..."
							class="input bg-white text-secondary"
							bind:value={$email}
						/>
					</div>
					<a class="btn font-sans glass" href="/contact">Schedule a Demo</a>
				</div>
			</div>
			<Globe />
		</div>

		<hr class="divider my-0 mb-6 border-gray-300 border-1 opacity-50" />

		<div class="flex flex-wrap gap-x-20 gap-y-6 mb-20 justify-start ">
			<Stat title="Assets on ESG Impact" value="Billions +" />
			<Stat title="Of Stars in the Sky" value="Millions +" />
			<Stat title="Stakeholder Reports" value="10,000 +" />
		</div>
	</div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		preserveAspectRatio="none"
		viewBox="0 0 1680 40"
		class="w-full"><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff" /></svg
	>
</section>

<section class="text-base-200 px-2 bg-white mb-6">
	<div class="max-w-6xl mx-auto flex flex-wrap gap-20 items-center justify-center mb-20">
		<img class="h-20 grayscale opacity-70" src="assets/partners/wondry.png" alt="wondry" />
		<img class="h-20 grayscale opacity-70" src="assets/partners/ilpa.webp" alt="ilpa" />
		<img class="h-20 grayscale opacity-70" src="assets/partners/sasb.png" alt="sasb" />
		<img class="h-20 grayscale opacity-70" src="assets/partners/sdgs.webp" alt="sdgs" />
		<img class="h-12 grayscale opacity-70" src="assets/partners/unpri.png" alt="unpri" />
	</div>
</section>
<section class="text-base-200 px-2 bg-white mb-12">
	<div class="max-w-6xl mx-auto flex flex-wrap items-center justify-center">
		<div class="text-secondary text-2xl font-sans">
			Managing ESG & Impact with Technology is Sustainable
		</div>
	</div>
</section>
<section class="text-base-200 px-2 bg-white mb-16 overflow-hidden">
	<img
		src="/assets/earth-asia.png"
		class="absolute z-10 h-[400px] w-auto left-0 opacity-80"
		alt=""
	/>
	<img
		src="/assets/earth-america.png"
		class="absolute z-10 h-[400px] w-auto right-0 opacity-80"
		alt=""
	/>
	<div class="z-10 relative">
		<div class="flex flex-wrap justify-between items-center max-w-6xl m-auto">
			<Timeline />
			<div class="max-w-lg pb-12">
				<div class="text-gray-400 font-sans">ESG Roadmaps & Playbooks</div>
				<div class="text-3xl mb-12 text-secondary font-bold">
					Understand your ESG Roadmap<br />
					customized for your
					<span
						class="text-primary underline text-decoration-primary decoration-1 underline-offset-[3px]"
						>Sector</span
					>
					&
					<span
						class="text-primary underline text-decoration-primary decoration-1 underline-offset-[3px]"
						>Size</span
					>
				</div>
				<p class="font-sans mb-12 text-secondary">
					ESG is a maze. Focus on your business; let us loremipsu mand et amare quid quick leris
					lupis monspae toretly lorem ip
				</p>
				<div class="text-primary font-sans text-sm">
					Compliance | ESG | Impact | Benchmarking | Roadmaps | Playbooks
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.gradient-background {
		background: url('/assets/particles.png'),
			linear-gradient(225deg, #86b6c2 10%, rgba(17, 51, 69, 1) 40%);
	}
</style>

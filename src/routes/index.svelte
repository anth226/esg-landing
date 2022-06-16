<script lang="ts">
	import Globe from '$lib/components/Globe.svelte';
	import Stat from '$lib/components/Stat.svelte';
</script>

<svelte:head>
	<title>ESG Impact</title>
</svelte:head>

<section class="flex-1 flex flex-col gradient-background">
	<div class="max-w-6xl w-full mx-auto px-2 flex-1 flex flex-col justify-center">
		<div class="flex flex-col lg:flex-row w-full justify-between items-center py-4">
			<div class="max-w-lg">
				<h1 class="text-6xl">
					<div class="text-white">The Pragmatic</div>
					<p class="text-primary hover:text-primary-focus">ESG Platform</p>
					<hr class="border-primary w-8/12" />
				</h1>
				<p class="py-12 font-sans text-gray-300 text-lg">
					Transparency-as-a-Service ESG for venture capital funds, private equity groups, and
					companies.
				</p>
				<div class="flex flex-wrap gap-3 w-full">
					<div class="form-control font-sans flex-1">
						<input
							type="text"
							id="hero-email"
							placeholder="Email address..."
							class="input bg-white text-base-100"
						/>
					</div>
					<button class="btn font-sans glass ">Schedule a Demo</button>
				</div>
			</div>
			<Globe />
		</div>

		<div class="divider my-0 mb-6" />

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
		class="w-full"
		style="bottom: -1px;"><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff" /></svg
	>
</section>

<section class="bg-white flex flex-wrap justify-center" style="height: 200px">
	<div class="max-w-6xl flex flex-wrap gap-20">
		<img class="h-20 grayscale" src="assets/partners/wondry.png" alt="wondry" />
		<img class="h-20 grayscale" src="assets/partners/c4e.jpg" alt="c4e" />
		<img class="h-20 grayscale" src="assets/partners/sasb.png" alt="sasb" />
		<img class="h-20 grayscale" src="assets/partners/sdgs.webp" alt="sdgs" />
		<img class="h-12 grayscale" src="assets/partners/unpri.png" alt="unpri" />
	</div>
</section>

<section class="bg-white flex flex-wrap justify-center" style="height: 500px">
	<div class='text-black'>Next section</div>
</section>
<section class="bg-base-100 flex flex-wrap justify-center" style="height: 500px">
	<div class='text-white'>Next section</div>
</section>
<section class="bg-white flex flex-wrap justify-center" style="height: 500px">
	<div class='text-black'>Next section</div>
</section>


<style lang="postcss">
	.gradient-background {
		background: url('/assets/particles.png'),
			linear-gradient(225deg, rgba(203, 255, 252, 0.5578606442577031) 0%, rgba(17, 51, 69, 1) 50%);
	}
</style>

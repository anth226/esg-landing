<script lang="ts">
	import Globe from '$lib/components/Globe.svelte';
	import Stat from '$lib/components/Stat.svelte';
	import Timeline from '$lib/components/Timeline/Timeline.svelte';
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
							class="input bg-white text-secondary"
						/>
					</div>
					<button class="btn font-sans glass">Schedule a Demo</button>
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
<section class="text-base-200 px-2 bg-white mb-16">
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
			<div class="overflow-hidden">
				<Timeline />
			</div>
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
					ESG is a maze. Focus on your business; let us layout best-practices and guide you through
					each and every one. Lorem Ipsum and more info.
				</p>
				<div class="text-primary font-sans text-sm">
					Compliance | ESG | Impact | Benchmarking | Roadmaps | Playbooks
				</div>
			</div>
		</div>
	</div>
</section>
<!-- <section class="bg-[#F7F7F7]">
	<div class="items-center max-w-6xl m-auto">
		<div>NEXT SECTION HERE</div>
		<img src="assets/example.png" class="h-[350px]" />
	</div>
</section> -->
<section class="text-secondary bg-[#F7F7F7]">
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

		<div class="grid grid-cols-2 my-24 gap-[120px]">
			<div class="text-black grid grid-rows-5 gap-4 col-span-1">
				<div class="flex flex-row">
					<div class="pre-gold w-[300px]">
						<span class="text-xl ml-3 mt-1">Sign Up</span>
						<!-- <p class="text-md text-gray-600 font-sans ml-3 mt-1">10 Minutes</p> -->
					</div>
				</div>

				<div class="flex flex-row">
					<div class="">
						<div class="text-xl ml-3 mt-1">Materiality</div>
						<!-- <div class="text-md text-gray-600 font-sans ml-3 mt-1">30 Minutes</div> -->
					</div>
				</div>

				<div class="">
					<div class="text-xl ml-3 mt-1">ESG Assessment</div>
					<!-- <div class="text-md text-gray-600 font-sans ml-3 mt-1">90 Minutes</div> -->
				</div>
				<div class="">
					<div class="text-xl ml-3 mt-1">Analyst Call</div>
					<!-- <div class="text-md text-gray-600 font-sans ml-3 mt-1">60 Minutes</div> -->
				</div>
				<div class="flex flex-row">
					<div class="w-[200px]">
						<div class="text-xl ml-3 mt-1">Next Steps</div>
						<!-- <div class="text-md text-gray-600 font-sans ml-3 mt-1">Discretionary</div> -->
					</div>
				</div>
			</div>
			<div class="">Screenshots here</div>
		</div>
	</div>
</section>
<section>asfd</section>

<!-- <section class="bg-secondary flex flex-wrap justify-center">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		preserveAspectRatio="none"
		viewBox="0 0 1680 40"
		class="w-full -translate-y-px rotate-180"
		><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff" /></svg
	>
</section> -->
<style lang="postcss">
	.gradient-background {
		background: url('/assets/particles.png'),
			linear-gradient(225deg, #86b6c2 10%, rgba(17, 51, 69, 1) 40%);
	}
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

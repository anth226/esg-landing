<script lang="ts">
	import Globe from '$lib/components/Globe.svelte';
	import Stat from '$lib/components/Stat.svelte';

</script>

<svelte:head>
	<title>ESG Impact</title>
</svelte:head>


<section class="bg-base-100 flex-1 flex flex-col">
	<div class="max-w-6xl w-full mx-auto px-2 flex-1 flex flex-col justify-center">
		<div class="flex flex-col lg:flex-row w-full justify-between items-center py-4">
			<div class="max-w-lg">
				<h1 class="text-6xl">
					<div class="text-white">The Pragmatic</div>
					<span
						class="text-primary w-max relative after:inline-block after:absolute after:bottom-3 after:left-0 after:w-full after:h-2 after:bg-gray-400 after:opacity-50 after:rounded-md hover:text-primary-focus"
						>ESG Platform</span
					>
				</h1>
				<p class="py-12 font-sans text-gray-300 text-lg">
					The transparency-as-a-service ESG platform for venture capital funds, private equity
					groups, and companies.
				</p>
				<div class="flex gap-3 items-end w-full">
					<div class="form-control font-sans">
						<input
							type="text"
							id="hero-email"
							placeholder="Email address..."
							class="input bg-white text-base-100 min-w-[300px]"
						/>
					</div>
					<button class="btn font-sans glass">Schedule a Demo</button>
				</div>
			</div>
			<Globe />
		</div>

		<div class="divider my-0 mb-6" />

		<div class="flex flex-wrap gap-x-20 gap-y-6 mb-20 justify-start">
			<Stat title="Stakeholder Reports" value="10,000+" />
			<Stat title="Stakeholder Reports" value="10,000+" />
			<Stat title="Stakeholder Reports" value="10,000+" />
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

<section class="bg-base-100 text-black" style="background-color: #36D399; height: 500px">
	Another section here - screenshot demos (like monday.com)
</section>

<section class="bg-base-100 text-black" style="background-color: salmon; height: 500px">
	Another section here 
</section>
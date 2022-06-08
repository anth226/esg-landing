<script lang="ts">
	import Globe from '$lib/components/Globe.svelte';
	import Stat from '$lib/components/Stat.svelte';
</script>

<svelte:head>
	<title>ESG Impact</title>
</svelte:head>

<div class="bg-base-100">
	<div class="max-w-5xl mx-auto px-2">
		<div class="flex flex-col lg:flex-row w-full justify-between items-center py-4">
			<div class="max-w-sm">
				<h1 class="text-5xl">
					<div class="text-white">ESG for</div>
					<div
						class="text-primary w-max relative after:inline-block after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-slate-400 after:opacity-50 after:rounded-md"
					>
						Private Markets
					</div>
				</h1>
				<p class="py-6 font-sans">
					The transparency-as-a-service ESG platform for venture capital funds, private equity
					groups, and companies.
				</p>

				<div class="flex gap-3 items-end">
					<div class="form-control">
						<label class="label" for="hero-email">
							<span class="label-text">Email Address</span>
						</label>
						<input
							type="text"
							id="hero-email"
							placeholder="john@example.com"
							class="input w-full bg-white text-black"
						/>
					</div>
					<button class="btn btn-primary">Schedule a Demo</button>
				</div>
			</div>
			<Globe />
		</div>

		<div class="divider my-0" />

		<div class="flex flex-wrap gap-x-20 gap-y-6 mb-6 justify-start">
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
</div>

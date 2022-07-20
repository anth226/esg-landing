<script>
	import PricingCard from '$lib/components/PricingCard.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { fly } from 'svelte/transition';

	let showFunds = false;
	const gridClasses =
		'grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] grid-flow-row gap-4 mx-2 mb-10 col-start-1 col-end-2 row-start-1 row-end-2';
</script>

<section class="flex-1 flex flex-col relative bg-[#F7F7F7]">
	<div class="max-w-6xl w-full mx-auto flex-1 flex flex-col mt-24">
		<div class="flex flex-wrap">
			<div class="w-full px-2">
				<div class="text-center mx-auto lg:mb-20 max-w-[550px]">
					<span class="font-semibold text-lg text-primary mb-2 block">Pricing Tables</span>
					<h2 class="font-bold text-3xl text-secondary mb-4">Simple & Transparent Pricing</h2>
					<p class="text-secondary font-sans">We're 20-30x less than consultants.</p>
					<p class="text-secondary font-sans">We're 10-20x less than other ESG solutions.</p>
					<br />
					<p class="text-secondary font-sans">
						Oh yeah, and we deliver ∞ more value. #democratizeESG
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-wrap w-full mb-16">
			<label class="mx-auto inline-flex items-center cursor-pointer" for="pricing-fund-toggle">
				<div
					class="mr-16 text-xl"
					class:text-gray-400={showFunds}
					class:text-primary={!showFunds}
					class:font-bold={!showFunds}
				>
					Companies
				</div>
				<Toggle bind:on={showFunds} id="pricing-fund-toggle" />
				<div
					class="ml-16 text-xl"
					class:text-gray-400={!showFunds}
					class:text-primary={showFunds}
					class:font-bold={showFunds}
				>
					Funds
				</div>
			</label>
		</div>

		<div class="grid grid-cols-1 grid-rows-1 overflow-hidden">
			{#if showFunds}
				<div
					class={gridClasses}
					out:fly={{ duration: 250, x: 300 }}
					in:fly={{ duration: 250, x: 300, delay: 500 }}
				>
					<PricingCard
						title="Fund"
						price="$3,999 / year"
						description="Less than $500 million in AUM."
						features={['Unlimited Users', 'All UI components', 'Lifetime access', 'Free updates']}
						btnText="Get Started"
					/>
					<PricingCard
						title="Fund"
						price="$8,999 / year"
						description="From $500 million to $1 billion in AUM."
						features={['Unlimited Users', 'All UI components', 'Lifetime access', 'Free updates']}
						btnText="Get Started"
						btnHighlight
					/>
					<PricingCard
						title="Fund"
						price="$14,999 / year"
						description="From $1 billion to $10 billion in AUM."
						features={['Unlimited Users', 'All UI components', 'Lifetime access', 'Free updates']}
						btnText="Get Started"
					/>
					<PricingCard
						title="Fund"
						price="$29,999 / year"
						description="Over $10 billion in AUM."
						features={['Unlimited Users', 'All UI components', 'Lifetime access', 'Free updates']}
						btnText="Get Started"
						btnHighlight
					/>
				</div>
			{:else}
				<div
					class={gridClasses}
					out:fly={{ duration: 250, x: -300 }}
					in:fly={{ duration: 250, x: -300, delay: 500 }}
				>
					<PricingCard
						title="Start-up"
						price="$999 / year"
						description="For pre-revenue companies."
						features={['Unlimited Users', 'All UI components', 'Lifetime access', 'Free updates']}
						btnText="Get Started"
					/>
					<PricingCard
						title="Growth Equity"
						price="$3,999 / year"
						description="From $0 to $50 million in revenue."
						features={['Unlimited Users', 'All UI components', 'Lifetime access', 'Free updates']}
						btnText="Get Started"
						btnHighlight
					/>
					<PricingCard
						title="Middle Market"
						price="$8,999 / year"
						description="From $50 to $500 million in revenue."
						features={['Unlimited Users', 'All UI components', 'Lifetime access', 'Free updates']}
						btnText="Get Started"
					/>
					<PricingCard
						title="Enterprise"
						price="$15,999 / year"
						description="From $500 million and up in revenue."
						features={['Unlimited Users', 'All UI components', 'Lifetime access', 'Free updates']}
						btnText="Get Started"
						btnHighlight
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

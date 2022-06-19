<script>
	import PricingCard from '$lib/components/PricingCard.svelte';

	let showFunds = false;
</script>

<section class="flex-1 flex flex-col relative bg-white">
	<div class="max-w-6xl w-full mx-auto flex-1 flex flex-col mt-24">
		<div class="flex flex-wrap">
			<div class="w-full px-2">
				<div class="text-center mx-auto lg:mb-20 max-w-[550px]">
					<span class="font-semibold text-lg text-primary mb-2 block">Pricing Tables</span>
					<h2 class="font-bold text-3xl text-base-100 mb-4">Simple & Transparent Pricing</h2>
					<p class="text-base-100 font-sans">We're 20-30x less than consultants.</p>
					<p class="text-base-100 font-sans">We're 10-20x less than other ESG solutions.</p>
					<br />
					<p class="text-base-100 font-sans">
						Oh yeah, and we deliver ∞ more value. #democratizeESG
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-wrap w-full mb-16">
			<label class="label mx-auto" for="pricing-fund-toggle">
				<div
					class="mr-16 text-xl"
					class:text-gray-400={showFunds}
					class:text-primary={!showFunds}
					class:font-bold={!showFunds}
				>
					Companies
				</div>
				<div class="toggle">
					<input
						class="toggle-state"
						id="pricing-fund-toggle"
						type="checkbox"
						name="check"
						bind:checked={showFunds}
					/>
					<div class="indicator" />
				</div>
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

		<div
			class="grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] grid-flow-row gap-4 mx-2 mb-10"
		>
			{#if showFunds}
				<PricingCard
					title="Funds"
					price="$999 / year"
					description="From $0 to $1 MM in revenue."
					features={[
						'Unlimited Users',
						'All UI components',
						'Lifetime access',
						'Free updates',
						'Use on 1 (one) project',
						'3 Months support',
					]}
					btnText="Choose Personal"
				/>
				<PricingCard
					title="Funds"
					price="$999 / year"
					description="From $0 to $1 MM in revenue."
					features={[
						'Unlimited Users',
						'All UI components',
						'Lifetime access',
						'Free updates',
						'Use on 1 (one) project',
						'3 Months support',
					]}
					btnText="Choose Personal"
				/>
				<PricingCard
					title="Funds"
					price="$999 / year"
					description="From $0 to $1 MM in revenue."
					features={[
						'Unlimited Users',
						'All UI components',
						'Lifetime access',
						'Free updates',
						'Use on 1 (one) project',
						'3 Months support',
					]}
					btnText="Choose Personal"
				/>
				<PricingCard
					title="Funds"
					price="$999 / year"
					description="From $0 to $1 MM in revenue."
					features={[
						'Unlimited Users',
						'All UI components',
						'Lifetime access',
						'Free updates',
						'Use on 1 (one) project',
						'3 Months support',
					]}
					btnText="Choose Personal"
				/>
			{:else}
				<PricingCard
					title="Start-up"
					price="$999 / year"
					description="From $0 to $1 MM in revenue."
					features={[
						'Unlimited Users',
						'All UI components',
						'Lifetime access',
						'Free updates',
						'Use on 1 (one) project',
						'3 Months support',
					]}
					btnText="Choose Personal"
					flyFromLeft
				/>
				<PricingCard
					title="Growth Equity"
					price="$4,999 / year"
					description="From $1 to $50 MM in revenue."
					features={[
						'Unlimited Users',
						'All UI components',
						'Lifetime access',
						'Free updates',
						'Use on 3 (Three) project',
						'4 Months support',
					]}
					btnText="Choose Business"
					btnHighlight
					flyFromLeft
				/>
				<PricingCard
					title="Middle Market"
					price="$9,999 / year"
					description="From $50 to $500 MM in revenue."
					features={[
						'Unlimited Users',
						'All UI components',
						'Lifetime access',
						'Free updates',
						'Use on Unlimited project',
						'12 Months support',
					]}
					btnText="Choose Professional"
					flyFromLeft
				/>
				<PricingCard
					title="Enterprise"
					price="$19,999 / year"
					description="From $500 and up in revenue."
					features={[
						'Unlimited Users',
						'All UI components',
						'Lifetime access',
						'Free updates',
						'Use on 3 (Three) project',
						'4 Months support',
					]}
					btnText="Choose Business"
					btnHighlight
					flyFromLeft
				/>
			{/if}
		</div>
	</div>
</section>

<style>
	.label {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		color: #394a56;
	}

	.toggle {
		isolation: isolate;
		position: relative;
		height: 34px;
		width: 68px;
		border-radius: 17px;
		overflow: hidden;
		box-shadow: -10px -5px 10px 0px #ffffff, 10px 5px 10px 0px #d1d9e6,
			5px 5px 5px 0px #d1d9e6 inset, -5px -5px 5px 0px #ffffff inset;
	}

	.toggle-state {
		display: none;
	}

	.indicator {
		height: 100%;
		width: 200%;
		background: hsl(var(--p));
		border-radius: 17px;
		transform: translate3d(-75%, 0, 0);
		transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
		box-shadow: -10px -5px 10px 0px #ffffff, 10px 5px 15px 0px #d1d9e6;
	}

	.toggle-state:checked ~ .indicator {
		transform: translate3d(25%, 0, 0);
	}
</style>

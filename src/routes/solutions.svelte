<script lang="ts">
	let activeTab: number = 0;

	function setActiveTab(index: number) {
		activeTab = index;
	}
</script>

<section class="bg-[#F7F7F7] shadow">
	<div class="max-w-6xl mx-auto ">
		<div class="flex flex-col w-full justify-center items-start py-4">
			<div class="mt-20 text-primary font-bold text-xl">A Platform Built for Everyone</div>
			<div class="text-6xl text-secondary mt-4">
				Solving <span class="custom-underline underline-offset-4">all</span> ESG Pain Points.
			</div>
		</div>
		<div class="mb-16 text-black max-w-2xl">
			Lorem ipsum. Something about ESG. Something about Impact. Something about how our platfrom
			touches all asset groups since both esg and imapct touch everything.
		</div>
	</div>
</section>
<section class="max-w-6xl mx-auto">
	<div class="grid lg:grid-cols-[auto,1fr] gap-16 p-10 mt-8">
		<aside class="">
			<!-- style --fa-primary-color and secondary are for icons-->
			<ul
				class="flex lg:flex-col gap-3"
				style="--fa-primary-color: #113345; --fa-secondary-color: #113345"
			>
				<li
					class=" cursor-pointer p-1 font-bold text-[#757575] text-lg border-b-2 hover:border-primary"
					on:click={() => setActiveTab(0)}
				>
					<i class="absolute fa-duotone fa-briefcase " />
					<span class="ml-14">Venture Capital</span>
				</li>
				<li
					class="cursor-pointer p-1 font-bold text-[#757575] text-lg border-b-2 hover:border-primary"
					on:click={() => setActiveTab(1)}
				>
					<i class="absolute fa-duotone fa-circle-nodes " />
					<span class="ml-14">Private Equity</span>
				</li>
				<li
					class="cursor-pointer p-1 font-bold text-[#757575] text-lg border-b-2 hover:border-primary"
					on:click={() => setActiveTab(2)}
				>
					<i class="absolute fa-duotone fa-house-building " />
					<span class="ml-14">Public Companies</span>
				</li>
				<li
					class="cursor-pointer p-1 font-bold text-[#757575] text-lg border-b-2 hover:border-primary"
					on:click={() => setActiveTab(3)}
				>
					<i class="absolute fa-duotone fa-briefcase " />
					<span class="ml-14">Private Companies</span>
				</li>
				<li
					class="cursor-pointer p-1 font-bold text-[#757575] text-lg border-b-2 hover:border-primary"
					on:click={() => setActiveTab(4)}
				>
					<i class="absolute fa-duotone fa-book-open-reader " />
					<span class="ml-14">Start-ups</span>
				</li>
			</ul>
		</aside>
		<main class="grid gap-5">
			{#if activeTab === 0}
				<header class="grid grid-cols-[1fr,auto] gap-10 items-center">
					<h2 class="text-xl font-bold text-[#757575]">
						How ESG Impact solves <span class="text-primary">{'Venture Capital'}'s</span> pain points...
					</h2>
					<div class="text-white btn btn-sm glass font-bold bg-primary hover:bg-secondary">
						Schedule a Demo
					</div>
				</header>
				<hr />
				<table class="col-span-full">
					<div class="relative grid grid-cols-2 border-2">
						<th class="text-xl font-normal">Venture Capital need... </th>
						<th class="text-xl font-normal">ESG Impact has... </th>
					</div>
					<div
						class="relative grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>ESG-related asset allocation customization capabilities</td>
						<td
							>Incorporate house views in the most comprehensive & granular sustainability tech kit
							available with broad, reliable data coverage of 2-3x more than alternatives (30,000+
							companies, 220,000+ funds, 198 countries, and 188 local governments)</td
						>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							1
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>Portfolio reporting for regulators &amp; clients</td>
						<td
							>3 clicks from portfolio to report with comprehensive, always-up-to-date SFDR, EU
							Taxonomy, and TCFD capabilities</td
						>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							2
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>Advanced reporting vs UN Sustainable Development Goals</td>
						<td
							>Go beyond overall revenue alignment to the impact of a company's operations and it's
							different products and services for all 16 measurable UN SDGs</td
						>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							3
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>Seamless integration into your existing workflow</td>
						<td>Fully-adaptable API connection or web-based widgets</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							4
						</div>
					</div>
				</table>
			{:else if activeTab === 1}
				<header class="grid grid-cols-[1fr,auto] gap-10 items-center">
					<h2 class="text-xl font-bold text-[#757575]">
						How ESG Impact solves <span class="text-primary">{'Venture Capital'}'s</span> pain points...
					</h2>
					<div class="text-white btn btn-sm glass font-bold bg-primary hover:bg-secondary">
						Schedule a Demo
					</div>
				</header>
				<hr />
				<table class="col-span-full">
					<div class="relative grid grid-cols-2 border-2">
						<th class="text-xl font-normal">Heading {activeTab}</th>
						<th class="text-xl font-normal">Heading {activeTab}</th>
					</div>
					<div
						class="relative grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 1 - {activeTab}
						</td>
						<td>
							Item 1 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							1
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 2 - {activeTab}
						</td>
						<td>
							Item 2 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							2
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 3 - {activeTab}
						</td>
						<td>
							Item 3 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							3
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 3 - {activeTab}
						</td>
						<td>
							Item 3 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							4
						</div>
					</div>
				</table>
			{:else if activeTab === 2}
				<header class="grid grid-cols-[1fr,auto] gap-10 items-center">
					<h2 class="text-xl font-bold text-[#757575]">
						How ESG Impact solves <span class="text-primary">{'Venture Capital'}'s</span> pain points...
					</h2>
					<div class="text-white btn btn-sm glass font-bold bg-primary hover:bg-secondary">
						Schedule a Demo
					</div>
				</header>
				<hr />
				<table class="col-span-full">
					<div class="relative grid grid-cols-2 border-2">
						<th class="text-xl font-normal">Heading {activeTab}</th>
						<th class="text-xl font-normal">Heading {activeTab}</th>
					</div>
					<div
						class="relative grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 1 - {activeTab}
						</td>
						<td>
							Item 1 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							1
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 2 - {activeTab}
						</td>
						<td>
							Item 2 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							2
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 3 - {activeTab}
						</td>
						<td>
							Item 3 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							3
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 3 - {activeTab}
						</td>
						<td>
							Item 3 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							4
						</div>
					</div>
				</table>
			{:else if activeTab === 3}
				<header class="grid grid-cols-[1fr,auto] gap-10 items-center">
					<h2 class="text-xl font-bold text-[#757575]">
						How ESG Impact solves <span class="text-primary">{'Venture Capital'}'s</span> pain points...
					</h2>
					<div class="text-white btn btn-sm glass font-bold bg-primary hover:bg-secondary">
						Schedule a Demo
					</div>
				</header>
				<hr />
				<table class="col-span-full">
					<div class="relative grid grid-cols-2 border-2">
						<th class="text-xl font-normal">Heading {activeTab}</th>
						<th class="text-xl font-normal">Heading {activeTab}</th>
					</div>
					<div
						class="relative grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 1 - {activeTab}
						</td>
						<td>
							Item 1 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							1
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 2 - {activeTab}
						</td>
						<td>
							Item 2 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							2
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 3 - {activeTab}
						</td>
						<td>
							Item 3 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							3
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 3 - {activeTab}
						</td>
						<td>
							Item 3 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							4
						</div>
					</div>
				</table>
			{:else if activeTab === 4}
				<header class="grid grid-cols-[1fr,auto] gap-10 items-center">
					<h2 class="text-xl font-bold text-[#757575]">
						How ESG Impact solves <span class="text-primary">{'Venture Capital'}'s</span> pain points...
					</h2>
					<div class="text-white btn btn-sm glass font-bold bg-primary hover:bg-secondary">
						Schedule a Demo
					</div>
				</header>
				<hr />
				<table class="col-span-full">
					<div class="relative grid grid-cols-2 border-2">
						<th class="text-xl font-normal">Heading {activeTab}</th>
						<th class="text-xl font-normal">Heading {activeTab}</th>
					</div>
					<div
						class="relative grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 1 - {activeTab}
						</td>
						<td>
							Item 1 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							1
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 2 - {activeTab}
						</td>
						<td>
							Item 2 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							2
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 3 - {activeTab}
						</td>
						<td>
							Item 3 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							3
						</div>
					</div>
					<div
						class="relative  grid grid-cols-2 align-center border-2 align-center my-5 min-h-[7.5rem]"
					>
						<td>
							Item 3 - {activeTab}
						</td>
						<td>
							Item 3 - {activeTab}
						</td>
						<div
							class="font-bold text-primary aspect-square w-20 h-20 opacity-75 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full grid place-items-center text-2xl p-5 border"
						>
							4
						</div>
					</div>
				</table>
			{/if}
		</main>
	</div>
</section>

<style lang="postcss">
	* {
		box-sizing: border-box;
	}
	td,
	th {
		@apply p-6;
	}
	td {
		@apply grid items-center;
	}
	td:nth-child(2n-1),
	th:nth-child(2n-1) {
		@apply bg-[#f7f7f7];
	}
	td:nth-child(2n -1) {
		@apply pr-10;
	}
	td:nth-child(2n) {
		@apply text-right pl-10;
	}
	.custom-underline {
		text-decoration-line: underline;
		text-decoration-thickness: 2px;
	}

	.custom-button {
		text-align: left;
		height: 75px;
		font-size: large;
		font-weight: 700;
	}
	.solutions-header {
		background: white;
		height: 500px;
	}
	.custom-underline {
		text-decoration-line: underline;
		text-decoration-thickness: 2px;
	}

	.custom-button {
		text-align: left;
		height: 75px;
		font-size: large;
		font-weight: 700;
	}
</style>

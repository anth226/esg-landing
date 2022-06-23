<script lang="ts">
	export let title: string;
	export let price: string;
	export let description: string;
	export let features: string[];
	export let btnText: string;
	export let btnHighlight = false;
</script>

<div
	class="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
>
	<span class="text-primary font-semibold text-lg block mb-4">{title}</span>
	<div class="font-bold text-secondary mb-5 text-2xl">{price}</div>
	<p class="text-secondary text-body-color pb-8 mb-8 border-b border-[#F2F2F2] font-sans">
		{description}
	</p>
	<ul class="mb-7 text-secondary text-body-color leading-loose flex flex-col gap-1">
		{#each features as feature}
			<li>{feature}</li>
		{/each}
	</ul>
	<button
		class="w-full btn block text-base font-semibold border rounded-md text-center hover:text-white hover:bg-primary hover:border-primary transition"
		class:text-primary={!btnHighlight}
		class:bg-transparent={!btnHighlight}
		class:border-[#D4DEFF]={!btnHighlight}
		class:text-white={btnHighlight}
		class:bg-primary={btnHighlight}
		class:border-primary={btnHighlight}
		class:hover:bg-opacity-90={btnHighlight}
	>
		{btnText}
	</button>

	<div>
		<span class="absolute right-0 top-7 z-[-1]">
			<svg
				width="77"
				height="172"
				viewBox="0 0 77 172"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="86"
						y1="0"
						x2="86"
						y2="172"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#113345" stop-opacity="0.09" />
						<stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</span>
		<span class="absolute right-4 top-4 z-[-1]">
			<svg
				width="41"
				height="89"
				viewBox="0 0 41 89"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="38.9138"
					cy="87.4849"
					r="1.42021"
					transform="rotate(180 38.9138 87.4849)"
					fill="#113345"
				/>
				<circle
					cx="38.9138"
					cy="74.9871"
					r="1.42021"
					transform="rotate(180 38.9138 74.9871)"
					fill="#113345"
				/>
				<circle
					cx="38.9138"
					cy="62.4892"
					r="1.42021"
					transform="rotate(180 38.9138 62.4892)"
					fill="#113345"
				/>
				<circle
					cx="38.9138"
					cy="38.3457"
					r="1.42021"
					transform="rotate(180 38.9138 38.3457)"
					fill="#113345"
				/>
				<circle
					cx="38.9138"
					cy="13.634"
					r="1.42021"
					transform="rotate(180 38.9138 13.634)"
					fill="#113345"
				/>
				<circle
					cx="38.9138"
					cy="50.2754"
					r="1.42021"
					transform="rotate(180 38.9138 50.2754)"
					fill="#113345"
				/>
				<circle
					cx="38.9138"
					cy="26.1319"
					r="1.42021"
					transform="rotate(180 38.9138 26.1319)"
					fill="#113345"
				/>
				<circle
					cx="38.9138"
					cy="1.42021"
					r="1.42021"
					transform="rotate(180 38.9138 1.42021)"
					fill="#113345"
				/>
				<circle
					cx="26.4157"
					cy="87.4849"
					r="1.42021"
					transform="rotate(180 26.4157 87.4849)"
					fill="#113345"
				/>
				<circle
					cx="26.4157"
					cy="74.9871"
					r="1.42021"
					transform="rotate(180 26.4157 74.9871)"
					fill="#113345"
				/>
				<circle
					cx="26.4157"
					cy="62.4892"
					r="1.42021"
					transform="rotate(180 26.4157 62.4892)"
					fill="#113345"
				/>
				<circle
					cx="26.4157"
					cy="38.3457"
					r="1.42021"
					transform="rotate(180 26.4157 38.3457)"
					fill="#113345"
				/>
				<circle
					cx="26.4157"
					cy="13.634"
					r="1.42021"
					transform="rotate(180 26.4157 13.634)"
					fill="#113345"
				/>
				<circle
					cx="26.4157"
					cy="50.2754"
					r="1.42021"
					transform="rotate(180 26.4157 50.2754)"
					fill="#113345"
				/>
				<circle
					cx="26.4157"
					cy="26.1319"
					r="1.42021"
					transform="rotate(180 26.4157 26.1319)"
					fill="#113345"
				/>
				<circle
					cx="26.4157"
					cy="1.4202"
					r="1.42021"
					transform="rotate(180 26.4157 1.4202)"
					fill="#113345"
				/>
				<circle
					cx="13.9177"
					cy="87.4849"
					r="1.42021"
					transform="rotate(180 13.9177 87.4849)"
					fill="#113345"
				/>
				<circle
					cx="13.9177"
					cy="74.9871"
					r="1.42021"
					transform="rotate(180 13.9177 74.9871)"
					fill="#113345"
				/>
				<circle
					cx="13.9177"
					cy="62.4892"
					r="1.42021"
					transform="rotate(180 13.9177 62.4892)"
					fill="#113345"
				/>
				<circle
					cx="13.9177"
					cy="38.3457"
					r="1.42021"
					transform="rotate(180 13.9177 38.3457)"
					fill="#113345"
				/>
				<circle
					cx="13.9177"
					cy="13.634"
					r="1.42021"
					transform="rotate(180 13.9177 13.634)"
					fill="#113345"
				/>
				<circle
					cx="13.9177"
					cy="50.2754"
					r="1.42021"
					transform="rotate(180 13.9177 50.2754)"
					fill="#113345"
				/>
				<circle
					cx="13.9177"
					cy="26.1319"
					r="1.42021"
					transform="rotate(180 13.9177 26.1319)"
					fill="#113345"
				/>
				<circle
					cx="13.9177"
					cy="1.42019"
					r="1.42021"
					transform="rotate(180 13.9177 1.42019)"
					fill="#113345"
				/>
				<circle
					cx="1.41963"
					cy="87.4849"
					r="1.42021"
					transform="rotate(180 1.41963 87.4849)"
					fill="#113345"
				/>
				<circle
					cx="1.41963"
					cy="74.9871"
					r="1.42021"
					transform="rotate(180 1.41963 74.9871)"
					fill="#113345"
				/>
				<circle
					cx="1.41963"
					cy="62.4892"
					r="1.42021"
					transform="rotate(180 1.41963 62.4892)"
					fill="#113345"
				/>
				<circle
					cx="1.41963"
					cy="38.3457"
					r="1.42021"
					transform="rotate(180 1.41963 38.3457)"
					fill="#113345"
				/>
				<circle
					cx="1.41963"
					cy="13.634"
					r="1.42021"
					transform="rotate(180 1.41963 13.634)"
					fill="#113345"
				/>
				<circle
					cx="1.41963"
					cy="50.2754"
					r="1.42021"
					transform="rotate(180 1.41963 50.2754)"
					fill="#113345"
				/>
				<circle
					cx="1.41963"
					cy="26.1319"
					r="1.42021"
					transform="rotate(180 1.41963 26.1319)"
					fill="#113345"
				/>
				<circle
					cx="1.41963"
					cy="1.4202"
					r="1.42021"
					transform="rotate(180 1.41963 1.4202)"
					fill="#113345"
				/>
			</svg>
		</span>
	</div>
</div>

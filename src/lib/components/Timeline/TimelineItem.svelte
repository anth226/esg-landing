<script lang="ts">
	export let border: 'primary' | 'gray' | 'base' = 'gray';
</script>

<div
	class="flex items-center gap-10 w-max bg-white py-2 px-4 border-2 rounded-full font-sans shadow-2xl"
	class:border-primary={border === 'primary'}
	class:border-gray-400={border === 'gray'}
	class:border-base-100={border === 'base'}
>
	<slot />
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5 text-gray-300"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
</div>

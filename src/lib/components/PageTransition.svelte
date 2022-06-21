<script>
	import { fade } from 'svelte/transition';
	export let key = '';
</script>

{#key key}
	<main
		in:fade={{ duration: 500, delay: 500 }}
		out:fade={{ duration: 500 }}
		class="flex flex-col flex-grow"
	>
		<slot />
	</main>
{/key}

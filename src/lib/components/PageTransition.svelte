<script lang="ts">
	import { fade } from 'svelte/transition';

	export let key: string;
</script>

{#key key}
	<main
		in:fade={{ duration: 250, delay: 250 }}
		out:fade={{ duration: 250 }}
		class="flex flex-col flex-grow pt-16"
	>
		<slot />
	</main>
{/key}

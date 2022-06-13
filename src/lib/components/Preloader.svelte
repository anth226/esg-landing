<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const TIMEOUT_MS = 2000;
	let loading = true;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, TIMEOUT_MS);
	});
</script>

{#if loading}
	<div
		class="grid place-items-center fixed w-screen h-screen bg-base-100 z-50"
		out:fade={{ duration: 1000 }}
	>
		<div
			class="w-[100px] h-[100px] absolute bg-no-repeat bg-center bg-[url(/assets/esgi-navy-loader.gif)]"
		/>
	</div>
{/if}

<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const TIMEOUT_MS = 1000;
	let loading = true;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, TIMEOUT_MS);
	});
</script>

{#if loading}
	<div
		class="grid place-items-center fixed w-screen h-screen bg-secondary z-50"
		out:fade={{ duration: 500 }}
	>
		<video
			src="/assets/esgi-navy-loader.mp4"
			autoplay
			loop
			muted
			playsinline
			class="w-[100px] h-[100px]"
		/>
	</div>
{/if}

<script>
	import { fade } from 'svelte/transition';
	import { preloader } from '$lib/stores/preloader';
</script>

{#if $preloader}
	<div
		class="grid place-items-center fixed w-screen h-screen bg-base-100 z-50"
		out:fade={{ duration: 1000 }}
	>
		<div
			class="w-[100px] h-[100px] absolute bg-no-repeat bg-center bg-[url(/assets/esgi-navy-loader.gif)]"
		/>
	</div>
{/if}

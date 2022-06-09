<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import '@fontsource/eb-garamond';
	import '@fontsource/poppins';
</script>

<div class="min-h-full flex flex-col">
	<Header />
	<main class="flex flex-col flex-grow">
		<slot />
	</main>
</div>

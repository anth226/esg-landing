<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';
	
	import '@fontsource/poppins';
	import '@fontsource/eb-garamond';
</script>


<div class="min-h-full flex flex-col">
	<Header />
	<main class="flex flex-col flex-grow">
		<slot />
	</main>
	<Footer />
</div>

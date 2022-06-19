<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Preloader from '$lib/components/Preloader.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';

	import '@fontsource/poppins';
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<Preloader />

<div class="min-h-full flex flex-col">
	<Header />
	<PageTransition key={$page.url.pathname}>
		<main class="flex flex-col flex-grow" transition:fade>
			<slot />
		</main>
	</PageTransition>
	<Footer />
</div>

<script context="module" lang="ts">
	import type { Load } from './__types';
	export const load: Load = async ({ url: { pathname } }) => ({
		props: { pathname },
	});
</script>

<script lang="ts">
	import Preloader from '$lib/components/Preloader.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';

	import '@fontsource/poppins';
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let pathname: string;
</script>

<Preloader />

<div class="min-h-full flex flex-col">
	<Header />
	<PageTransition key={pathname}>
		<slot />
	</PageTransition>
	<Footer />
</div>

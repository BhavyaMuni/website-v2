<script>
	import '../app.css';
	import '@fontsource/inter';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import Footer from '$lib/Footer.svelte';
	import Social from '$lib/Social.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
	<div
		class="flex flex-col lg:w-1/3 sm:w-2/3 xs:w-2/3 justify-center mt-60 mx-auto leading-relaxed space-y-3"
	>
		<slot />
		<Social />
	</div>
	<Footer />
</div>

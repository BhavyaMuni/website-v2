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
	import { spring } from 'svelte/motion';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
	let innerWidth;
	let innerHeight;
	let mx = spring(0, { stiffness: 0.1, damping: 0.95 });
	let my = spring(0, { stiffness: 0.1, damping: 0.95 });
	function handleMousemove(event) {
		mx.set(innerWidth - event.clientX, { duration: 1000 });
		my.set(innerHeight - event.clientY, { duration: 1000 });
	}
</script>

<svelte:window on:mousemove={handleMousemove} bind:innerWidth bind:innerHeight />
<div
	class="flex flex-col h-screen justify-between bg-grad items-center"
	style="--mx: {$mx}px; --my: {$my}px"
>
	<div
		class="flex flex-col lg:w-1/3 sm:w-2/3 xs:w-4/5 justify-center m-auto py-12 leading-relaxed space-y-3"
	>
		<slot />
	</div>
	<Social />

	<p class="opacity-40 text-xs py-4">made with lots of ☕️</p>
</div>

<style>
	.bg-grad {
		background: radial-gradient(circle at var(--mx) var(--my), white 70%, transparent 125%),
			linear-gradient(to right, rgb(253, 186, 116), rgb(253, 164, 175));
	}
</style>

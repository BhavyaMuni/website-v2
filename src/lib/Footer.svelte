<script>
	import { spring } from 'svelte/motion';
	let innerWidth;
	let mx = spring(0, { stiffness: 0.03, damping: 0.9 });
	function handleMousemove(event) {
		mx.set((event.clientX / innerWidth) * 100, { duration: 50 });
	}
</script>

<svelte:window on:mousemove={handleMousemove} bind:innerWidth />
<div class="flex flex-col items-center">
	<p class="opacity-40 text-xs py-2">made with lots of ☕️</p>
	<div
		class="h-2 w-full move-gradient bg-gradient-to-r from-red-400 via-gray-300 to-blue-500"
		style="--mx: {$mx}%"
	/>
</div>

<style>
	.move-gradient {
		background-size: 400%;
		background-position: var(--mx) 0%;
	}
</style>

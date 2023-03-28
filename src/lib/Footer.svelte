<script>
	import { spring } from 'svelte/motion';
	let innerWidth = 10;
	let mx = spring(0, { stiffness: 0.03, damping: 0.9 });
	function handleMousemove(event) {
		mx.set((event.clientX / innerWidth) * 100, { duration: 50 });
	}
</script>

<svelte:window on:mousemove={handleMousemove} bind:innerWidth />
<div class="flex flex-col items-center">
	<p class="opacity-40 text-xs py-2">made with lots of ☕️</p>
	<div
		class="h-2 move-gradient bg-gradient-to-r from-orange-400 via-blue-500 to-orange-400 w-full"
		style="--mx: {$mx}%"
	/>
</div>

<style>
	.move-gradient {
		background-size: 400%;
		background-position: var(--mx) 0%;
	}
</style>

<script>
	import Footer from '$lib/Footer.svelte';
	import Social from '$lib/Social.svelte';
</script>

<svelte:head>
	<title>Check out my projects!</title>
	<meta name="title" content="Check out my projects projects - Bhavya Muni" />
	<meta name="description" content="Check out all the projects that Bhavya Muni has created!" />
</svelte:head>

<div class="flex flex-row justify-start items-center">
	<a href="/" aria-label="Home"><i class="fas fa-chevron-left" /></a>
	<div class="w-2" />
	<h1 class="font-semibold text-3xl">Projects 👾</h1>
	<!-- <img src="bitmoji.png" class="w-1/5 h-auto" alt="bitmoji" /> -->
</div>
<p />
<h1 class="font-semibold">Game Dev</h1>
<ul class="list-disc list-inside">
	<li>
		<a href="https://sketchu.itch.io/lit">Lit</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">(won first place 🏆)</p>
	</li>
	<li>
		<a href="https://bhavyamuni.itch.io/bass-racer">Bass Racer</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">
			(guitar hero + racing car)
		</p>
	</li>
	<li>
		<a href="https://bhavyamuni.itch.io/reinos">Reinos</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">
			(made this one completely by myself)
		</p>
	</li>
	<li>
		<a href="https://xerahim.itch.io/welcome-to-the-shitshow">Welcome to the Sh*tshow</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">(made it in 10 hours)</p>
	</li>
</ul>
<h1 class="font-semibold">ML stuff</h1>
<ul class="list-disc list-inside">
	<li>
		<a href="https://github.com/BhavyaMuni/ChromeDinoNeuroevolution">
			Chrome Dino (Neuro-evolution)</a
		>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">
			(a bunch of dinos trying to play by themselves)
		</p>
	</li>
	<li>
		<a href="https://huggingface.co/BhavyaMuni">Song Lyrics Generator</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">
			(generates Taylor Swift lyrics)
		</p>
	</li>
	<li>
		<a href="https://github.com/BhavyaMuni/coffee-price-app">Coffee Price Predictor</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">
			(learned how to deploy full-stack ML apps)
		</p>
	</li>
</ul>
<h1 class="font-semibold">Misc.</h1>
<ul class="list-disc list-inside">
	<li>
		<a href="https://github.com/BhavyaMuni/schedule-to-cal">Schedule To Calendar</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">
			(a little automation to get my schedules in gcal)
		</p>
	</li>
	<li>
		<a href="https://play.google.com/store/apps/details?id=com.amethyst.amethyst_app">Amethyst</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">
			(mobile app to connect musicians)
		</p>
	</li>
	<li>
		<a href="https://www.youtube.com/watch?v=9M5DYjUQpVw">TED Talk</a>
		<p class="font-light italic text-gray-600 text-sm whitespace-nowrap">
			(a little cringe but i'm proud)
		</p>
	</li>
</ul>
<p />
<p />

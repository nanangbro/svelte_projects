<script>
	export let name;
	let count = 0;

	function handleClick() {
		count += 1;
	}

	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from './components/custom-transitions.js';
	import { inner, outer } from './components/shape.js';

	let visible = true;

	let src = '/cat.gif';
	let name_images = 'Cute Cat';

	let string = `here's some <strong>HTML!!!</strong>`;

	//----------Start Reactive declarations

	let count_declarations = 1;

	// the `$:` means 're-run whenever these values change'
	$: doubled = count * 2;
	$: quadrupled = doubled * 2;

	//----------End Reactive declarations

	function handleClickDeclarations() {
		count += 1;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

{#if visible}
<div class="maxSVG">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
		<g out:fade="{{duration: 200}}" opacity=0.2>
			<path
				in:expand="{{duration: 400, delay: 1000, easing: quintOut}}"
				style="stroke: #ff3e00; fill: #ff3e00; stroke-width: 50;"
				d={outer}
			/>
			<path
				in:draw="{{duration: 1000}}"
				style="stroke:#ff3e00; stroke-width: 1.5"
				d={inner}
			/>
		</g>
	</svg>
</div>

	<div class="centered" out:fly="{{y: -20, duration: 800}}">
		{#each 'SVELTE' as char, i}
			<span
				in:fade="{{delay: 1000 + i * 150, duration: 800}}"
			>{char}</span>
		{/each}
	</div>
{/if}

<label>
	<input type="checkbox" bind:checked={visible}>
	toggle me
</label>

<img {src} alt="{name_images} dancing">

<p>{@html string}</p>

<button on:click={handleClickDeclarations}>
	Count: {count_declarations}
</button>

<p>{count_declarations} * 2 = {doubled}</p>
<p>{doubled} * 2 = {quadrupled}</p>

<link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet">

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
	svg {
		width: 100%;
		height: 100%;
	}

	path {
		fill: white;
		opacity: 1;
	}

	label {
		position: absolute;
		top: 1em;
		left: 1em;
	}

	.centered {
		font-size: 20vw;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-family: 'Overpass';
		letter-spacing: 0.12em;
		color: #676778;
		font-weight: 400;
	}

	.maxSVG{
		max-width: 200px;
	}

	.centered span {
		will-change: filter;
	}
</style>
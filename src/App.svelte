<script>
	
	import Counter from './components/Counter.svelte'
	import Toggle from './components/Toggle.svelte'
	import Img from './components/Img.svelte'
	import String from './components/String.svelte'
	import Statement from './components/Statement.svelte'
	import Condition from './components/Condition.svelte';
	import Nested from './components/Nested.svelte';
	import Info from './components/Info.svelte';
	import IfLogin from './components/IfLogin.svelte'
	import Comparison from './components/Comparison.svelte'
	import EachYoutube from './components/EachYoutube.svelte'
	import KeyEachThing from './components/KeyEachThing.svelte'
	import GenerateNumber from './components/GenerateNumber.svelte';

	export let name;

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Counter />
	<Toggle />
	<Img />
	<String />
	<Statement />
	<Condition />
	<Nested answer={42}/>
	<Nested/>
	<Info {...pkg}/>
	<IfLogin />
	<Comparison />
	<EachYoutube />
	<KeyEachThing />
	<GenerateNumber />

</main>

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
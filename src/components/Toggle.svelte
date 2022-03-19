<script>
    import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from './animations/custom-transitions.js';
	import { inner, outer } from './shapes/shape.js';

    let visible = true;
</script>

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
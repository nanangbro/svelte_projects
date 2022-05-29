<script>
	const options = ['h1', 'h3', 'p'];
	let selected = options[0];
</script>

<div style="display: position: relative;">
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<svelte this={selected}>I'm a {selected} tag</svelte>
</div>
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('pesan', {
			isi: 'Hello Guysss!'
		});
	}
</script>

<button on:click={sayHello}>
	Click to say hello
</button>
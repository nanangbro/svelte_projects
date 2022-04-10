<script>
	import { countWritable } from './stores/stores.js';

	function decrement() {
		countWritable.update(n => n - 1);
	}
</script>

<button on:click={decrement}>
	-
</button>
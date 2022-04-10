<script>
	import { countWritable } from './stores/stores.js';

	function reset() {
		countWritable.set(0);
	}
</script>

<button on:click={reset}>
	reset
</button>
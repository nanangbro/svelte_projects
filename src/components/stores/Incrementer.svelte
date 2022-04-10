<script>
	import { countWritable } from './stores/stores.js';

	function increment() {
		countWritable.update(n => n + 1);
	}
</script>

<button on:click={increment}>
	+
</button>
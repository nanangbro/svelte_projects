<script>
	import { countAutoSubscriptions } from '../stores.js';

	function reset() {
		countAutoSubscriptions.set(0);
	}
</script>

<button on:click={reset}>
	reset
</button>
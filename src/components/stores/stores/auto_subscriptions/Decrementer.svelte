<script>
	import { countAutoSubscriptions } from '../stores.js';

	function decrement() {
		countAutoSubscriptions.update(n => n - 1);
	}
</script>

<button on:click={decrement}>
	-
</button>
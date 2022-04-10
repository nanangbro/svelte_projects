<script>
	import { countAutoSubscriptions } from '../stores.js';

	function increment() {
		countAutoSubscriptions.update(n => n + 1);
	}
</script>

<button on:click={increment}>
	+
</button>
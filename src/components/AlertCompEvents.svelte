<script>
	import AlertCompEventsComp from './alert/AlertCompEventsComp.svelte';

	function handleMessage(event) {
		alert(event.detail.isi);
	}
</script>

<AlertCompEventsComp on:pesan={handleMessage}/>
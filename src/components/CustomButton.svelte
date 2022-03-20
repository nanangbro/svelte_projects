<script>
	import CustomButtonComp from './button/CustomButtonComp.svelte';

	function handleClick() {
		alert('clicked');
	}
</script>

<CustomButtonComp on:click={handleClick}/>
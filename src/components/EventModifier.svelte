<script>
	function handleClick() {
		alert('no more alerts')
	}
    //Valid event modifiers are preventDefault, stopPropagation, capture, once, passive, nonpassive, self or trusted
</script>

<button on:click|once={handleClick}>
	Click me
</button>
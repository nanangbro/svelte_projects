<script>
    let countStatement = 0;

    $: if (countStatement >= 10) {
        alert(`count is dangerously high!`);
        countStatement = 9;
    }

    function handleClickStatement() {
        countStatement += 1;
    }
</script>

<button on:click={handleClickStatement}>
	Clicked {countStatement} {countStatement === 1 ? 'time' : 'times'}
</button>
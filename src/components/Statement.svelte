<script>
    //----------Start Reactive declarations

    let count = 0;

    let count_declarations = 1;

    // the `$:` means 're-run whenever these values change'
    $: doubled = count * 2;
    $: quadrupled = doubled * 2;

    //----------End Reactive declarations

    function handleClickDeclarations() {
        count += 1;
    }
</script>

<div>
    <button on:click={handleClickDeclarations}>
        Count: {count_declarations}
    </button>
    
    <p>{count_declarations} * 2 = {doubled}</p>
    <p>{doubled} * 2 = {quadrupled}</p>
</div>
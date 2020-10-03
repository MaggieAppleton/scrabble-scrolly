<script>
    import ScrabbleTile from './ScrabbleTile.svelte'
    import data from './data.js'

    console.log(data);
</script>

<style>
    header {
        height: 100vh;
    }
</style>

<main>
    <header>
        <ul>
        {#each data as { heading }}
            <li>
                <a href={`#${heading}`}>{heading}</a>
            </li>
        {/each}
        </ul>
    </header>
    {#each data as { heading, definition, score, dictionary }}
        <ScrabbleTile 
            heading={heading}
            definition={definition}
            score={score}
            dictionary={dictionary}
        />
    {/each}
</main>

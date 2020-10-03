<script>
    import ScrabbleTile from './ScrabbleTile.svelte'
    import data from './data.js'

    console.log(data);
</script>

<style>
    main {
        text-align: center;
        max-width: 240px;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
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

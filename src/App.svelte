<script>
    import ScrabbleTile from './ScrabbleTile.svelte'
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
    <ScrabbleTile 
        heading="Aa"
        definition={`it is a variety of flow lava which has a rough surface of broken blocks. Not surprisingly, the word is Hawaiian, Hawaii having an abundance of both lava and vowels. It is pronounced "ah-ah."`}
        score="2"
        dictionary="Collins"
    />
    <ScrabbleTile 
        heading="Ab"
        definition={`short for "abdominal", innit?`}
        score="2"
        dictionary="Collins"
    />
    <ScrabbleTile 
        heading="Ad"
        definition={`abbreviation of "advertisement"`}
        score="2"
        dictionary="Collins"
    />
    <ScrabbleTile 
        heading="Ae"
        definition={`Scottish for "one", apparently?`}
        score="2"
        dictionary="Collins"
    />
    <ScrabbleTile 
        heading="Ag"
        definition={`bastardized version of "agriculture"`}
        score="2"
        dictionary="Collins"
    />
</main>

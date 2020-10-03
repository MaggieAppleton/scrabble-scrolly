<script>
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

    import { onMount } from 'svelte'

    gsap.registerPlugin(ScrollTrigger)

    let section
    let bigLetter

    export let heading
    export let definition
    export let score
    export let dictionary

    onMount(() => {
        gsap.to(bigLetter, {
            scrollTrigger: {
                trigger: section,
                markers: true,
                scrub: 1,
            },
            scale: 2,
            duration: 2
        })
    })
</script>

<style>
    .section {
        height: 100vh;
        display: flex;
        border: 1px solid rgb(168, 168, 168);
    }

    .column {
        width: 50%;
        padding: 5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .two-letter {
        font-size: 18em;
    }
</style>

<section
    class="section"
    id="section-1"
    bind:this={section}
>
    <div class="column">
        <h2 class="two-letter" bind:this={bigLetter}>{heading}</h2>
    </div>
    <div class="column">
        <p class="definition">{definition}</p>
        <p class="score">{score}</p>
        <p class="dictionary">{dictionary}</p>
    </div>
</section>
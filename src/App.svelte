<script>
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

    import { onMount } from 'svelte'

    gsap.registerPlugin(ScrollTrigger)

    export let name

    let paragraph

    onMount(() => {
        gsap.to(paragraph, {
            scrollTrigger: {
                trigger: paragraph,
                scrub: true
            },
            x: 500,
            duration: 3
        })
    })
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 120vh auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>

<main>
    <section />
    <h1 id="heading">Hello {name}!</h1>
    <p bind:this={paragraph}>
        Visit the
        <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
        to learn how to build Svelte apps.
    </p>
</main>

<script>
    import { SOCIAL_ICON_SVGS } from '$lib/config.js';
    export let data;
    const year = new Date().getFullYear();
</script>

<header>
    <a class="header-label" href="/">George Iliadis</a>
    <nav>
	    <a href="/">Home</a>
	    <a href="/blog">Blog</a>
    </nav>
</header>

<main>

<slot></slot>

</main>

<footer>
    <p> Copyright © {year} | George Iliadis </p>
    <div class="social-container">
        {#each Object.entries(SOCIAL_ICON_SVGS) as [key,val]}
                <a href={data[key]}>
                    {@html val}
                </a>
        {/each}
    </div>
</footer>

<style>
    header,
    main,
    footer {
        margin: 0 auto;
        max-width: 768px;
    }
    main {
        margin-bottom: 96px;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 32px 0;
        border-bottom: 1px solid #F96743;
        margin-bottom: 42px;
    }

    header nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
    }

    header a {
        text-decoration: none;
        color:#D5D7D8;
    }

    header a:hover {
        color: #F96743;
    }

    header nav a:hover {
        text-underline-offset: 4px;
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-thickness: 2px;
    }

    header .header-label{
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 0;
        border-top: 1px solid #F96743;
    }

    footer div.social-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
    }

    :global(footer div.social-container svg) {
        width:24px;
        height:24px;
        fill: #F96743;
    }


    :global(footer div.social-container svg path) {
        fill: #F96743;
    }

    :global(h1) {
        color: #F96743;
    }

    :global(article p) {
        line-height: 24px;
    }

    :global(main a) {
        text-decoration: none;
        color:#F96743;
    }

</style>

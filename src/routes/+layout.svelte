<script>
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
    <div>
        links
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

    :global(h1) {
        color: #F96743;
    }

    :global(article p) {
        line-height: 24px;
    }

</style>

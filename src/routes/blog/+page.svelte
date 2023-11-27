<script>
    import { formatDate } from '$lib/utils.js';
	export let data;
</script>


<article> 
    <h1>Articles</h1>
    <ul>
        {#each data.blogs as post}
            <li>
                <a href="/blog/{post.slug}">
                    {post.title}
                </a>
                <p>Date: <span class="date-str">{formatDate(post.created_at)}</span></p>
            </li>
        {/each}
    </ul>
</article>


<style>
    article h1 {
        margin-bottom: 32px;
    }

    article li {
        margin-bottom: 16px;
    }

    article li a {
        text-decoration: underline;
        color: #D5D7D8;
        font-size:18px;
    }

    article li a:hover {
        color: #F96743;
    }

    article li p {
        margin: 0;
        color: #D5D7D8;
        font-size: 14px;
    }

    p span.date-str {
        color: #F96743;
    }

</style>

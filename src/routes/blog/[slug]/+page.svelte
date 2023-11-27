<script>
    import {formatDate} from '$lib/utils.js';
	export let data;
</script>

<article> 
<h1>{data.title}</h1>
{@html data.body.code}
</article>

<p>Date: <span class="date">{formatDate(data.created_at)}</span></p>

<style>
    article h1 {
        margin-bottom: 32px;
    }

    p {
        text-align: right;
    }

    p span.date {
        color: #F96743;
    }

    :global(article img) {
        width: 100%;
    }

</style>

<script>
    import { CMS_BASE_URL } from "$lib/config";
	export let data;
</script>

<article> 
    {@html data.content.code} 
</article>

<section class="cv-section">
    <a class="cv-link" href={`${CMS_BASE_URL}${data.cvUrl}`}>Link to my CV</a>
</section>

<style>
    section.cv-section {
        text-align: center;
    }

    section.cv-section a.cv-link {
        color: #F96743;
        font-size: 18px;
        text-decoration: underline;
    }
</style>

import {CMS_API_ROUTES, CMS_BASE_URL} from '$lib/config';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const response = await fetch(`${CMS_BASE_URL}${CMS_API_ROUTES.blogs}?_sort=created_at:DESC`);
    const data = await response.json();
    /*
     * Make sure we get the data by filtering on the api instead of here
    **/ 
    const formattedData = data.map((blog) => {
        return {
            title: blog.title,
            slug: blog.slug,
            created_at: blog.created_at,
        }
    });

    return { blogs: formattedData }
}

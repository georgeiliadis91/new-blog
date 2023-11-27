
import {CMS_API_ROUTES, CMS_BASE_URL} from '$lib/config';
import {compile} from 'mdsvex';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
	const response = await fetch(`${CMS_BASE_URL}${CMS_API_ROUTES.blogs}?slug=${params.slug}`);
    const data  = await response.json();
    const body= await compile(data[0].body);
    return {
        title: data[0].title,
        body: body,
        created_at: data[0].created_at,
    }
}

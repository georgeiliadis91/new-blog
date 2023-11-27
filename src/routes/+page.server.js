import {CMS_API_ROUTES, CMS_BASE_URL} from '$lib/config';
import {compile} from 'mdsvex';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const response = await fetch(`${CMS_BASE_URL}${CMS_API_ROUTES.home}`);
    const data  = await response.json();
    console.log(data);
    const content = await compile(data.portofolio);
    console.log(content);
    return content
    ;
}

import {CMS_API_ROUTES, CMS_BASE_URL} from '$lib/config';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const response = await fetch(`${CMS_BASE_URL}/${CMS_API_ROUTES.socials}`);
    const data  = await response.json();
    return data;
}

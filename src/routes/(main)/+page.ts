import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	let posts = import.meta.glob('../../posts/**/*.md') as any;

	let { metadata } = await posts[Object.keys(posts)[0]]();

	return { metadata };
};

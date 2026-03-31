import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const mdMod = import.meta.glob('../../../posts/**/*.md');

	let posts = {};
	Object.keys(mdMod).forEach(async (path) => {
		const year = path.split('/').at(-2);
		// @ts-ignore - shut up
		const { metadata } = await mdMod[path]();

		const { date, title, description, author } = metadata;

		// @ts-ignore - shut up
		if (!posts[year]) posts[year] = [];

		// @ts-ignore - shut up
		posts[year].push({
			date,
			title,
			description,
			author,
			// @ts-ignore - shut up
			link: '/news/' + year + '/' + path.split('/').at(-1).split('.')[0]
		});
	});

	return { posts };
};

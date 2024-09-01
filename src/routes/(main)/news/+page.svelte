<script>
	export let data;
	const entries = Object.entries(data.posts).sort(
		(yearEntryA, yearEntryB) => parseInt(yearEntryB[0]) - parseInt(yearEntryA[0])
	);
</script>

<section class="my-8">
	<h1 class="font-extrabold text-4xl text-center">OpenWars News Archive</h1>
	<p class="text-center">
		OpenWars has a lot of story and even more to tell. You can find all posts here. Click on title
		to open.
	</p>
</section>
{#each entries as year}
	<section class="mt-4 mx-6 border-x-4 border-b-1 border-brand bg-brand">
		<h2 class="text-center text-zinc-300">{year[0]}</h2>
		{#each year[1] as post}
			<article class="p-4 bg-zinc-900">
				<h2 class="text-3xl font-bold">
					<a class="hover:text-brand transition" href={post.link} target="__blank">{post.title}</a>
				</h2>
				<p class="text-brand text-sm font-semibold mb-1">Posted by {post.author} on {post.date}</p>
				<p>{post.description}</p>
			</article>
			<hr class="border-brand" />
		{/each}
	</section>
{/each}

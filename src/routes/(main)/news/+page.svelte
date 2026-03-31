<script>
	let { data } = $props();
	const entries = Object.entries(data.posts).sort(
		(yearEntryA, yearEntryB) => parseInt(yearEntryB[0]) - parseInt(yearEntryA[0])
	);
</script>

<section class="py-12 md:py-16 px-4">
	<div class="mb-12 max-w-2xl mx-auto">
		<h1 class="font-extrabold text-3xl md:text-4xl text-center mb-3">OpenWars News Archive</h1>
		<p class="text-center text-sm md:text-base">
			OpenWars has a lot of story and even more to tell. You can find all posts here. Click on title
			to open.
		</p>
	</div>
	<div class="max-w-4xl mx-auto">
		{#each entries as year}
			<div class="mb-6 border-l-4 rounded-r-md border-brand bg-zinc-800">
				<h2
					class="text-center text-zinc-100 tracking-tight text-sm font-bold px-4 py-3 bg-brand rounded-r-t-md"
				>
					{year[0]}
				</h2>
				{#each year[1] as post}
					<article class="px-6 py-5 bg-zinc-900 border-b border-zinc-800 last:border-b-0">
						<h2 class="text-2xl md:text-3xl font-bold mb-2">
							<a
								class="hover:text-brand transition underline-offset-2 hover:underline"
								href={post.link}
								target="_blank"
								rel="noopener noreferrer">{post.title}</a
							>
						</h2>
						<p class="text-brand text-xs font-semibold mb-2">
							Posted by {post.author} on {post.date}
						</p>
						<p class="text-sm">{post.description}</p>
					</article>
				{/each}
			</div>
		{/each}
	</div>
</section>

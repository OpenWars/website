<script>
	let { data } = $props();
</script>

<article
	class="prose md:prose-lg prose-zinc prose-invert prose-code:before:content-[''] prose-code:after:content-[''] prose-a:decoration-offset-4 prose-a:decoration-brand prose-a:decoration-2 prose-a:hover:transition prose-a:hover:text-brand px-4 py-8 md:py-12 bg-zinc-900 max-w-none!"
>
	<div class="not-prose mx-auto max-w-2xl mb-8">
		<h1 class="text-3xl md:text-5xl font-black text-center mb-3">{data.metadata.title}</h1>
		<p class="text-zinc-400 text-base md:text-lg text-center font-medium mb-6">
			{data.metadata.description}
		</p>
		<div class="px-4 py-4 border-l-4 border-brand bg-zinc-800 rounded-r">
			<p class="font-semibold text-brand text-sm text-center mb-1">
				Written by {data.metadata.author}
			</p>
			<p class="text-center text-zinc-400 text-xs">
				{data.metadata.readingTime} minute read - {data.metadata.date}
			</p>
		</div>
	</div>
	<div class="max-w-2xl mx-auto">
		<data.post />
	</div>
</article>

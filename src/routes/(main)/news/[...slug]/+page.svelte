<script>
	export let data;
</script>

<article
	class="prose md:prose-lg prose-zinc prose-invert before:prose-code:content-[''] after:prose-code:content-[''] prose-a:decoration-offset-4 prose-a:decoration-brand prose-a:decoration-2 hover:prose-a:transition hover:prose-a:text-brand m-4 p-4 bg-zinc-900 !max-w-none"
>
	<div class="not-prose mx-6">
		<h1 class="text-4xl md:text-6xl font-black text-center mb-2">{data.metadata.title}</h1>
		<p class="text-zinc-500 text-xl text-center font-bold">{data.metadata.description}</p>
		<div class="mt-4 max-w-1/2">
			<hr class="border-brand mb-1" />
			<p class="font-semibold text-brand text-center">
				Written by {data.metadata.author}
			</p>
			<p class="text-center text-brand mt-0">{data.metadata.readingTime} minute read - {data.metadata.date}</p>
			<hr class="border-brand mt-1" />
		</div>
	</div>
	<svelte:component this={data.post} />
</article>

<script>
	export let data;
</script>

<article
	class="prose md:prose-lg prose-zinc prose-invert prose-a:decoration-offset-4 prose-a:decoration-brand prose-a:decoration-2 hover:prose-a:transition hover:prose-a:text-brand m-4 p-4 bg-zinc-900 !max-w-none"
>
	<div class="not-prose">
		<h1 class="text-4xl md:text-6xl font-black text-center mb-1">{data.metadata.title}</h1>
		<p class="font-semibold text-brand text-center">
			Written by {data.metadata.author} on {data.metadata.date}
		</p>
	</div>
	<svelte:component this={data.post} />
</article>

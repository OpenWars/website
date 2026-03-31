<script>
	let { data } = $props();
</script>

<section class="py-12 md:py-16 px-4">
	<div class="flex flex-col justify-center items-center">
		<img
			src="https://raw.githubusercontent.com/OpenWars/branding/main/owlogo.png"
			alt="OpenWars logo"
			width={512}
			height={420}
			class="max-w-xs md:max-w-md"
		/>
		<h1 class="text-3xl md:text-4xl font-black text-center mt-6">Welcome back, Advisor.</h1>
		<div class="mt-8 flex flex-col sm:flex-row gap-4 w-full px-4 sm:w-auto">
			<a
				class="px-6 py-3 bg-brand rounded-md transition hover:bg-brandDark hover:-translate-y-1 text-center font-medium"
				href="/download">Download Now</a
			>
			<a
				class="px-6 py-3 bg-zinc-800 rounded-md transition hover:bg-zinc-700 hover:-translate-y-1 text-center font-medium"
				href="/news">News</a
			>
		</div>
	</div>
</section>
<section class="relative flex flex-col justify-center items-center py-12 md:py-16 px-4">
	<div
		class="relative w-full md:w-2/3 px-6 py-4 bg-zinc-900 border-zinc-800 border-x-2 border-t-2 flex justify-center items-center -mb-px z-10"
	>
		<h2 class="font-bold text-xl md:text-2xl text-center">Rebuilt for the modern era.</h2>
	</div>
	<div class="relative w-full md:w-fit px-6 py-8 bg-zinc-900 border-zinc-800 border-2 shadow-2xl">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
			<div>
				<h3 class="text-lg font-medium text-center mb-6">Designed around modern expectations.</h3>
				<ul class="list-disc marker:text-brand space-y-3 text-sm md:text-base">
					<li>
						<strong>Online multiplayer</strong> with strong support for mods and custom maps.
					</li>
					<li>Elo <strong>rankings</strong> and leaderboards.</li>
					<li>Updated <strong>campaings</strong>.</li>
					<li><strong>Native support</strong> on Windows and Linux.</li>
				</ul>
			</div>
			<div>
				<h3 class="text-lg font-medium text-center mb-6">Built with community support.</h3>
				<ul class="list-disc marker:text-brand space-y-3 text-sm md:text-base">
					<li>Fully <strong>free/libre and open source</strong> software.</li>
					<li><strong>Community feedback</strong> into updates and balance.</li>
					<li>Player created and curated <strong>custom maps</strong>.</li>
					<li>Engine crafted for making <strong>new strategy games</strong>.</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="py-12 md:py-16 px-4">
	<div class="max-w-4xl mx-auto">
		<div class="bg-linear-to-r from-brand to-brandDark w-full px-6 py-4 rounded-t-md">
			<h2 class="text-lg font-medium">
				Latest news from developers <a
					class="underline underline-offset-2 font-semibold"
					href="/news">[See more]</a
				>
			</h2>
		</div>
		<div class="bg-zinc-800 px-6 py-6 rounded-b-md">
			<p class="font-semibold text-zinc-400 text-sm">
				Latest post from {data.metadata.author} on {data.metadata.date}
			</p>
			<h3 class="font-extrabold text-xl md:text-2xl mt-3 mb-2">{data.metadata.title}</h3>
			<p class="text-sm md:text-base">{data.metadata.description}</p>
		</div>
	</div>
</section>

<script>
	const links = [
		['News', '/news'],
		['Download', '/download'],
		['Community', '/community'],
		['Resources', '/resources']
	];
</script>

<header class="bg-zinc-900 px-4 py-3">
	<div class="flex items-center justify-around">
		<div class="flex items-center space-x-2">
			<img
				src="https://raw.githubusercontent.com/OpenWars/branding/main/owlogo-only.png"
				alt="OpenWars logo"
				width={34}
				height={34}
			/>
			<a href="/" class="font-bold text-xl md:text-2xl">OpenWars</a>
		</div>
		<nav>
			<ul class="space-x-4 md:space-x-6 flex">
				{#each links as link, index}
					<li>
						<a
							href={link[1]}
							class={`hover:text-brand hover:underline underline-offset-4 transition ${
								index != 1 ? 'hidden md:block' : ''
							}`}>{link[0]}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

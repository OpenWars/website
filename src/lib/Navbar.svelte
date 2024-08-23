<script>
	const links = [
		['News', '/news'],
		['Download', '/download'],
		['Community', '/community'],
		['Resources', '/resources']
	];
</script>

<header class="bg-zinc-900 p-4">
	<div class="flex items-center justify-around">
		<div class="flex items-center space-x-1">
			<img
				src="https://raw.githubusercontent.com/OpenWars/branding/main/owlogo-only.png"
				alt="OpenWars logo"
				width={34}
				height={34}
			/>
			<h1 class="font-bold text-2xl">OpenWars</h1>
		</div>
		<nav>
			<ul class="space-x-6 flex">
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

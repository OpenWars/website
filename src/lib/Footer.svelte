<script>
	import IconGithub from '@tabler/icons-svelte/icons/brand-github';
	import IconDiscord from '@tabler/icons-svelte/icons/brand-discord';
	import IconTwitter from '@tabler/icons-svelte/icons/brand-twitter';
	import IconYoutube from '@tabler/icons-svelte/icons/brand-youtube';

	const links = [
		['News', '/news'],
		['Download', '/download'],
		['Community', '/community'],
		['Resources', '/resources']
	];

	const socials = [
		['GitHub', 'https://github.com/OpenWars', IconGithub, 'text-white'],
		['Discord', 'https://discord.gg/g5twuMG44e', IconDiscord, 'text-[#5865F2]'],
		['Twitter', '#', IconTwitter, 'text-[#1DA1F2]'],
		['YouTube', '#', IconYoutube, 'text-[#FF0000]']
	];
</script>

<div>
	<section
		class="mt-8 px-6 py-8 md:px-8 bg-gradient-to-br from-brand to-brandDark flex flex-col md:flex-row justify-between gap-4 items-center md:items-start"
	>
		<p class="text-xl md:text-2xl font-bold text-center md:text-left">Your mission starts now.</p>
		<a
			class="px-4 py-2 bg-white rounded-md text-brand text-sm font-medium transition hover:bg-brandDark hover:text-white hover:-translate-y-1 whitespace-nowrap"
			href="/download">Download now</a
		>
	</section>
	<footer class="px-4 py-6 md:py-8 bg-zinc-900">
		<div class="flex flex-col md:flex-row justify-around items-center px-6 md:px-16 gap-8">
			<div class="flex flex-col items-center">
				<img
					src="https://raw.githubusercontent.com/OpenWars/branding/main/owlogo-only.png"
					alt="OpenWars logo"
					width={120}
					height={120}
					class="mb-3"
				/>
				<p class="text-lg font-bold">OpenWars</p>
				<p class="text-xs font-light text-center mt-2">
					&copy; 2024 OpenWars Developers. <a class="font-bold underline" href="/legal"
						>Legal notices.</a
					>
				</p>
			</div>
			<div>
				<ul class="flex flex-col space-y-3 text-center md:text-left">
					{#each links as link}
						<li>
							<a
								class="underline underline-offset-2 hover:text-brand transition text-sm"
								href={link[1]}>{link[0]}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<ul class="flex flex-col space-y-3 text-center md:text-left">
					{#each socials as social}
						{@const SvelteComponent = social[2]}
						<li>
							<a
								class={'underline-offset-2 hover:text-brand transition flex items-center text-sm ' +
									social[3]}
								href={social[1]}
								rel="noopener noreferrer"
								><span><SvelteComponent class="mr-2 w-5 h-5" /></span>{social[0]}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</footer>
</div>

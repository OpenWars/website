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

<section class="mt-4 p-8 bg-gradient-to-br from-brand to-brandDark flex justify-between">
	<p class="text-2xl font-bold">Your mission starts now.</p>
	<a
		class="p-2 bg-white rounded-md text-brand text-sm transition hover:bg-brandDark hover:text-white hover:-translate-y-1"
		href="/download">Download now</a
	>
</section>
<footer class="p-4 bg-zinc-900">
	<div class="flex flex-col md:flex-row justify-around items-center px-16">
		<div class="flex flex-col items-center w-fit">
			<img
				src="https://raw.githubusercontent.com/OpenWars/branding/main/owlogo-only.png"
				alt="OpenWars logo"
				width={124}
				height={124}
			/>
			<p class="text-xl font-bold">OpenWars</p>
			<p class="text-sm font-light break-normal text-center">
				(C) 2024 OpenWars Developers. <a class="font-bold underline" href="/legal">Legal notices.</a
				>
			</p>
		</div>
		<div class="pt-4">
			<ul class="flex flex-col space-y-2 text-center md:text-left">
				{#each links as link}
					<a class="underline underline-offset-2 hover:text-brand transition" href={link[1]}
						>{link[0]}</a
					>
				{/each}
			</ul>
		</div>
		<div class="pt-4">
			<ul class="flex flex-col space-y-2 text-center md:text-left">
				{#each socials as social}
					<a
						class={'underline-offset-2 hover:text-brand transition flex ' + social[3]}
						href={social[1]}
						><span><svelte:component this={social[2]} class="mr-2" /></span>{social[0]}</a
					>
				{/each}
			</ul>
		</div>
	</div>
</footer>

<script lang="ts">
	import IconWindows from '@tabler/icons-svelte/icons/brand-windows';
	import IconUbuntu from '@tabler/icons-svelte/icons/brand-ubuntu';
	import IconWarning from '@tabler/icons-svelte/icons/alert-triangle-filled';
	import IconInfo from '@tabler/icons-svelte/icons/info-circle';
	import { onMount } from 'svelte';

	const { data } = $props();
	type Platform = 'windows' | 'linux';

	interface PlatformConfig {
		name: string;
		icon: any;
		color: string;
		label: string;
		additional?: string;
		download: {
			stable: { version: string; url: string };
			testing: { version: string; url: string };
		};
	}

	const platforms: Record<Platform, PlatformConfig> = {
		windows: {
			name: 'Windows',
			icon: IconWindows,
			color: 'text-blue-500',
			label: 'OpenWars works best on computers running Windows 8 or later that support OpenGL 3+',
			additional: '32-bit binaries are not distributed but should work. Build them manually.',
			download: {
				stable: {
					version: data.windows.stable.version,
					url: data.windows.stable.url
				},
				testing: {
					version: data.windows.testing.version,
					url: data.windows.testing.url
				}
			}
		},
		linux: {
			name: 'Linux',
			icon: IconUbuntu,
			color: 'text-orange-500',
			label:
				'OpenWars is distributed as portable AppImages that should work on modern x64-bit Linux distributions',
			download: {
				stable: {
					version: data.linux.stable.version,
					url: data.linux.stable.url
				},
				testing: {
					version: data.linux.testing.version,
					url: data.linux.testing.url
				}
			}
		}
	};

	let active = $state<Platform>('windows');

	onMount(() => {
		active = window.navigator.platform.includes('Win') ? 'windows' : 'linux';
	});
</script>

<section class="py-12 md:py-16 px-4">
	<div class="mb-12 max-w-2xl mx-auto">
		<h1 class="font-extrabold text-3xl md:text-4xl text-center mb-3">Downloads for OpenWars</h1>
		<p class="text-center text-sm md:text-base">
			OpenWars is available for most modern operating systems. Downloads are split in two parts.
		</p>
	</div>
	<div class="max-w-4xl mx-auto px-4 md:px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
		<div>
			<h2 class="text-xl font-bold mb-3">Which build?</h2>
			<p class="text-sm mb-4">Two builds are available, depending on how you want to play:</p>
			<ul class="list-disc marker:text-brand space-y-3 text-sm">
				<li>
					Stable is recommended for most players who want to play multiplayer or a stable game.
				</li>
				<li>
					Testing provides a preview of latest improvements and features for players who want to
					help test and shape the future of OpenWars, beware, they might be full of bugs.
				</li>
			</ul>
		</div>
		<div>
			<h2 class="text-xl font-bold mb-3">Licensing and game assets.</h2>
			<p class="text-sm">
				The OpenWars engine is free/libre (as in "free speech") and open source software under the
				GPL license. The game does not require original game assets. Distributed assets are under a
				Creative Commons license. See <a class="underline font-semibold" href="/legal"
					>legal notice.</a
				>
			</p>
		</div>
	</div>
	<div class="mt-8 max-w-4xl mx-auto px-4 md:px-8">
		<div class="flex flex-col sm:flex-row gap-4 mb-6 py-4">
			{#each Object.entries(platforms) as [key, platform]}
				<button
					class={`px-6 py-4 bg-zinc-800 rounded-md font-semibold text-lg flex flex-col items-center justify-center gap-2 transition w-full ${active == key ? 'shadow-lg shadow-brand/30 -translate-y-1' : 'hover:bg-zinc-700'}`}
					onclick={() => {
						active = key as Platform;
					}}
				>
					<platform.icon class="{platform.color} w-8 h-8" />
					<span>{platform.name}</span>
				</button>
			{/each}
		</div>
		<div class="px-6 py-6 bg-zinc-900 rounded-md">
			<div class="flex items-center gap-3 mb-6 p-3 bg-zinc-800 rounded-sm">
				<IconWarning class="w-5 h-5 shrink-0 mt-0.5" />
				<span class="text-sm"
					>Currently, everything is under construction and we don't provide any playable builds yet.
					To test the current state of the game, refer to our GitHub and follow the build
					instructions.</span
				>
			</div>
			<p class="mb-6 text-sm">{platforms[active].label}</p>
			<div class="flex flex-col md:flex-row gap-4">
				<a
					class="px-6 py-4 bg-brand rounded-md flex-1 transition hover:-translate-y-1 font-medium"
					href={platforms[active].download.stable.url}
				>
					<h3 class="mb-2 text-base font-semibold">Download Stable</h3>
					<span
						class="inline-block px-3 py-0.5 w-full bg-brandDark/15 rounded-sm font-mono text-sm uppercase shadow-inner text-center"
						>Version {platforms[active].download.stable.version}</span
					>
				</a>
				<a
					class="px-6 py-4 under-construction hover:bg-amber-500 rounded-md flex-1 transition hover:-translate-y-1 font-medium"
					href={platforms[active].download.testing.url}
				>
					<h3 class="mb-2 text-base font-semibold">Download Testing</h3>
					<span
						class="inline-block px-3 py-0.5 w-full bg-amber-500/30 rounded-sm font-mono text-sm uppercase shadow-inner text-center"
						>Version {platforms[active].download.testing.version}</span
					>
				</a>
			</div>

			{#if platforms[active].additional}
				<div class="mt-6 flex items-center gap-3 p-3 bg-blue-600 rounded-sm">
					<IconInfo class="w-5 h-5 shrink-0 mt-0.5" />
					<span class="text-sm">{platforms[active].additional}</span>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	@reference "../../../styles.css";

	.under-construction {
		background-image:
			repeating-linear-gradient(135deg, transparent, transparent 20px, black 20px, black 50px),
			repeating-linear-gradient(135deg, transparent, transparent 20px, black 20px, black 50px);
		background-position:
			top left,
			bottom left;
		background-size: 100% 3px;
		@apply bg-no-repeat bg-amber-400 text-black p-4;
	}
</style>

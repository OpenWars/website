<script>
	import IconWindows from '@tabler/icons-svelte/icons/brand-windows';
	import IconUbuntu from '@tabler/icons-svelte/icons/brand-ubuntu';
	import IconWarning from '@tabler/icons-svelte/icons/alert-triangle-filled';
	import IconInfo from '@tabler/icons-svelte/icons/info-circle';

	let active = 'windows';
</script>

<section class="mt-4">
	<h1 class="text-center font-bold text-4xl">Downloads for OpenWars.</h1>
	<p class="text-center mb-4">
		OpenWars is available for most modern operating systems. Downloads are split in two parts.
	</p>
	<div class="mx-8 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
		<div>
			<h2 class="text-2xl font-bold mb-2">Which build?</h2>
			<p>Two builds are available, depending on how you want to play:</p>
			<ul class="list-disc marker:text-brand space-y-4">
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
			<h2 class="text-2xl font-bold mb-2">Licensing and game assets.</h2>
			<p>
				The OpenWars engine is free/libre (as in "free speech") and open source software under the
				GPL license. The game does not require original game assets. Distributed assets are under a
				Creative Commons license. See <a class="underline font-bold" href="/legal">legal notice.</a>
			</p>
		</div>
	</div>
</section>
<section class="mt-4">
	<div class="p-4 flex flex-col sm:flex-row justify-around items-center">
		<button
			class={`p-4 bg-zinc-800 rounded-md font-bold text-xl flex flex-col items-center transition w-1/4 ${active == 'windows' ? 'border-brand border-b-2 -translate-y-1' : ''}`}
			on:click={() => (active = 'windows')}
		>
			<IconWindows class="text-blue-500 w-12 h-12" />
			Windows
		</button>
		<button
			class={`p-4 bg-zinc-800 rounded-md font-bold text-xl flex flex-col items-center transition w-1/4 ${active == 'linux' ? 'border-brand border-b-2 -translate-y-1' : ''}`}
			on:click={() => (active = 'linux')}
		>
			<IconUbuntu class="text-orange-500 w-12 h-12" />
			Linux
		</button>
	</div>
	<div class="p-4 m-4 bg-zinc-900">
		<div class="under-construction flex items-center mb-8">
			<IconWarning class="mr-2 w-5 h-5" /> Currently, everything is under construction and we don't provide
			any playable builds yet. To test the current state of the game, refer to our GitHub and follow
			the build instructions.
		</div>
		{#if active == 'windows'}
			<p class="mb-4">
				OpenWars works best on computers running Windows 8 or later that support OpenGL 3+.
			</p>
			<div class="flex space-x-2">
				<button class="p-4 bg-brand rounded-md w-1/2 transition hover:-translate-y-1">
					<h3 class="mb-1 text-lg font-bold">Download Stable</h3>
					<span class="p-2 bg-brandDark rounded-sm font-mono">v0.0.0</span>
				</button>
				<button class="p-4 under-construction rounded-md w-1/2 transition hover:-translate-y-1">
					<h3 class="mb-1 text-lg font-bold">Download Testing</h3>
					<span class="p-2 bg-yellow-400 rounded-sm font-mono">v0.0.0</span>
				</button>
			</div>
			<p class="mt-4 text-blue-400 flex">
				<IconInfo class="mr-2" />
				x32-bit binaries are not distributed but should work. Build them manually.
			</p>
		{:else}
			<p class="mb-4">
				OpenWars is distributed as portable AppImages that should work on modern x64-bit Linux
				distributions.
			</p>
			<div class="flex space-x-2">
				<button class="p-4 bg-brand rounded-md w-1/2 transition hover:-translate-y-1">
					<h3 class="mb-1 text-lg font-bold">Download Stable</h3>
					<span class="p-2 bg-brandDark rounded-sm font-mono">v0.0.0</span>
				</button>
				<button class="p-4 under-construction rounded-md w-1/2 transition hover:-translate-y-1">
					<h3 class="mb-1 text-lg font-bold">Download Testing</h3>
					<span class="p-2 bg-yellow-400 rounded-sm font-mono">v0.0.0</span>
				</button>
			</div>
		{/if}
	</div>
</section>

<style lang="postcss">
	.under-construction {
		background-image: repeating-linear-gradient(
				135deg,
				transparent,
				transparent 20px,
				black 20px,
				black 50px
			),
			repeating-linear-gradient(135deg, transparent, transparent 20px, black 20px, black 50px);
		background-position:
			top left,
			bottom left;
		background-size: 100% 3px;
		@apply bg-no-repeat bg-yellow-300 text-black p-4;
	}
</style>

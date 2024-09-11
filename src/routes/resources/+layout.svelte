<script>
	import '../../styles.css';
</script>

<svelte:head>
	<title>OpenWars Resource Center</title>
	<meta name="description" content="Resource center for the OpenWars game." />
	<meta name="og:title" content="OpenWars Resource Center" />
	<meta name="og:site_name" content="OpenWars" />
	<meta name="og:description" content="Resource center for the OpenWars game." />
	<meta name="theme-color" content="#3b82f6" />
</svelte:head>

<main class="blueprint min-h-screen text-white">
	<slot />
</main>

<style lang="postcss">
	.blueprint {
		background-color: theme(colors.blue.500);
		background-image: linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.2) 2px, transparent 1px),
			linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
		background-size:
			100px 100px,
			100px 100px,
			20px 20px,
			20px 20px;
		background-position:
			-2px -2px,
			-2px -2px,
			-1px -1px,
			-1px -1px;
	}
</style>

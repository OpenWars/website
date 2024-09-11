<script>
	import '../../styles.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>OpenWars</title>
	<meta name="description" content="Welcome back, Advisor. Your mission starts now." />
	<meta name="og:title" content="OpenWars" />
	<meta name="og:site_name" content="OpenWars" />
	<meta name="og:description" content="Welcome back, Advisor. Your mission starts now." />
	<meta name="theme-color" content="#243519" />
</svelte:head>

<main
	class="bg-zinc-900 bg-repeat-y bg-cover bg-[url('/camo_pattern.png')] text-zinc-300 flex min-h-screen flex-col justify-between"
>
	<Navbar />
	<slot />
	<Footer />
</main>

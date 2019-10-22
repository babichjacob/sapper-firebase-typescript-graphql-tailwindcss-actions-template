<script lang="typescript">
	// @ts-ignore
	import { stores } from "@sapper/app";
	const { page } = stores();

	let path: string;
	// @ts-ignore
	$: path = $page.path.slice(1);
</script>

<svelte:head>
	<title>{path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Index'}</title>
</svelte:head>

<main class="flex-1 flex flex-col">
	<slot />
</main>

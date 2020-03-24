<script lang="typescript">
	// @ts-ignore
	import { stores } from "@sapper/app";
	// @ts-ignore
	const { page } = stores();

	// @ts-ignore
	let path: string;
	// @ts-ignore
	$: path = $page.path.slice(1);
</script>

<style lang="postcss" src="../tailwind.pcss" global></style>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Index'}
	</title>
</svelte:head>

<slot />

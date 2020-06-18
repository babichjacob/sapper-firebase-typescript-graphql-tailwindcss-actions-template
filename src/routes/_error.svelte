<script lang="typescript">
	export let status: number;
	export let error: Error;

	// @ts-ignore
	const dev = process.env.NODE_ENV === "development";
</script>

<section class="flex flex-1 flex-col items-center justify-center">
	<h1 class="text-red-700 text-2xl">{error.message}</h1>
	<h2 class="mt-1 text-red-700 text-lg">{status}</h2>
</section>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

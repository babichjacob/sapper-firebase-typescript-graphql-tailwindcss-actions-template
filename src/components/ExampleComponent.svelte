<script>
	export let title: string;
	export let paragraph: string;
</script>

<svelte:options immutable />

<h1 class="text-3xl text-blue-500 font-extralight">{title}</h1>
<p class="mt-4 text-gray-700">{paragraph}</p>

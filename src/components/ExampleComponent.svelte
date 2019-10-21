<script lang="typescript">
  export let title: string;
  export let paragraph: string;
</script>

<svelte:options immutable />

<h1 class="text-2xl text-blue-700">{title}</h1>
<p class="text-blue-800">{paragraph}</p>

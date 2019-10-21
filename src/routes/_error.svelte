<script lang="typescript">
  export let status: string;
  export let error: Error;
  export let title = error.message;

  const dev = process.env.NODE_ENV === "development";
</script>

<section class="flex flex-1 flex-col items-center justify-center">
  <h1 class="text-red-700 text-xl">{error.message}</h1>
  <h2 class="text-red-700 text-lg">{status}</h2>
</section>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

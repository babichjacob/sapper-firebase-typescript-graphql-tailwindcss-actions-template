<!-- https://firebase.google.com/docs/hosting/full-config#404 -->

<script lang="typescript">
	import ErrorPage from "./_error.svelte";
</script>

<ErrorPage status={404} error={{ message: "Not found" }} />

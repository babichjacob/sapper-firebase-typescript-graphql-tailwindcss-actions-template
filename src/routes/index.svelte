<script lang="typescript">
	import ExampleComponent from "../components/ExampleComponent.svelte";
</script>

<div class="flex flex-1 flex-col items-center justify-center">
	<ExampleComponent
		title="This is the index!"
		paragraph="This is the paragraph on the index" />

	<a class="mt-8 text-pink-700 hover:text-pink-500 focus:text-pink-500 focus:outline-none" href="/graphql">
		Check out the GraphQL playground!
	</a>
</div>

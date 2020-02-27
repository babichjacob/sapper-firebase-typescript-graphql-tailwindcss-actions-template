<script lang="typescript">
	import ExampleComponent from "../components/ExampleComponent.svelte";
</script>

<div class="flex flex-1 flex-col items-center justify-center">
	<ExampleComponent
		title="🌐 Sapper project base"
		paragraph="This is an example route and component to make sure everything's working." />

	<a
		class="mt-8 p-3 rounded-lg shadow-md text-pink-800 bg-pink-200 
		       transition duration-200 ease-in-out
		       hover:bg-pink-300 focus:bg-pink-300 focus:outline-none focus:shadow-outline"
		href="/graphql">
		Check out the GraphQL playground!
	</a>
</div>

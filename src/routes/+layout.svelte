<script>
	import Icon from '$lib/Icon.svelte'
	import '../app.pcss'
</script>

<nav class="flex flex-row justify-between p-4">
	<a href="/">
		<h1>
			<Icon name="biBeet" class="inline-block w-6 md:w-4" />
			<span class="hidden md:inline"> bitter </span>
		</h1>
	</a>
</nav>

<main class="mx-auto flex max-w-lg flex-col gap-4 p-4">
	<slot />
</main>

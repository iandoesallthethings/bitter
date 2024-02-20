<script>
	import Icon from '$lib/Icon.svelte'
	import '../app.pcss'
</script>

<nav class="p-4">
	<a href="/">
		<h1>
			<Icon name="biBeet" class="inline-block w-4" />
			bitter
		</h1>
	</a>
</nav>

<main class="mx-auto flex max-w-lg flex-col gap-4 p-4">
	<slot />
</main>

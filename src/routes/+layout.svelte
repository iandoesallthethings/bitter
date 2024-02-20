<script>
	import Icon from '$lib/Icon.svelte'
	import '../app.pcss'
</script>

<nav class="p-4">
	<h1>
		<Icon name="biBeet" class="inline-block w-8" />
		bitter
	</h1>
</nav>

<main class="mx-auto flex max-w-lg flex-col gap-4">
	<slot />
</main>

<script lang="ts">
	import BeetCard from '$lib/BeetCard.svelte'
	import BeetComposer from '$lib/BeetComposer.svelte'

	let { data } = $props()
</script>

<BeetComposer />

{#each data.beets as beet}
	<BeetCard {beet} />

	<div class="border-l pl-4">
		{#each beet.children as child}
			<BeetCard beet={child} />
		{/each}
	</div>
{/each}

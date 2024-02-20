<script lang="ts">
	import BeetCard from '$lib/BeetCard.svelte'

	let { data } = $props()
</script>

<BeetCard beet={data.beet} />

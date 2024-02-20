<script lang="ts">
	import Avatar from '$lib/Avatar.svelte'
	import BeetCard from '$lib/BeetCard.svelte'
	import * as Dates from '$lib/Dates'

	let { data } = $props()
</script>

<div class="flex flex-col items-center">
	<Avatar user={data.user} class="h-20 w-20" />
	<h1 class="text-center">@{data.user.username}</h1>

	<p class="opacity-50">Joined {Dates.distanceFromNow(data.user.createdAt)} ago</p>
</div>

{#each data.beets as beet}
	<BeetCard {beet} />
{/each}

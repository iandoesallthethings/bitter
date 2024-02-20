<script lang="ts">
	import type { Beet } from '$types'
	import * as Dates from '$lib/Dates'
	import BeetComposer from '$lib/BeetComposer.svelte'
	import Icon from './Icon.svelte'

	interface Props {
		beet: Beet
	}

	let { beet } = $props<Props>()

	let reply = $state(false)
</script>

<div class="flex flex-row items-start gap-2">
	<div class="h-10 w-10 overflow-hidden rounded-full border">
		<Icon name="faUser" class="h-full w-full" />
	</div>

	<div class="relative flex flex-col">
		<p>
			<a href="/{beet.author.username}" class="font-bold">
				@{beet.author.username}
			</a>

			<span class="opacity-30">
				· {Dates.distanceFromNow(beet.createdAt)} ago
			</span>
		</p>

		<p>{beet.message}</p>

		<div class="controls flex flex-row justify-end gap-2 py-2">
			<button on:click={() => (reply = !reply)} class="whitespace-nowrap">
				{#if reply}
					<Icon name="faCancel" /> cancel
				{:else}
					<Icon name="faReply" /> reply
				{/if}
			</button>

			<button on:click={() => {}} class="whitespace-nowrap">
				<Icon name="biBeet" class="inline-block h-4 w-4 " /> rebeet
			</button>
		</div>

		{#if reply}
			<BeetComposer parentId={beet.id} />
		{/if}
	</div>
</div>

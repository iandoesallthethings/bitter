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
	let showReplies = $state(false)
</script>

{#snippet card(beet: Beet)}
	<div class="relative flex flex-row items-start gap-2">
		<a href="/beets/{beet.id}" class="link-to-beet absolute h-full w-full">&nbsp;</a>

		<a href="/{beet.author.username}" class="h-10 w-10 overflow-hidden rounded-full border">
			<Icon name="faUser" class="h-full w-full" />
		</a>

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

			<div class="controls flex flex-row gap-2 py-2">
				<button>
					<Icon name="faHeart" /> like
				</button>

				<button on:click={() => (reply = !reply)} class="whitespace-nowrap">
					{#if reply}
						<Icon name="faCancel" /> cancel
					{:else}
						<Icon name="faReply" /> reply
					{/if}
				</button>

				<button on:click={() => {}} class="whitespace-nowrap">
					<Icon name="biBeet" class="inline-block w-2" /> rebeet
				</button>
			</div>

			{#if reply}
				<BeetComposer parentId={beet.id} />
			{/if}
		</div>
	</div>
{/snippet}

{@render card(beet)}

{#if beet.children?.length > 0}
	<button on:click={() => (showReplies = !showReplies)} class="link-button">
		{showReplies ? 'hide' : `show ${beet.children?.length}`}
		repl{beet.children?.length > 1 ? 'ies' : 'y'}
	</button>

	{#if showReplies}
		<div class="ml-10 border-l pl-2">
			{#each beet.children as child}
				{@render card(child)}
			{/each}
		</div>
	{/if}
{/if}

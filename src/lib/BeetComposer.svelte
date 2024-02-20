<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit'
	import Icon from './Icon.svelte'

	interface Props {
		parentId?: number
	}

	let { parentId = null, form } = $props<Props>()

	const post: SubmitFunction = async () => {
		return async ({ result }) => {
			await applyAction(result)
		}
	}
</script>

<form
	use:enhance={post}
	method="POST"
	action="/beets?/post"
	class="relative flex w-full flex-col rounded border bg-ivory"
>
	<input type="hidden" name="authorId" value={1} />
	<input type="hidden" name="parentId" value={parentId} />

	<textarea
		id="message"
		name="message"
		rows="3"
		placeholder="What's on your mind?"
		class="min-h-24 w-full"
		required
	/>

	<button class="absolute bottom-2 right-2">beet!</button>
</form>

{#if form?.missing}
	<p class="text-beet">
		<Icon name="faWarning" />
		{form?.error}
	</p>
{/if}

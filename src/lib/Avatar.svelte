<script lang="ts">
	import type { User } from '$types'
	import Icon from './Icon.svelte'

	interface Props {
		user: User
		class?: string
	}
	let { user, class: _class } = $props<Props>()
</script>

<a
	href="/{user.username}"
	class="inline-block h-10 w-10 overflow-hidden rounded-full border {_class}"
>
	<Icon name="faUser" class="h-full w-full" />
</a>

<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
	// import { faArrowRight, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
	// import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
	import * as fa from '@fortawesome/free-solid-svg-icons'
	import * as faBrands from '@fortawesome/free-brands-svg-icons'
	import { biBeet } from '$lib/Images'

	type IconName = keyof typeof icons

	interface Props {
		name: IconName
		class?: string
	}

	let { name, class: classes } = $props<Props>()

	// Note: optimize this for prod by only importing icons you're using
	// const icons = { faArrowRight, faCopy, faCheck, faTwitter, faLinkedin }
	const icons = { ...fa, ...faBrands, biBeet }

	let icon = $derived(icons[name])

	// bi for beetIcon
	function isBiIcon(name: IconName): boolean {
		return name.startsWith('bi')
	}
</script>

{#if isBiIcon(name)}
	<div class="{classes} block">
		{@html icon}
	</div>
{:else}
	<FontAwesomeIcon icon={icons[name]} class={classes} />
{/if}

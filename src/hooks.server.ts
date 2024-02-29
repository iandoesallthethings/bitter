import { handleSession } from 'svelte-kit-cookie-session'

export const handle = handleSession({
	secret: 'THIS_IS_A_SECRET',
})

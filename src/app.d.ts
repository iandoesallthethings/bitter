import type { Session } from 'svelte-kit-cookie-session'
import type { User } from '$types'

type SessionData = {
	user?: User
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: Session<SessionData>
		}
		interface PageData {
			session: Session<SessionData>
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}

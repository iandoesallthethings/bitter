import * as Users from '$lib/Users'
import * as Beets from '$lib/Beets'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const username = params.username

	const user = await Users.getByUsername(username)

	if (!user) throw error(404, 'User not found')

	const beets = await Beets.getByUserId(user.id)

	return {
		user,
		beets,
	}
}

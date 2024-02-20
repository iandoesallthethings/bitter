import * as Beets from '$lib/Beets'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const beetId = parseInt(params.beetId)

	const beet = await Beets.getById(beetId)

	if (!beet) throw error(404, 'Beet not found')

	return { beet }
}

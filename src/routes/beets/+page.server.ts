import * as Beets from '$lib/Beets'
import { fail } from '@sveltejs/kit'

export const actions = {
	async post({ request }) {
		const data = await request.formData()
		console.debug(data)

		const authorId = parseInt(data.get('authorId') as string)
		const parentId = data.get('parentId') ? parseInt(data.get('parentId') as string) : null
		const message = (data.get('message') as string).trim()

		if (!message.trim()) {
			return fail(400, { message, missing: true })
		}

		const newBeet = await Beets.create({ authorId, message, parentId })

		return { newBeet }
	},
}

import * as Users from '$lib/Users'

export const actions = {
	async login({ request }) {
		const credentials = await request.formData()
		const email = credentials.get('email')
		const password = credentials.get('password')

		const valid = await Users.checkPassword(email, password)

		if (valid) {
			return {
				status: 200,
				body: { message: 'Logged in' },
			}
		}
	},

	async register({ request }) {
		const newUser = await request.formData()

		const username = newUser.get('username')
		const email = newUser.get('email')
		const password = newUser.get('password')

		await Users.create({ username, email, password })
	},
}

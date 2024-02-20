import * as Beets from '$lib/Beets'

export async function load() {
	return {
		beets: await Beets.getFeed(),
	}
}

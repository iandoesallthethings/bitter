export enum Comparison {
	LeftComesFirst = -1,
	RightComesFirst = 1,
	NeitherComeFirst = 0,
}

type NumberOfMilliseconds = number

export const second = 1000
export const minute = 60 * second
export const hour = 60 * minute
export const day = 24 * hour
export const week = 7 * day
export const month = 30 * day
export const year = 365 * day

export function distanceFromNow(date: Date): string {
	date = new Date(date)
	const now = new Date()
	const distance = now.getTime() - date.getTime()

	if (distance >= year) return twoCharString(distance, year, 'y')
	else if (distance >= month) return twoCharString(distance, month, 'mo')
	else if (distance >= week) return twoCharString(distance, week, 'w')
	else if (distance >= day) return twoCharString(distance, day, 'd')
	else if (distance >= hour) return twoCharString(distance, hour, 'h')
	// else if (distance > minute) return '1h'
	else if (distance > minute) return twoCharString(distance, minute, 'mins')
	else if (distance <= minute) return twoCharString(distance, second, 's')
	else return ''
}

export function subtractFromToday({
	days = 0,
	minutes = 0,
	hours = 0,
}: {
	days?: number
	minutes?: number
	hours?: number
}): Date {
	const currentDate = new Date()
	const offsetMilliseconds =
		days * 24 * 60 * 60 * 1000 + minutes * 60 * 1000 + hours * 60 * 60 * 1000
	const resultDate = new Date(currentDate.getTime() - offsetMilliseconds)
	return resultDate
}

function twoCharString(
	milliseconds: NumberOfMilliseconds,
	unit: NumberOfMilliseconds,
	unitCharacter: string
): string {
	// const [unitName] = Object.keys({unitInMilliseconds})
	const quantity = Math.floor(milliseconds / unit) || 1 // In case we want to cut days off at 9 days or whatever
	return quantity + unitCharacter
}

// if less than a minute
//     1m
// else if greater than a minute and less than an hour
//     1h
// else if greater than an hour and less than a day
//     #h
// else if greater than a day and less than a week
//     #d
// else if greater than a week and less than a month
//     #w
// else if greater than a month and less than a year
//     #m
// else if greater than a year
//     #y

export function sortNewestFirst(a: Date, b: Date): Comparison {
	// A is newer than b.
	if (a > b) {
		return Comparison.LeftComesFirst
	}

	// A is older than b.
	if (a < b) {
		return Comparison.RightComesFirst
	}

	return Comparison.NeitherComeFirst
}

export function dateYYYYMMDD(date: Date) {
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	const localDate = `${year}-${month}-${day}`
	return localDate
}

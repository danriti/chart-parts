import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { isValid } from './util'

/**
 * Creates an observable node based on incoming number stream
 * @param source An observable of numbers to emit the maximum value of
 */
export default function max(source: Observable<number>) {
	let maxValue: number | undefined
	return source.pipe(
		map(v => {
			if (!isValid(v)) {
				return maxValue
			}
			maxValue = maxValue === undefined ? v : Math.max(v, maxValue)
			return maxValue
		}),
	)
}
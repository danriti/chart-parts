import {
	SGAreaItem,
	Orientation,
	Interpolation,
	MarkType,
} from '@gog/mark-interfaces'
import { Item } from './Item'

export class AreaItem extends Item implements SGAreaItem {
	public static ITEM_TYPE = MarkType.Area
	public readonly itemtype: string = AreaItem.ITEM_TYPE

	public orient?: Orientation = Orientation.VERTICAL
	public interpolate: Interpolation = Interpolation.LINEAR
	public tension?: number
	public defined?: boolean
}
import { VSvgNode, VSvgTransformType } from '@gog/vdom-interfaces'
import { MarkConverter } from '@gog/xform-sg-interfaces'

export interface VSvgMarkOutput {
	nodes: VSvgNode[]
	defs?: VSvgNode[]
}

export interface VSvgRenderContext {
	nextId(): string
}

export type VSvgMarkConverter = MarkConverter<VSvgMarkOutput, VSvgRenderContext>

export function translate(x: number, y: number) {
	return { type: VSvgTransformType.translate, value: [x, y] }
}

export function rotate(angle: number) {
	return { type: VSvgTransformType.rotate, value: angle }
}
import { CCScreenOrientation } from "./resize-module.enums";

export type CCOrientationData = {
    orientation: CCScreenOrientation,
    landscape: cc.Vec2,
    portrait: cc.Vec2,
    aspectRatio?: number
}
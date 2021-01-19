import CocosCreatorCachedComponent from "../../../integration/component/cc.cached.component";

const {ccclass, property} = cc._decorator;



@ccclass
export default class Anchor2DComponent extends CocosCreatorCachedComponent {

    @property(cc.Vec2)
    landscape: cc.Vec2 = new cc.Vec2(0, 0);
 
    @property
    portrait: cc.Vec2 = new cc.Vec2(0, 0);

}

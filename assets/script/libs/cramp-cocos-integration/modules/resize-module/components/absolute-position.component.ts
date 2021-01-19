import CocosCreatorCachedComponent from "../../../integration/component/cc.cached.component";

const {ccclass, property} = cc._decorator;



@ccclass
export default class AbsolutePositionComponent extends CocosCreatorCachedComponent {

    @property(cc.Vec3)
    landscape: cc.Vec3 = new cc.Vec3(0, 0, 0);
 
    @property(cc.Vec3)
    portrait: cc.Vec3 = new cc.Vec3(0, 0, 0);

}

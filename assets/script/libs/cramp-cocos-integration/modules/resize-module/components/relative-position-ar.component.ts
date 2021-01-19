import CocosCreatorCachedComponent from "../../../integration/component/cc.cached.component";

const {ccclass, property} = cc._decorator;



@ccclass
export default class RelativePositionARComponent extends CocosCreatorCachedComponent {

    @property()
    isRelativeToParent: boolean = false;
 
    @property()
    aspectRatio: number = 1.36;
 
    @property(cc.Vec2)
    landscapeBelowAR: cc.Vec2 = new cc.Vec2(0, 0);
 
    @property
    portraitBelowAR: cc.Vec2 = new cc.Vec2(0, 0);
 
    @property(cc.Vec2)
    landscapeAboveAR: cc.Vec2 = new cc.Vec2(0, 0);
 
    @property
    portraitAboveAR: cc.Vec2 = new cc.Vec2(0, 0);
    
}

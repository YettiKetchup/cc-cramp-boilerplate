import CocosCreatorCachedComponent from "../../../integration/component/cc.cached.component";

const {ccclass, property} = cc._decorator;



@ccclass
export default class SmartFit2DComponent extends CocosCreatorCachedComponent {

    @property
    isRelativeToParent: boolean = false;
    
}

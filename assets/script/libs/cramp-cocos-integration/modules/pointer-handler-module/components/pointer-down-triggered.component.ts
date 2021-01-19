import CocosCreatorCachedComponent from "../../../integration/component/cc.cached.component";
import { IEntity } from "../../../cramp/type-definitions/interfaces";

const {ccclass, property} = cc._decorator;



@ccclass
export default class PointerDownTriggeredComponent extends CocosCreatorCachedComponent {

    @property({override: true})
    inCache: boolean = true;
 
    public event: cc.Event = null;
    public entity: IEntity<cc.Component> = null;
    
}

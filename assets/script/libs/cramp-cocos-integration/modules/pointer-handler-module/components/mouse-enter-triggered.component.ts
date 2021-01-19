import CocosCreatorCachedComponent from "../../../integration/component/cc.cached.component";
import { IEntity } from "../../../cramp/type-definitions/interfaces";

const {ccclass, property} = cc._decorator;



@ccclass
export default class MouseEnterTriggeredComponent extends CocosCreatorCachedComponent {

    @property({override: true})
    inCache: boolean = true;
 
    public event: cc.Event.EventMouse = null;
    public entity: IEntity<cc.Component> = null;
    
}

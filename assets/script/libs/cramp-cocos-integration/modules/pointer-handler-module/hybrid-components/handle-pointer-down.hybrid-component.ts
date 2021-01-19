import CocosCreatorCachedComponent from "../../../integration/component/cc.cached.component";
import CocosCreatorEntity from "../../../integration/entity/cc.entity";
import ComponentChangesController from "../../../cramp/component-changes-controller/component-changes.controller";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import PointerDownTriggeredComponent from "../components/pointer-down-triggered.component";

const {ccclass, property} = cc._decorator;



@ccclass
export default class HandlePointerDownHybridComponent extends CocosCreatorCachedComponent {
 
    @property
    stopPropagation: boolean = false;

    private _entity: ICocosCreatorEntity = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onPointerEventTriggered, this);
        this._entity = this.getComponent(CocosCreatorEntity);
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onPointerEventTriggered, this);
    }

    private _onPointerEventTriggered(event: cc.Event): void {
        if(this.inCache || this._entity.get(PointerDownTriggeredComponent)) return;
        if(this.stopPropagation) event.stopPropagation();

        ComponentChangesController.attach(
            this._entity,
            PointerDownTriggeredComponent,
            {event, entity: this._entity}
        )
    }

}

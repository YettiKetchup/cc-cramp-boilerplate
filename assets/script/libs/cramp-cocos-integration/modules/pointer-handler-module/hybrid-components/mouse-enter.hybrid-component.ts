import CocosCreatorCachedComponent from "../../../integration/component/cc.cached.component";
import CocosCreatorEntity from "../../../integration/entity/cc.entity";
import ComponentChangesController from "../../../cramp/component-changes-controller/component-changes.controller";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import MouseEnterTriggeredComponent from "../components/mouse-enter-triggered.component";

const {ccclass, property} = cc._decorator;



@ccclass
export default class MouseEnterHybridComponent extends CocosCreatorCachedComponent {
 
    @property
    stopPropagation: boolean = false;

    private _entity: ICocosCreatorEntity = null;

    onLoad() {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this._onPointerEventTriggered, this);
        this._entity = this.getComponent(CocosCreatorEntity);
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.MOUSE_ENTER, this._onPointerEventTriggered, this);
    }

    private _onPointerEventTriggered(event: cc.Event.EventMouse): void {
        if(this.inCache || this._entity.get(MouseEnterTriggeredComponent)) return;
        if(this.stopPropagation) event.stopPropagation();

        ComponentChangesController.attach(
            this._entity,
            MouseEnterTriggeredComponent,
            {event, entity: this._entity}
        )
    }

}

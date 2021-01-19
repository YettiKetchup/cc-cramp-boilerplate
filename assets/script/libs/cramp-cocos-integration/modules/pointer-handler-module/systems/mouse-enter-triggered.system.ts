import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import MouseEnterTriggeredComponent from "../components/mouse-enter-triggered.component";



export default class MouseEnterTriggeredSystem extends CocosCreatorSystem<undefined> {

    protected readonly componentFilter: ComponentFilter = {
        include: [MouseEnterTriggeredComponent]
    }

    public execute(entities: ICocosCreatorEntity[], data?: undefined): void {
        for(let i = 0; i < entities.length; i++) {
            entities[i].remove(MouseEnterTriggeredComponent);
        }
    }

}
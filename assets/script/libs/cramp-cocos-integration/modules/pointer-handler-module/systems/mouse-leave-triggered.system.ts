import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import MouseLeaveTriggeredComponent from "../components/mouse-leave-triggered.component";



export default class MouseLeaveTriggeredSystem extends CocosCreatorSystem<undefined> {

    protected readonly componentFilter: ComponentFilter = {
        include: [MouseLeaveTriggeredComponent]
    }

    public execute(entities: ICocosCreatorEntity[], data?: undefined): void {
        for(let i = 0; i < entities.length; i++) {
            entities[i].remove(MouseLeaveTriggeredComponent);
        }
    }

}
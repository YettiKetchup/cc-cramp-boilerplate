import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import PointerDownTriggeredComponent from "../components/pointer-down-triggered.component";



export default class PointerDownTriggeredSystem extends CocosCreatorSystem<undefined> {

    protected readonly componentFilter: ComponentFilter = {
        include: [PointerDownTriggeredComponent]
    }

    public execute(entities: ICocosCreatorEntity[], data?: undefined): void {
        for(let i = 0; i < entities.length; i++) {
            entities[i].remove(PointerDownTriggeredComponent);
        }
    }

}
import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import AbsolutePositionComponent from "../components/absolute-position.component";
import { CCOrientationData } from "../resize-module-definitions/resize-module.types";



export default class AbsolutePositionSystem extends CocosCreatorSystem<CCOrientationData> {

    protected readonly componentFilter: ComponentFilter = {
        include: [AbsolutePositionComponent]
    };

    public execute(entities: ICocosCreatorEntity[], data?: CCOrientationData): void  {
        for(let i = 0; i < entities.length; i++) {
            const position = entities[i].get(AbsolutePositionComponent);
            position.node.position = position[data.orientation];
        }
    }

}
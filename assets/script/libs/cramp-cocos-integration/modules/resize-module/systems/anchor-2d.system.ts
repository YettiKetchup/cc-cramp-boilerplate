import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import Anchor2DComponent from "../components/anchor-2d.component";
import { CCOrientationData } from "../resize-module-definitions/resize-module.types";



export default class Anchor2DSystem extends CocosCreatorSystem<CCOrientationData> {

    protected readonly componentFilter: ComponentFilter = {
        include: [Anchor2DComponent]
    }

    public execute(entities: ICocosCreatorEntity[], data?: CCOrientationData): void {
        for(let i = 0; i < entities.length; i++) {
            const anchor = entities[i].get(Anchor2DComponent)[data.orientation];
            entities[i].node.setAnchorPoint(anchor.x, anchor.y);
        }
    }

}
import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import SmartFit2DComponent from "../components/smart-fit-2d.component";
import { CCOrientationData } from "../resize-module-definitions/resize-module.types";



export default class SmartFit2DSystem extends CocosCreatorSystem<CCOrientationData> {

    protected readonly componentFilter: ComponentFilter = {
        include: [SmartFit2DComponent]
    }

    public execute(entities: ICocosCreatorEntity[], data?: CCOrientationData): void {
        const zone = {
            width: cc.winSize.width,
            height: cc.winSize.height
        };
 
        for(let i = 0; i < entities.length; i++) {
            if(entities[i].get(SmartFit2DComponent).isRelativeToParent) {
                zone.width = entities[i].node.parent.width;
                zone.height = entities[i].node.parent.height;
            }
 
            const zoneAspect = zone.width / zone.height;
            const nodeAspect = entities[i].node.width / entities[i].node.height;
            const originalHeight = entities[i].node.height;
            const originalWidth = entities[i].node.width;

            let height = 0;
            let width = 0;
 
            if(nodeAspect > zoneAspect) {
                width = (zone.height * originalWidth) / originalHeight;
                height = zone.height;
            }
            else {
                height = (zone.width * originalHeight) / originalWidth;
                width = zone.width;
            }
 
            entities[i].node.width = width;
            entities[i].node.height = height;
        }
    }

}
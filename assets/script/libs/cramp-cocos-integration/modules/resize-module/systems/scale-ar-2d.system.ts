import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import ScaleAR2DComponent from "../components/scale-ar-2d.component";
import { CCOrientationData } from "../resize-module-definitions/resize-module.types";
import aspectRatioUtility from "../utils/aspect-ratio.utility";



export default class ScaleAR2DSystem extends CocosCreatorSystem<CCOrientationData> {

    protected readonly componentFilter: ComponentFilter = {
        include: [ScaleAR2DComponent]
    }

    public execute(entities: ICocosCreatorEntity[], data?: CCOrientationData): void {
        const zone = {
            width: cc.winSize.width,
            height: cc.winSize.height,
            aspectRatio: data.aspectRatio
        }
 
        const designResolution = {
            width: data[data.orientation].x,
            height: data[data.orientation].y
        }
 
        for(let i = 0; i < entities.length; i++) {
            const scaleComponent = entities[i].get(ScaleAR2DComponent);
 
            if(scaleComponent.isRelativeToParent) {
                zone.width = entities[i].node.parent.width;
                zone.height = entities[i].node.parent.height;
                zone.aspectRatio = aspectRatioUtility(zone.width, zone.height);
            }
 
            const aspectRatioBorder = scaleComponent.aspectRatio > zone.aspectRatio ? 'BelowAR' : 'AboveAR';
            const scale = scaleComponent[`${data.orientation}${aspectRatioBorder}`];
            const delta = zone.width / designResolution.width;
 
            entities[i].node.scaleX = scale.x * delta;
            entities[i].node.scaleY = scale.y * delta;
        }
    }

}
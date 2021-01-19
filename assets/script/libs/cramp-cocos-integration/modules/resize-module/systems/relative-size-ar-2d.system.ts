import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import RelativeSizeAR2DComponent from "../components/relative-size-ar-2d.component";
import { CCOrientationData } from "../resize-module-definitions/resize-module.types";
import aspectRatioUtility from "../utils/aspect-ratio.utility";



export default class RelativeSizeAR2DSystem extends CocosCreatorSystem<CCOrientationData> {

    protected readonly componentFilter: ComponentFilter = {
        include: [RelativeSizeAR2DComponent]
    }

    public execute(entities: ICocosCreatorEntity[], data?: CCOrientationData): void {
        const zone = {
            width: cc.winSize.width,
            height: cc.winSize.height,
            aspectRatio: data.aspectRatio
        }
 
        for( let i = 0; i < entities.length; i++) {
            const sizeComponent = entities[i].get(RelativeSizeAR2DComponent);
 
            if(sizeComponent.isRelativeToParent) {
                zone.width = entities[i].node.parent.width;
                zone.height = entities[i].node.parent.height;
                zone.aspectRatio = aspectRatioUtility(zone.width, zone.height);
            }
 
            const aspectRatioBorder = sizeComponent.aspectRatio > zone.aspectRatio ? 'BelowAR' : 'AboveAR';
            const size = sizeComponent[`${data.orientation}${aspectRatioBorder}`];
 
            entities[i].node.width = size.x * cc.winSize.width;
            entities[i].node.height = size.y * cc.winSize.height;
 
 
        }
    }

}
import { ComponentFilter } from "../../../cramp/type-definitions/types";
import CocosCreatorSystem from "../../../integration/system/cc.system";
import { ICocosCreatorEntity } from "../../../types/cc-intergration.interfaces";
import RelativePositionARComponent from "../components/relative-position-ar.component";
import { CCOrientationData } from "../resize-module-definitions/resize-module.types";
import aspectRatioUtility from "../utils/aspect-ratio.utility";



export default class RelativePositionAR2DSystem extends CocosCreatorSystem<CCOrientationData> {

    protected readonly componentFilter: ComponentFilter = {
        include: [RelativePositionARComponent]
    }

    public execute(entities: ICocosCreatorEntity[], data?: CCOrientationData): void {
        const zone = {
            width: cc.winSize.width,
            height: cc.winSize.height,
            aspectRatio: data.aspectRatio
        };
 
        for(let i = 0; i < entities.length; i++) {
            const relativePosition = entities[i].get(RelativePositionARComponent);
 
            if(relativePosition.isRelativeToParent) {
                zone.width = entities[i].node.parent.width;
                zone.height = entities[i].node.parent.height;
                zone.aspectRatio = aspectRatioUtility(zone.width, zone.height);
            }
 
            const aspectRatioBorder = relativePosition.aspectRatio > zone.aspectRatio ? 'BelowAR' : 'AboveAR';
            const position = relativePosition[`${data.orientation}${aspectRatioBorder}`];
 
            entities[i].node.position = new cc.Vec3(
                (zone.width * position.x) / 2,
                (zone.height * position.y) / 2,
                0
            )
        }
    }

}
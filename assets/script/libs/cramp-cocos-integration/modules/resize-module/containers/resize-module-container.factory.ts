import SystemsContainer from "../../../cramp/systems-container/systems.container";
import { IEntity, IEntityStorage, ISystemContainerFactory, ISystemsContainer } from "../../../cramp/type-definitions/interfaces";
import AbsolutePositionSystem from "../systems/absolute-position.system";
import Anchor2DSystem from "../systems/anchor-2d.system";
import RelativePositionAR2DSystem from "../systems/relative-position-ar-2d.system";
import RelativeSizeAR2DSystem from "../systems/relative-size-ar-2d.system";
import ScaleAR2DSystem from "../systems/scale-ar-2d.system";
import SmartFit2DSystem from "../systems/smart-fit-2d.system";



export default class ResizeModuleContainerFactory implements ISystemContainerFactory {

    create(entityStorage: IEntityStorage<IEntity<any>>): ISystemsContainer<any> {
        const container = new SystemsContainer(entityStorage);

        container
            .add(AbsolutePositionSystem)
            .add(RelativePositionAR2DSystem)
            .add(Anchor2DSystem)
            .add(RelativeSizeAR2DSystem)
            .add(ScaleAR2DSystem)
            .add(SmartFit2DSystem)

        return container;
    }

}
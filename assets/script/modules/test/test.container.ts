import SystemsContainer from "../../libs/cramp-cocos-integration/cramp/systems-container/systems.container";
import { IEntity, IEntityStorage, ISystemContainerFactory, ISystemsContainer } from "../../libs/cramp-cocos-integration/cramp/type-definitions/interfaces";
import TestComponent from "./test.component";
import { TestSystem } from "./test.system";



export class TestContainer implements ISystemContainerFactory {
    create(entityStorage: IEntityStorage<IEntity<any>>): ISystemsContainer<any> {
        const container = new SystemsContainer(entityStorage);

        container
            .add(TestSystem)
            .pass<string>('Passed text')
            .include(TestComponent);
            
        // container.add(TestSystem);

        return container;
    }

}
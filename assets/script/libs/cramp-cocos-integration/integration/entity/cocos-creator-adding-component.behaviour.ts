import CocosCreatorCachedComponent from "../../components/component/cc.cached.component";
import { IEntityComponentManipulationBehaviour, INodeEntity } from "../../cramp/type-definitions/interfaces";
import { ComponentConstructor } from "../../cramp/type-definitions/types";
import { ICocosCreatorEntity } from "../../types/cc-intergration.interfaces"



export default class CocosCreatorAddingComponentBehaviour implements IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity> {

    constructor(private _cocosEntity: ICocosCreatorEntity) { }

    public execute<T extends cc.Component>(entity: ICocosCreatorEntity, componentConstructor: ComponentConstructor<T>): T {
        if(entity.get(componentConstructor)) return;

        const cachedComponent: cc.Component = this._cocosEntity.cache.find(c => c instanceof componentConstructor);

        if(!cachedComponent) this._displayComponentError(componentConstructor);
        
        const index: number = this._cocosEntity.cache.indexOf(cachedComponent);
        this._cocosEntity.cache.splice(index, 1);
        this._cocosEntity.components.push(cachedComponent);

        cachedComponent instanceof CocosCreatorCachedComponent ? cachedComponent.inCache = false : cachedComponent.enabled = true;

        return cachedComponent as T;
    }

    private _displayComponentError(componentConstructor: ComponentConstructor<any>): void {
        throw new Error(
            `Component ${componentConstructor.name} doesn't exist in cache! 
            Add extended from CachedComponent component to "${this._cocosEntity.node.name}" in editor and disable it to add in cache!`
        );
    }

}
import BaseDeletingComponentBehaviour from "../../cramp/core/entity/entity-behaviours/base-deleting-component.behaviour";
import BaseGettingComponentBehaviour from "../../cramp/core/entity/entity-behaviours/base-getting-component.behaviour";
import { IEntityBehaviour, IEntityComponentManipulationBehaviour } from "../../cramp/type-definitions/interfaces";
import { ComponentConstructor } from "../../cramp/type-definitions/types";
import CocosCreatorAddingComponentBehaviour from "../../integration/entity/cocos-creator-adding-component.behaviour";
import { ICocosCreatorEntity } from "../../types/cc-intergration.interfaces";
import CocosCreatorCachedComponent from "../component/cc.cached.component";

const { ccclass } = cc._decorator;



@ccclass
export default class CocosCreatorEntity extends cc.Component 
                                        implements ICocosCreatorEntity, 
                                        IEntityBehaviour<cc.Component, ICocosCreatorEntity> 
{
    
    private _components: cc.Component[] = [];
    private _cache: cc.Component[] = [];

    private _componentGettingBehaviour: IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity> 
        = new BaseGettingComponentBehaviour();

    private _componentAddingBehaviour: IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity>
        = new CocosCreatorAddingComponentBehaviour(this);

    private _componentDeletingBehaviour: IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity>
        = new BaseDeletingComponentBehaviour();

    public get cache(): cc.Component[] { return this._cache; }
    public get components(): cc.Component[] { return this._components; }
    public get isActive(): boolean { return this.node.active; }
    public set isActive(value: boolean) { this.node.active = value; }

    public get componentGettingBehaviour(): IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity> { 
        return this._componentGettingBehaviour; 
    }

    public set componentGettingBehaviour(value: IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity>) { 
        this._componentGettingBehaviour = value; 
    }

    public get componentAddingBehaviour(): IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity> { 
        return this._componentAddingBehaviour; 
    }

    public set componentAddingBehaviour(value: IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity>) { 
        this._componentAddingBehaviour = value; 
    }

    public get componentDeletingBehaviour(): IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity> { 
        return this._componentDeletingBehaviour; 
    }
    
    public set componentDeletingBehaviour(value: IEntityComponentManipulationBehaviour<cc.Component, ICocosCreatorEntity>) { 
        this._componentDeletingBehaviour = value; 
    }

    onLoad() {
        const components = this.getComponents(cc.Component).filter(c => c instanceof CocosCreatorEntity ? false : true);
        this._components.push(...components);
        this._setCache(this._components);
    }

    public get<T extends cc.Component>(componentConstructor: ComponentConstructor<T>): T {
        return this._componentGettingBehaviour.execute(this, componentConstructor) as T;
    }

    public add<T extends cc.Component>(componentConstructor: ComponentConstructor<T>): T {
        return this._componentAddingBehaviour.execute(this, componentConstructor) as T;
    }

    public remove<T extends cc.Component>(componentConstructor: ComponentConstructor<T>): T {
        const component = this._componentDeletingBehaviour.execute(this, componentConstructor) as T;
        this._cache.push(component);
        return component;
    }

    private _setCache(components: cc.Component[]): void {
        const cachedComponents: cc.Component[] = components.filter(
            component => component instanceof CocosCreatorCachedComponent 
            ? component.inCache 
            : !component.enabled
        );

        cachedComponents.forEach(cachedComponent => this.remove(cachedComponent.constructor.prototype.constructor));
    }

}

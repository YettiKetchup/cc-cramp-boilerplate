import { ICrampModule, IEntity, IEntityStorage, ISystemsContainer } from "../../cramp/type-definitions/interfaces";
import ResizeModuleContainerFactory from "./containers/resize-module-container.factory";
import { CCOrientationData } from "./resize-module-definitions/resize-module.types";



export default class ResizeModule implements ICrampModule<CCOrientationData> {
    
    private _resizeContainer: ISystemsContainer<CCOrientationData> = null;

    constructor(private _entityStorage: IEntityStorage<IEntity<cc.Component>>) { }

    public init(): void {
        this._resizeContainer = new ResizeModuleContainerFactory().create(this._entityStorage);
    }

    public execute(data?: CCOrientationData): void {
        this._resizeContainer.execute(data);
    }

    public destroy(): void {}

}
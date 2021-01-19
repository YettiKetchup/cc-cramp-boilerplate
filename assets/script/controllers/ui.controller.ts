import { Storages } from "../enums/storages.enum";
import CocosCreatorEntity from "../libs/cramp-cocos-integration/integration/entity/cc.entity";
import GlobalEntitiesStorage from "../libs/cramp-cocos-integration/cramp/storage/global-entities.storage";
import { IEntity, IEntityStorage } from "../libs/cramp-cocos-integration/cramp/type-definitions/interfaces";

const {ccclass} = cc._decorator;



@ccclass
export default class UiController extends cc.Component {

    private _entityStorage: IEntityStorage<IEntity<cc.Component>> = null;

    onLoad(): void {
        const entities: CocosCreatorEntity[] = this.getComponentsInChildren(CocosCreatorEntity);
        this._entityStorage = GlobalEntitiesStorage.create(Storages.UI);
        this._entityStorage.add(...entities);
    }

    start(): void {
        
    }
    
}

import { Storages } from "../enums/storages.enum";
import CocosCreatorEntity from "../libs/cramp-cocos-integration/integration/entity/cc.entity";
import GlobalEntitiesStorage from "../libs/cramp-cocos-integration/cramp/storage/global-entities.storage";
import { IEntity, IEntityStorage } from "../libs/cramp-cocos-integration/cramp/type-definitions/interfaces";
import ComponentStateController from "../libs/cramp-cocos-integration/cramp/component-state-controller/component-state.controller";
import { CocosCreatorReplacer } from "../libs/cramp-cocos-integration/integration/component-state-controller/cc.replacer";

const {ccclass} = cc._decorator;



@ccclass
export default class GameController extends cc.Component {

    private _entityStorage: IEntityStorage<IEntity<cc.Component>> = null;

    onLoad(): void {
        ComponentStateController.Replacer = CocosCreatorReplacer;

        const entities: CocosCreatorEntity[] = this.getComponentsInChildren(CocosCreatorEntity);
        this._entityStorage = GlobalEntitiesStorage.create(Storages.GAME);
        this._entityStorage.add(...entities);
    }

    start(): void {
        
    }

}

import { Storages } from "../enums/storages.enum";
import CocosCreatorEntity from "../libs/cramp-cocos-integration/integration/entity/cc.entity";
import GlobalEntitiesStorage from "../libs/cramp-cocos-integration/cramp/storage/global-entities.storage";
import { IEntity, IEntityStorage } from "../libs/cramp-cocos-integration/cramp/type-definitions/interfaces";
import { TestContainer } from "../modules/test/test.container";

const {ccclass} = cc._decorator;



@ccclass
export default class GameController extends cc.Component {

    private _entityStorage: IEntityStorage<IEntity<cc.Component>> = null;

    onLoad(): void {
        const entities: CocosCreatorEntity[] = this.getComponentsInChildren(CocosCreatorEntity);
        this._entityStorage = GlobalEntitiesStorage.create(Storages.GAME);
        this._entityStorage.add(...entities);
    }

    start(): void {
        const tc = new TestContainer().create(this._entityStorage);
        tc.execute('Passed from root');
    }

}

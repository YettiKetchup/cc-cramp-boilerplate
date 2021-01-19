import { Storages } from "../enums/storages.enum";
import GlobalEntitiesStorage from "../libs/cramp-cocos-integration/cramp/storage/global-entities.storage";
import { IEntity, IEntityStorage, ISystemsContainer } from "../libs/cramp-cocos-integration/cramp/type-definitions/interfaces";

const {ccclass, property} = cc._decorator;



@ccclass
export default class ResizeController extends cc.Component {

    @property
    canvasElementRef: string = '#GameCanvas';
 
    @property(cc.Vec2)
    landscape: cc.Vec2 = new cc.Vec2(0, 0);
 
    @property(cc.Vec2)
    portrait: cc.Vec2 = new cc.Vec2(0, 0);

    private _canvasHTMLElement: HTMLCanvasElement = null;
    private _resizeContainer: ISystemsContainer = null;
    private _entityStorage: IEntityStorage<IEntity<cc.Component>> = null;
 
    protected onLoad() {
        this._entityStorage = GlobalEntitiesStorage.combine(
            Storages.UI_GAME_COMBINED,
            [Storages.GAME, Storages.UI]
        );
        this._canvasHTMLElement = document.querySelector(this.canvasElementRef);
        // this._resizeContainer = new OnResizeContainer().create(this._entityStorage);
    }
 
    start () {
        this._resize();
        window.addEventListener('resize', () => this._resize(), false);
    }
 
    private _resize() {
        // const { portrait, landscape } = this;
        // const { width, height } = this._canvasHTMLElement;
 
        // const orientation = this._canvasHTMLElement.width > this._canvasHTMLElement.height
        //     ? ECSScreenOrientation.LANDSCAPE
        //     : ECSScreenOrientation.PORTRAIT;
 
        // cc.view.setDesignResolutionSize(width, height, cc.ResolutionPolicy.UNKNOWN);
        // this._resizeContainer.execute({ orientation, landscape, portrait });
    }

}

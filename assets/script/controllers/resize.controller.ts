import { Storages } from "../enums/storages.enum";
import GlobalEntitiesStorage from "../libs/cramp-cocos-integration/cramp/storage/global-entities.storage";
import { IEntity, IEntityStorage } from "../libs/cramp-cocos-integration/cramp/type-definitions/interfaces";
import { CCScreenOrientation } from "../libs/cramp-cocos-integration/modules/resize-module/resize-module-definitions/resize-module.enums";
import ResizeModule from "../libs/cramp-cocos-integration/modules/resize-module/resize.module";
import aspectRatioUtility from "../libs/cramp-cocos-integration/modules/resize-module/utils/aspect-ratio.utility";

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
    private _entityStorage: IEntityStorage<IEntity<cc.Component>> = null;
    private _resizeModule: ResizeModule = null;
 
    protected onLoad() {
        this._canvasHTMLElement = document.querySelector(this.canvasElementRef);
        this._entityStorage = GlobalEntitiesStorage.combine(
            Storages.UI_GAME_COMBINED,
            [Storages.GAME, Storages.UI]
        );
        
        this._resizeModule = new ResizeModule(this._entityStorage);
        this._resizeModule.init();
    }
 
    start () {
        this._resize();
        window.addEventListener('resize', () => this._resize(), false);
    }
 
    private _resize() {
        const { portrait, landscape } = this;
        const { width, height } = this._canvasHTMLElement;
        const aspectRatio = aspectRatioUtility(width, height);
 
        const orientation = this._canvasHTMLElement.width > this._canvasHTMLElement.height
            ? CCScreenOrientation.LANDSCAPE
            : CCScreenOrientation.PORTRAIT;
 
        cc.view.setDesignResolutionSize(width, height, cc.ResolutionPolicy.UNKNOWN);
        this._resizeModule.execute({orientation, landscape, portrait, aspectRatio});
    }

}

import ComponentStateController from "../libs/cramp-cocos-integration/cramp/component-state-controller/component-state.controller";
import { CocosCreatorReplacer } from "../libs/cramp-cocos-integration/integration/component-state-controller/cc.replacer";

const {ccclass, property} = cc._decorator;



@ccclass
export default class PreInitializeController extends cc.Component {

    @property()
    public physicsEnabled: boolean = false;

    @property()
    public physicsDebugDrawFlags: boolean = false;

    @property(cc.Vec2)
    public gravity: cc.Vec2 = new cc.Vec2(0, 0);

    @property()
    public collisionsEnabled: boolean = false;

    @property()
    public collisionsDebugDraw: boolean = false;

    @property()
    public collisionsDrawBoundingBox: boolean = false;

    onLoad () {
        ComponentStateController.Replacer = CocosCreatorReplacer;

        this._setupPhysics();
        this._setupCollisions();
    }

    private _setupPhysics(): void {
        const physycsManager = cc.director.getPhysicsManager();
        physycsManager.enabled = this.physicsEnabled;
        physycsManager.debugDrawFlags = this.physicsDebugDrawFlags ? 1 : 0;
        physycsManager.gravity = this.gravity;
    }

    private _setupCollisions(): void {
        const collisionManager: cc.CollisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = this.collisionsEnabled;
        collisionManager.enabledDebugDraw = this.collisionsDebugDraw;
        collisionManager.enabledDrawBoundingBox = this.collisionsDrawBoundingBox;
    }

}

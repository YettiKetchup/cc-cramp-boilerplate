import { ICachedObject } from "../../cramp/type-definitions/interfaces";

const {ccclass, property} = cc._decorator;



@ccclass
export default class CocosCreatorCachedComponent extends cc.Component implements ICachedObject {
    
    @property()
    inCache: boolean = false;

}

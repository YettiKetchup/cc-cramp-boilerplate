import { IEntityController, INodeEntity } from "../cramp/type-definitions/interfaces";

export interface ICocosCreatorEntity extends INodeEntity<cc.Component, cc.Node>, 
                                             IEntityController<cc.Component> {
    cache: cc.Component[];
}
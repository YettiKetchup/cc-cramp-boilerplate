import { ICocosCreatorEntity } from "../../libs/cramp-cocos-integration/types/cc-intergration.interfaces";
import { CrampSystem } from "../bindings";



export class TestSystem extends CrampSystem<string> {
    public execute(entities: ICocosCreatorEntity[], data?: string): void | Promise<any> {
        for(let i = 0; i < entities.length; i++) {
            console.log(entities);
        }
    }
}
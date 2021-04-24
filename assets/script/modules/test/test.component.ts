import { CrampCachedComponent } from "../bindings";

const {ccclass, property} = cc._decorator;



@ccclass
export default class TestComponent extends CrampCachedComponent {

    @property()
    public valie: string = '';

}

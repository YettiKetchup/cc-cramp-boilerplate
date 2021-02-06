import { IEntityFactory } from '../libs/cramp-cocos-integration/cramp/type-definitions/interfaces';
import CocosCreatorCachedComponent from '../libs/cramp-cocos-integration/integration/component/cc.cached.component';
import CocosCreatorEntity from '../libs/cramp-cocos-integration/integration/entity/cc.entity';
import CocosCreatorSystem from '../libs/cramp-cocos-integration/integration/system/cc.system';



export class            CrampComponent          extends     cc.Component {};
export class            CrampCachedComponent    extends     CocosCreatorCachedComponent {};
export class            CrampNode               extends     cc.Node {};
export abstract class   CrampSystem<TData>      extends     CocosCreatorSystem<TData> {};
export class            CrampEntity             extends     CocosCreatorEntity {};

export abstract class   CrampEntityFactory<TData>      implements   IEntityFactory<CrampComponent, CrampEntity, TData> {
    public abstract create(id: string, data?: TData): CrampEntity;
}
import { ComponentStateReplacer } from "../../cramp/type-definitions/types";



export const CocosCreatorReplacer: ComponentStateReplacer = (key: string, value: string) => {
    if(key === 'node' || key === 'inCache' || key.indexOf('_') === 0) return undefined;
    return value;
};
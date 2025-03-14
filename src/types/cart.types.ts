import { IModelExecution } from './model.types';
import { IBase } from './root.types';
import { IUser } from './user.types';

export interface ICart extends IBase {
    user: IUser; 
    models: IModelExecution[];
    is_current: boolean;
}
export type TypeCartRequest = Omit<ICart, 'id'>;
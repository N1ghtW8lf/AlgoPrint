import { IBase } from './root.types';
import { ICart } from './cart.types';
import { IModelExecution } from './modelExecution.types';

export interface IModelInCart extends IBase {
    cart: ICart;
    model: IModelExecution;
    quantity: number;
}
import { IBase } from './root.types';
import { ICart } from './cart.types';

export interface IOrder extends IBase {
    cart: ICart;
    status: 'Succeeded' | 'Ready' | 'Accepted' | 'Awaiting payment' | 'Pending' | 'Canceled';
    comment: string;
    created_at: string;
    updated_at: string;
}
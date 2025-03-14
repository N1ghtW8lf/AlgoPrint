import { IBase } from './root.types';
import { ICart } from './cart.types';

export enum EnumOrderStatus {
    "SUCCEEDED" = "Succeeded",
    "READY" = "Ready",
    "ACCEPTED" = "Accepted",
    "AWAITING_PAYMENT" = "Awaiting payment",
    "PENDING" = "Pending",
    "CANCELED" = "Canceled"
}

export interface IOrder extends IBase {
    cart: ICart;
    status: keyof typeof EnumOrderStatus;
    comment: string;
    created_at: Date;
    updated_at: Date;
}
export type TypeOrderRequest = Omit<IOrder, 'id'>[];
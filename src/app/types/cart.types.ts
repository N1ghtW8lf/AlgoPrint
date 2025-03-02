import { IBase } from './root.types';

export interface ICart extends IBase {
    user: number; // Assuming user ID
    is_current: boolean;
}
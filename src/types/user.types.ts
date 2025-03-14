import { IBase } from "./root.types";

export interface IUser extends IBase {
    first_name: string;
    last_name: string;
    email: string;    
}
export type TypeUserRequest = Omit<IUser, 'id'>;
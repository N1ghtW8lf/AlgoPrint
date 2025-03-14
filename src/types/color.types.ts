import { IBase } from "./root.types";

export interface IColor extends IBase {
    name: string;
    hex: string;
}
export type TypeColorRequest = Omit<IColor, 'id'>;
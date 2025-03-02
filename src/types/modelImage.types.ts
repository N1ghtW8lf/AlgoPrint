import { IModel } from "./model.types";
import { IBase } from "./root.types";

export interface IModelImage extends IBase {
    model: IModel,
    path: string
}
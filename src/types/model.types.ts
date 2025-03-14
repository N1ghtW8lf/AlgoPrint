import { IMaterial } from './material.types';
import { IBase } from './root.types'

export enum EnumMaterialType {
    "CUSTOM" = "Custom",
    "STORE" = "Store"
}

export enum EnumModelQuality {
    "BETTER" = "Better",
    "MEDIUM" = "Medium",
    "LOWER" = "Lower"
}

export interface IModel extends IBase {
    name: string,
    desciption: string,
    stl_file: string,
    images: string[],
    type: keyof typeof EnumMaterialType
}
export type TypeModelRequest = Omit<IModel, 'id'>;

export interface IModelExecution extends IBase {
    model: IModel,
    material: IMaterial,
    quality: keyof typeof EnumModelQuality,
    gcode_file: string,
    price: number,
    is_active: boolean,
    filament_used: number,
}
export type TypeModelExecutionRequest = Omit<IModelExecution, 'id'>;
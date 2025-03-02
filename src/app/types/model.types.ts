import { IBase } from './root.types'

export interface IModel extends IBase {
    name: string,
    desciption: string,
    stl_file: File,
    type: string,
}

export interface IModelExecution extends IBase {
    model: IModel,
    material: IMaterial,
    quality: string,
    gcode_file: File,
    price: number,
    is_active: boolean,
    filament_used: number,
}
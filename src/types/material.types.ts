import { IBase } from './root.types'
import { IPlastic } from './plastic.types'
import { IColor } from './color.types'

export interface IMaterial extends IBase {
    name: string,
    color: IColor,
    image: string,
    amount: number,
    plastic: IPlastic
}
export type TypeMaterialRequest = Omit<IMaterial, 'id'>;
import { IBase } from './root.types'

export interface IPlastic extends IBase {
    name: string
}
export type TypePlasticRequest = Omit<IPlastic, 'id'>;
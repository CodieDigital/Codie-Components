import { ReactNode } from 'react'
import { IConfigs } from '../../contexts/configs'

export interface IScripts {
  children: ReactNode
  informations?: IConfigs
}

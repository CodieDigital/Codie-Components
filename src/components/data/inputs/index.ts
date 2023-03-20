import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import { YupValidation as validator } from '../../../utils/yup-validation'

interface StateForm {
  state: 'error' | 'loading' | 'send' | 'default'
  message?: string
}

import { InputMask } from './input'
import { SelectComponent } from './select'
import { TextAreaComponent } from './textarea'

export { Form, validator, TextAreaComponent, SelectComponent, InputMask }

export type { FormHandles, StateForm }

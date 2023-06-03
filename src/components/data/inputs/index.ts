import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import { YupValidation as validator } from '../../../utils/yup-validation'

interface StateForm {
  state: 'error' | 'loading' | 'send' | 'default'
  message?: string
}
import { InputComponent } from './input'
import { InputMask } from './input-mask'
import { SelectComponent } from './select'
import { TextAreaComponent } from './textarea'

export { Form, validator, InputMask, InputComponent, TextAreaComponent, SelectComponent }

export type { FormHandles, StateForm }

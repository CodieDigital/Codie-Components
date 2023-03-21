import React, { useRef, useState } from 'react'

import { AnyObject } from 'yup/lib/types'
import ReCAPTCHA from 'react-google-recaptcha'
import { RequiredStringSchema } from 'yup/lib/string'

import { ButtonProps, ButtonComponent } from '../button'
import { Form, FormHandles, StateForm, validator } from '../inputs'
import { generateSchemasByDemand, IDefaultSchemas } from './generate-schemas'

import * as S from './styles'

interface IFormHandler {
  recaptcha?: {
    key?: string
    active?: boolean
  }
  button: ButtonProps
  children: React.ReactNode
  onSucess: (data: any) => void
  onError?: (err: unknown) => void
  defaultSchemas?: IDefaultSchemas
  personalSchema?: {
    [key: string]: RequiredStringSchema<string | undefined, AnyObject>
  }
}

export function FormHandler({
  button,
  onError,
  onSucess,
  children,
  recaptcha,
  defaultSchemas,
  personalSchema,
}: IFormHandler) {
  const [stateForm, setStateForm] = useState<StateForm>({ state: 'default' })
  const [enable, setEnable] = useState(false)

  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(data: any) {
    if (!enable) {
      return
    }

    const yup = await import('yup')

    try {
      setStateForm({ state: 'loading' })

      const allDefaultSchemas = await generateSchemasByDemand(defaultSchemas)

      const schemaObject = {
        ...allDefaultSchemas,
        ...personalSchema,
      }

      const schema = yup.object().shape(schemaObject)

      await schema.validate(data, {
        abortEarly: false,
      })

      formRef.current?.setErrors({})

      await onSucess(data)

      setStateForm({ state: 'send', message: '' })
    } catch (err) {
      if (onError) {
        onError(err)
      }

      const yupError = err instanceof yup.ValidationError

      if (err && !yupError && typeof err === 'string') {
        setStateForm({ state: 'error', message: err })

        return
      }

      validator(yup, err, formRef)

      setStateForm({ state: 'default' })
    }
  }

  return (
    <S.FormHandler>
      <Form ref={formRef} onSubmit={handleSubmit}>
        {stateForm.state === 'error' && <span className='errorForm paragraph-5-bold'>{stateForm.message}</span>}

        {children}

        <div className='actions'>
          {recaptcha?.active && (
            <ReCAPTCHA
              size='normal'
              className='captcha'
              onChange={() => setEnable(true)}
              sitekey={recaptcha.key ? recaptcha.key : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
            />
          )}

          <ButtonComponent {...button} loading={stateForm.state === 'loading'} checked={enable} />
        </div>
      </Form>
    </S.FormHandler>
  )
}

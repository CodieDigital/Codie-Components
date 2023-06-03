import React from 'react'
import { useRef, useState } from 'react'
import router from 'next/router'

import { AxiosInstance } from 'axios'

import { Form, FormHandles, InputComponent, InputMask, validator } from '../../../data/inputs'
import { LoaderCircle } from '../../../data'
import { StateForm } from '../interfaces'

import * as S from './styles'

interface NewsLetterBlog {
  api: AxiosInstance
  hasPhone?: boolean
}

export function NewsLetterBlog({ api, hasPhone }: NewsLetterBlog) {
  const [stateForm, setStateForm] = useState<StateForm>({
    state: 'default',
    message: '',
  })

  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(data: { email: string; phone?: string }) {
    const Yup = await import('yup')

    try {
      setStateForm({ state: 'loading' })

      const schema = Yup.object().shape({
        email: Yup.string().required('Por favor, digite um email').email('Por favor, digite um email válido'),
        phone: Yup.string().required('Por favor insira seu telefone').min(11, 'Favor inserir um número válido'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      formRef.current?.setErrors({})

      const response = await api.post('/newsletter', data)

      if (response.status === 200) {
        router.push({
          pathname: '/contato/sucesso',
        })
      }

      setStateForm({ state: 'send' })

      formRef.current?.clearField('email')
    } catch (errors: any) {
      const yupError = errors instanceof Yup.ValidationError

      if (errors && !yupError && typeof errors === 'string') {
        setStateForm({ state: 'error', message: errors })
        return
      }

      setStateForm({ state: 'default' })

      validator(Yup, errors, formRef)
    }
  }

  return (
    <S.Newsletter>
      <div className='side-box newsletter'>
        <h4>Newsletter</h4>

        <p>Cadastre-se para receber lançamentos e notícias</p>

        <Form ref={formRef} onSubmit={handleSubmit}>
          {stateForm.state === 'send' && <span className='email-send paragraph'>Email enviado com sucesso!</span>}

          <InputComponent configs={{ type: 'email', name: 'email', placeholder: 'digite seu e-mail' }} />

          {hasPhone && (
            <InputMask
              configs={{ name: 'phone', placeholder: '(DDD) 9 9999-9999', mask: '(99) 9 9999-9999', id: 'phone' }}
            />
          )}

          <button type='submit'>{stateForm.state === 'loading' ? <LoaderCircle size={25} /> : 'Cadastrar'}</button>
        </Form>
      </div>
    </S.Newsletter>
  )
}

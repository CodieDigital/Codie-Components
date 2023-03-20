import React from 'react'

import { useRef, useState } from 'react'

import * as S from './styles'
import { Form, FormHandles, InputMask, validator } from '../../../data/inputs'
import { LoaderCircle } from '../../../data'
import { StateForm } from '../interfaces'
import { AxiosInstance } from 'axios'

interface NewsLetterBlog {
  api: AxiosInstance
}

export function NewsLetterBlog({ api }: NewsLetterBlog) {
  const [stateForm, setStateForm] = useState<StateForm>({
    state: 'default',
    message: '',
  })

  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(data: { email: string }) {
    const Yup = await import('yup')

    try {
      setStateForm({ state: 'loading' })

      const schema = Yup.object().shape({
        email: Yup.string().required('Por favor, digite um email').email('Por favor, digite um email válido'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      formRef.current?.setErrors({})

      await api.post('/newsletter', data)

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

          <InputMask name='email' type={'email'} placeholder='digite seu e-mail' mask={''} />

          <button type='submit'>{stateForm.state === 'loading' ? <LoaderCircle size={25} /> : 'Cadastrar'}</button>
        </Form>
      </div>
    </S.Newsletter>
  )
}

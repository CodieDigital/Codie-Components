import React from 'react'
import router from 'next/router'

import { AxiosInstance } from 'axios'

import { Container } from '../../data'
import { ButtonProps } from '../../data/button'
import { BoxContact, IBoxContact } from '../../data/box-contact'
import { IDefaultSchemas } from '../../data/form-handler/generate-schemas'
import { CardContactLink, CardContactProps } from '../../cards/card-contact-link'

import * as S from './styles'

interface IContact {
  type?: 1 | 2 | 3 | 4 | 5
  configs: IBoxContact
  buttonProps: ButtonProps
  defaultSchemas?: IDefaultSchemas
  recaptcha?: {
    key?: string
    active?: boolean
  }
  contactList?: CardContactProps[]
  api: AxiosInstance
}

interface SubmitProps {
  name: string
  email: string
  message: string
  phone: string
}

export function Contact({ api, type, configs, recaptcha, contactList, buttonProps, defaultSchemas }: IContact) {
  async function handleSucess(data: SubmitProps) {
    const response = await api.post('form', data)

    if (response.status === 200) {
      router.push({ pathname: '/contato/sucesso', query: data.name })
    }
  }

  return (
    <S.Contact $type={type}>
      <Container>
        <div className='box-content'>
          <div className='box-title'>
            <h2 className='title-2 title uppercase'>Entre em contato</h2>

            <p className='paragraph-2 subtitle'>
              Preencha o formulário ao lado e entraremos em contato com você ou entre em contato conosco pelas
              informações abaixo.
            </p>
          </div>

          {contactList && (
            <ul className='contact-list'>
              {contactList.map((link, index) => (
                <li key={link.adress + index}>
                  <CardContactLink card={link} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <BoxContact
          type={type}
          onSucess={handleSucess}
          configs={configs}
          buttonProps={buttonProps}
          defaultSchemas={defaultSchemas}
          recaptcha={recaptcha}
        />
      </Container>
    </S.Contact>
  )
}

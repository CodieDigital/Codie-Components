import React from 'react'
import router from 'next/router'

import { AxiosInstance } from 'axios'

import { Container } from '../../data'
import { ButtonProps } from '../../data/button'
import { BoxContact, IBoxContact } from '../../data/box-contact'
import { IDefaultSchemas } from '../../data/form-handler/generate-schemas'
import { CardContactLink, CardContactProps, IContactLinkConfigs } from '../../cards/card-contact-link'

import * as S from './styles'

interface IContact {
  type?: 1 | 2 | 3 | 4 | 5
  api: AxiosInstance
  configs: IBoxContact
  buttonProps: ButtonProps
  fontClasses?: IFontClasses
  contactList?: CardContactProps[]
  defaultSchemas?: IDefaultSchemas
  contactLinkConfigs?: IContactLinkConfigs
  recaptcha?: {
    key?: string
    active?: boolean
  }
}

interface IFontClasses {
  link?: string
  title?: string
  subtitle?: string
}

interface SubmitProps {
  name: string
  email: string
  phone: string
  message: string
}

export function Contact({
  api,
  type,
  configs,
  recaptcha,
  fontClasses,
  contactList,
  buttonProps,
  defaultSchemas,
  contactLinkConfigs,
}: IContact) {
  async function handleSucess(data: SubmitProps) {
    const response = await api.post('form', data)

    if (response.status === 200) {
      router.push({ pathname: '/contato/sucesso', query: data.name })
    }
  }

  return (
    <S.Contact id='contato' className='contact-section' $type={type}>
      <Container>
        <div className='box-content'>
          <div className='box-title'>
            <h2 className={`${fontClasses?.title ? fontClasses.title : 'title-2'} title uppercase`}>
              Entre em contato
            </h2>

            <p className={`${fontClasses?.subtitle ? fontClasses.subtitle : 'paragraph-2'} subtitle`}>
              Preencha o formulário ao lado e entraremos em contato com você ou entre em contato conosco pelas
              informações abaixo.
            </p>
          </div>

          {contactList && (
            <ul className='contact-list'>
              {contactList.map((link, index) => (
                <li key={link.adress + index}>
                  <CardContactLink
                    card={link}
                    cardConfigs={{
                      color: contactLinkConfigs?.color,
                      hoverColor: contactLinkConfigs?.hoverColor,
                      fontClass: contactLinkConfigs?.fontClass,
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        <BoxContact
          type={type}
          configs={configs}
          recaptcha={recaptcha}
          onSucess={handleSucess}
          buttonProps={buttonProps}
          defaultSchemas={defaultSchemas}
        />
      </Container>
    </S.Contact>
  )
}

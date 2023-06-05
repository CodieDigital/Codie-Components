import React from 'react'
import router from 'next/router'

import { AxiosInstance } from 'axios'

import { Container } from '../../data'
import { ButtonProps } from '../../data/button'
import { BoxContact, IBoxContact, ILabelTexts, IPlaceholderTexts } from '../../data/box-contact'
import { IDefaultSchemas } from '../../data/form-handler/generate-schemas'
import { CardContactLink, CardContactProps, IContactLinkConfigs } from '../../cards/card-contact-link'

import * as S from './styles'

interface IContact {
  type?: 1 | 2 | 3 | 4 | 5
  api: AxiosInstance
  configs: IBoxContact
  labelTexts?: ILabelTexts
  placeholderTexts?: IPlaceholderTexts
  buttonProps: ButtonProps
  fontProps?: IFontProps
  contactList?: CardContactProps[]
  defaultSchemas?: IDefaultSchemas
  contactLinkConfigs?: IContactLinkConfigs
  recaptcha?: {
    key?: string
    active?: boolean
  }
}

interface IFontProps {
  link?: string
  title?: string
  subtitle?: string
  titleColor?: string
}

interface SubmitProps {
  name: string
  email: string
  phone: string
  select: string
  message: string
}

export function Contact({
  api,
  type,
  configs,
  recaptcha,
  fontProps,
  labelTexts,
  contactList,
  buttonProps,
  defaultSchemas,
  placeholderTexts,
  contactLinkConfigs,
}: IContact) {
  async function handleSucess(data: SubmitProps) {
    const response = await api.post('form', data)

    if (response.status === 200) {
      router.push({ pathname: '/contato/sucesso', query: data.name })
    }
  }

  return (
    <S.Contact
      id='contato'
      className='contact-section'
      $type={type}
      $isPage={configs.isPage}
      $titleColor={fontProps?.titleColor}
    >
      <Container>
        <div className='box-content'>
          <div className='box-title'>
            <h2 className={`${fontProps?.title ? fontProps.title : 'title-2'} title`}>Entre em contato</h2>

            <p className={`${fontProps?.subtitle ? fontProps.subtitle : 'paragraph-2'} subtitle`}>
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
                      svgProps: contactLinkConfigs?.svgProps,
                      fontClass: contactLinkConfigs?.fontClass,
                      hoverColor: contactLinkConfigs?.hoverColor,
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
          labelTexts={labelTexts}
          onSucess={handleSucess}
          buttonProps={buttonProps}
          titleFont={fontProps?.title}
          defaultSchemas={defaultSchemas}
          titleColor={fontProps?.titleColor}
          placeholderTexts={placeholderTexts}
        />
      </Container>
    </S.Contact>
  )
}

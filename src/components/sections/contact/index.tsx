import React from 'react'
// import { contactList } from 'src/localData/data';
// import { CardContactLink } from 'components/cards/card-contact-link';

import { BoxContact, IBoxContact } from '../../data/box-contact'
import { ButtonProps } from '../../data/button'
import { IDefaultSchemas } from '../../data/form-handler/generate-schemas'

import * as S from './styles'
import { Container } from '../../data'
import { CardContactLink, CardContactProps } from '../../cards/card-contact-link'

interface IContact {
  type?: 1 | 2 | 3 | 4 | 5
  configs: IBoxContact
  buttonProps: ButtonProps
  defaultSchemas?: IDefaultSchemas
  recaptcha?: {
    key?: string
    active?: boolean
  }
  onSucess: (data: any) => void
  contactList?: CardContactProps[]
}

export function Contact({ type, configs, onSucess, recaptcha, contactList, buttonProps, defaultSchemas }: IContact) {
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
          onSucess={onSucess}
          configs={configs}
          buttonProps={buttonProps}
          defaultSchemas={defaultSchemas}
          recaptcha={recaptcha}
        />
      </Container>
    </S.Contact>
  )
}

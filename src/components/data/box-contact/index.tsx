import React from 'react'

import { ButtonProps } from '../button'
import { IDefaultSchemas } from '../form-handler/generate-schemas'
import { FormHandler } from '../form-handler'
import { InputComponent, InputMask, TextAreaComponent } from '../inputs'

import * as S from './styles'

interface BoxContactProps {
  configs: IBoxContact
  buttonProps: ButtonProps
  defaultSchemas?: IDefaultSchemas
  recaptcha?: {
    key?: string
    active?: boolean
  }
  onSucess: (data: any) => void
  type?: 1 | 2 | 3 | 4 | 5
}

export interface IBoxContact {
  hasBar?: boolean
  hasBorder?: boolean
  borderWithBar?: boolean
  fontSizeFamilyLabel?: string
  fontSizeFamilyInput?: string
}

export function BoxContact({ type, configs, onSucess, recaptcha, buttonProps, defaultSchemas }: BoxContactProps) {
  return (
    <S.BoxContact id='box-contact' $type={type}>
      {(type === 2 || type === 4 || type === 5) && <h2 className='title-2 title uppercase'>Entre em contato</h2>}

      <FormHandler button={buttonProps} onSucess={onSucess} defaultSchemas={defaultSchemas} recaptcha={recaptcha}>
        <InputComponent
          configs={{
            name: 'name',
            type: 'text',
            label: 'Nome',
            placeholder: 'Digite seu nome completo aqui',
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
            hasBar: configs.hasBar,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
          }}
        />

        <InputComponent
          configs={{
            name: 'email',
            type: 'email',
            label: 'E-mail',
            placeholder: 'Digite seu e-mail aqui',
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
            hasBar: configs.hasBar,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
          }}
        />

        <InputMask
          configs={{
            id: 'phone',
            mask: '(99) 9 9999-9999',
            name: 'phone',
            label: 'Telefone',
            placeholder: '(DDD) 9 9999-9999',
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
            hasBar: configs.hasBar,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
          }}
        />

        <TextAreaComponent
          configs={{
            id: 'message',
            name: 'message',
            label: 'Mensagem',
            placeholder: 'O que deseja dizer?',
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
            hasBar: configs.hasBar,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
          }}
        />
      </FormHandler>
    </S.BoxContact>
  )
}

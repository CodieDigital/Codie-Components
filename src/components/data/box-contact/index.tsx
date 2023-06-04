import React from 'react'

import { ButtonProps } from '../button'
import { FormHandler } from '../form-handler'
import { IDefaultSchemas } from '../form-handler/generate-schemas'
import { InputComponent, InputMask, TextAreaComponent } from '../inputs'

import * as S from './styles'

interface BoxContactProps {
  type?: 1 | 2 | 3 | 4 | 5
  configs: IBoxContact
  buttonProps: ButtonProps
  defaultSchemas?: IDefaultSchemas
  onSucess: (data: any) => void
  recaptcha?: {
    key?: string
    active?: boolean
  }
}

export interface IBoxContact {
  hasBar?: boolean
  inputBg?: string
  titleFont?: string
  hasBorder?: boolean
  inputBoxShadow?: string
  borderWithBar?: boolean
  fontSizeFamilyLabel?: string
  fontSizeFamilyInput?: string
}

export function BoxContact({ type, configs, onSucess, recaptcha, buttonProps, defaultSchemas }: BoxContactProps) {
  return (
    <S.BoxContact id='box-contact' $type={type}>
      {(type === 2 || type === 4 || type === 5) && (
        <h2 className={`${configs.titleFont ? configs.titleFont : 'title-2'} title uppercase`}>Entre em contato</h2>
      )}

      <FormHandler button={buttonProps} onSucess={onSucess} defaultSchemas={defaultSchemas} recaptcha={recaptcha}>
        <InputComponent
          configs={{
            name: 'name',
            type: 'text',
            label: 'Nome',
            placeholder: 'Digite seu nome completo aqui',
            hasBar: configs.hasBar,
            inputBg: configs.inputBg,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
            inputBoxShadow: configs.inputBoxShadow,
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
          }}
        />

        <InputComponent
          configs={{
            name: 'email',
            type: 'email',
            label: 'E-mail',
            placeholder: 'Digite seu e-mail aqui',
            hasBar: configs.hasBar,
            inputBg: configs.inputBg,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
            inputBoxShadow: configs.inputBoxShadow,
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
          }}
        />

        <InputMask
          configs={{
            id: 'phone',
            mask: '(99) 9 9999-9999',
            name: 'phone',
            label: 'Telefone',
            placeholder: '(DDD) 9 9999-9999',
            hasBar: configs.hasBar,
            inputBg: configs.inputBg,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
            inputBoxShadow: configs.inputBoxShadow,
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
          }}
        />

        <TextAreaComponent
          configs={{
            id: 'message',
            name: 'message',
            label: 'Mensagem',
            placeholder: 'O que deseja dizer?',
            hasBar: configs.hasBar,
            inputBg: configs.inputBg,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
            inputBoxShadow: configs.inputBoxShadow,
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
          }}
        />
      </FormHandler>
    </S.BoxContact>
  )
}

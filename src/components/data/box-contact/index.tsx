import React from 'react'

import { ButtonProps } from '../button'
import { FormHandler } from '../form-handler'
import { IDefaultSchemas } from '../form-handler/generate-schemas'
import { InputComponent, InputMask, SelectComponent, TextAreaComponent } from '../inputs'

import * as S from './styles'
import { IOption } from '../inputs/select'

interface BoxContactProps {
  type?: 1 | 2 | 3 | 4 | 5
  configs: IBoxContact
  labelTexts?: ILabelTexts
  placeholderTexts?: IPlaceholderTexts
  buttonProps: ButtonProps
  titleFont?: string
  titleColor?: string
  defaultSchemas?: IDefaultSchemas
  onSucess: (data: any) => void
  recaptcha?: {
    key?: string
    active?: boolean
  }
}

export interface ILabelTexts {
  name?: string | JSX.Element
  email?: string | JSX.Element
  phone?: string | JSX.Element
  select?: string | JSX.Element
  message?: string | JSX.Element
}

export interface IPlaceholderTexts {
  name?: string
  email?: string
  phone?: string
  select?: string
  message?: string
}

export interface IBoxContact {
  hasBar?: boolean
  inputBg?: string
  isPage?: boolean
  isFlex?: boolean
  hasSelect?: boolean
  selectOptions?: IOption[]
  hasBorder?: boolean
  inputBoxShadow?: string
  borderWithBar?: boolean
  fontSizeFamilyLabel?: string
  fontSizeFamilyInput?: string
  placeholderText?: string
}

export function BoxContact({
  type,
  configs,
  onSucess,
  titleFont,
  recaptcha,
  titleColor,
  labelTexts,
  buttonProps,
  defaultSchemas,
  placeholderTexts,
}: BoxContactProps) {
  return (
    <S.BoxContact id='box-contact' $type={type} $titleColor={titleColor}>
      {(type === 2 || type === 4 || type === 5) && (
        <h2 className={`${titleFont ? titleFont : 'title-2'} title`}>Entre em contato</h2>
      )}

      <FormHandler button={buttonProps} onSucess={onSucess} defaultSchemas={defaultSchemas} recaptcha={recaptcha}>
        <InputComponent
          configs={{
            name: 'name',
            type: 'text',
            label: labelTexts?.name ? labelTexts.name : 'Nome',
            placeholder: placeholderTexts?.name ? placeholderTexts?.name : 'Digite seu nome completo aqui',
            hasBar: configs.hasBar,
            isFlex: configs.isFlex,
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
            label: labelTexts?.email ? labelTexts?.email : 'E-mail',
            placeholder: placeholderTexts?.email ? placeholderTexts.email : 'Digite seu e-mail aqui',
            hasBar: configs.hasBar,
            isFlex: configs.isFlex,
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
            label: labelTexts?.phone ? labelTexts.phone : 'Telefone',
            placeholder: placeholderTexts?.phone ? placeholderTexts.phone : '(DDD) 9 9999-9999',
            hasBar: configs.hasBar,
            isFlex: configs.isFlex,
            inputBg: configs.inputBg,
            hasBorder: configs.hasBorder,
            borderWithBar: configs.borderWithBar,
            inputBoxShadow: configs.inputBoxShadow,
            fontSizeFamilyInput: configs.fontSizeFamilyInput,
            fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
          }}
        />

        {configs.hasSelect && (
          <SelectComponent
            configs={{
              name: 'select',
              label: labelTexts?.select ? labelTexts.select : 'Selecione uma opção',
              hasBar: configs.hasBar,
              isFlex: configs.isFlex,
              inputBg: configs.inputBg,
              hasBorder: configs.hasBorder,
              borderWithBar: configs.borderWithBar,
              optionsSelect: configs.selectOptions!,
              inputBoxShadow: configs.inputBoxShadow,
              fontSizeFamilyInput: configs.fontSizeFamilyInput,
              fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
            }}
          />
        )}

        <TextAreaComponent
          configs={{
            id: 'message',
            name: 'message',
            label: labelTexts?.message ? labelTexts.message : 'Mensagem',
            placeholder: placeholderTexts?.message ? placeholderTexts.message : 'O que deseja dizer?',
            hasBar: configs.hasBar,
            isFlex: configs.isFlex,
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

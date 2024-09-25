import type { CustomInputEvent, CustomInputEventHandler } from '../core';

export interface NumberFormatEventDetail {
  value: string;
  number: number;
}

export type NumberFormatEvent = CustomInputEvent<NumberFormatEventDetail>;

export type NumberFormatEventHandler = CustomInputEventHandler<NumberFormatEvent>;

type ResolveOptions<T extends Record<string, any>> = Pick<
  T,
  | 'currency'
  | 'currencyDisplay'
  | 'unit'
  | 'unitDisplay'
  | 'signDisplay'
  | 'minimumIntegerDigits'
  | 'minimumFractionDigits'
  | 'maximumFractionDigits'
>;

interface IncludedOptions {
  format?: Intl.NumberFormatOptions['style'];
  groupDisplay?: Intl.NumberFormatOptions['useGrouping'];
  maximumIntegerDigits?: number;
}

export type NumberFormatOptions = ResolveOptions<Intl.NumberFormatOptions> & IncludedOptions;

export type ResolvedNumberFormatOptions = ResolveOptions<Intl.ResolvedNumberFormatOptions> & Required<IncludedOptions>;

export interface LocalizedNumberFormatValues {
  signBackwards: boolean;
  minusSign: string;
  decimal: string;
  digits: string;
}

export interface NumberFormatProps extends NumberFormatOptions {
  locales?: string | string[];
  onNumberFormat?: NumberFormatEventHandler;
}

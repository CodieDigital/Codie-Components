import Link from 'next/link'

import styled from 'styled-components'

import { IButtonStyles } from './interfaces'

export const Button = styled(Link)<IButtonStyles>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : '24px')};
  background-size: 300%;
  background-position: left;
  transition: all 0.4s ease-in-out;
  color: ${({ $hasBg }) => ($hasBg ? '#fff' : 'var(--button-color)')};
  border: ${({ $hasBg }) => ($hasBg ? 'none' : '2px solid var(--button-color)')};
  background-image: ${({ $hasBg }) =>
    $hasBg && `linear-gradient(99deg, #c78c21 0%, #dcb351 33%, #c0851d 67%, #dcb251 100%)`};

  &:hover {
    background-position: right;
    background-color: ${({ $hasBg }) => !$hasBg && 'var(--button-color)'};
    color: #000;
    fill: #000;
  }

  @media only screen and (max-width: 1600px) {
    height: 46px;
  }

  @media only screen and (max-width: 1400px) {
    height: 42px;
  }

  @media only screen and (max-width: 1200px) {
    height: 40px;
  }

  @media only screen and (max-width: 1024px) {
    height: 38px;
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    height: 36px;
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    height: 34px;
  }

  @media only screen and (max-width: 390px) {
  }
`

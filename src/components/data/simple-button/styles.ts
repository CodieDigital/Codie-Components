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
  color: ${({ $hasBg }) => ($hasBg ? 'var(--button-color-bg)' : 'var(--button-color-no-bg)')};
  border: ${({ $hasBg }) => ($hasBg ? 'none' : '2px solid var(--bt-linear-gradient-1)')};
  background-image: ${({ $hasBg }) =>
    $hasBg &&
    `linear-gradient(99deg, var(--bt-linear-gradient-1) 0%, var(--bt-linear-gradient-2) 33%, var(--bt-linear-gradient-1) 67%, var(--bt-linear-gradient-2))`};

  &:hover {
    background-position: right;
    background-color: ${({ $hasBg }) => !$hasBg && 'var(--bt-linear-gradient-1)'};
    color: ${({ $hasBg }) => ($hasBg ? 'var(--button-color-bg-hover)' : 'var(--button-color-no-bg-hover)')};
    fill: var(--button-hover-color);
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

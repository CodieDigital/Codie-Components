import styled from 'styled-components'

import { IBoxSocialsStyles } from './interfaces'

export const BoxSocials = styled.div<IBoxSocialsStyles>`
  display: flex;
  gap: ${({ $boxGap }) => ($boxGap ? $boxGap : '12px')};
  width: 100%;

  .link-redes {
    background-color: ${({ $bgColor }) => $bgColor && $bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: ${({ $svgWidth }) => ($svgWidth ? $svgWidth : '25px')};
    height: ${({ $svgWidth }) => ($svgWidth ? $svgWidth : '25px')};
    padding: ${({ $padding }) => ($padding ? $padding : 0)};
    aspect-ratio: 1;
    transition: 0.5s;

    svg {
      width: ${({ $svgWidth }) => ($svgWidth ? $svgWidth : '14px')};
      height: ${({ $svgWidth }) => ($svgWidth ? $svgWidth : '14px')};
      fill: ${({ $svgColor }) => ($svgColor ? $svgColor : 'var(--primary-color)')};
      transition: 0.5s;
    }

    &:hover {
      background-color: ${({ $bgHoverColor }) => $bgHoverColor && $bgHoverColor};

      svg {
        fill: ${({ $svgHoverColor }) => ($svgHoverColor ? $svgHoverColor : '#000')};
      }
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`

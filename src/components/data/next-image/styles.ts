import styled from 'styled-components'

import { IImageStyles } from './interfaces'

export const Image = styled.div<IImageStyles>`
  height: 100%;
  min-height: inherit;
  max-height: inherit;
  width: inherit;
  min-width: inherit;
  max-width: inherit;
  aspect-ratio: inherit;
  position: relative;
  overflow: hidden;

  &.loading {
    background-color: ${(props) => props.theme.secondaryColor + '8a'};
    background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 60%
      )
      ${(props) => props.theme.secondaryColor + '8a'};
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s loading ease-in-out infinite;

    > img {
      opacity: 0;
    }
  }

  @keyframes loading {
    to {
      background-position-x: -20%;
    }
  }

  img {
    width: 100%;
    height: inherit;
    position: relative !important;
    min-height: inherit;
    max-height: inherit;
    min-width: inherit;
    max-width: inherit;
    object-fit: cover;
    object-position: center center;
    aspect-ratio: inherit;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;

    &:hover {
      -webkit-transform: ${({ $hasHover }) => $hasHover && 'scale(1.1)'};
      transform: ${({ $hasHover }) => $hasHover && 'scale(1.1)'};
    }
  }
`

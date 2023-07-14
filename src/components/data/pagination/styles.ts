import styled from 'styled-components'

import { IPaginationStyles } from './interfaces'

export const PaginationComponent = styled.div<IPaginationStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.21vw;
  gap: 28px;

  button {
    width: 42px;
    height: 42px;
    background-color: transparent;
    color: ${({ $boxColors }) => ($boxColors?.color ? $boxColors?.color : 'var(--primary-color)')};
    border: 1px solid
      ${({ $boxColors }) => ($boxColors?.borderColor ? $boxColors?.borderColor : 'var(--primary-color)')};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;

    &.active,
    &:hover {
      background-color: ${({ $boxColors }) =>
        $boxColors?.bgHoverColor ? $boxColors?.bgHoverColor : 'var(--primary-color)'};
      border: 1px solid
        ${({ $boxColors }) => ($boxColors?.borderHoverColor ? $boxColors?.borderHoverColor : 'var(--secondary-color)')};
      color: ${({ $boxColors }) => ($boxColors?.hoverColor ? $boxColors?.hoverColor : 'var(--secondary-color)')};
    }
  }

  @media only screen and (max-width: 1600px) {
    gap: 25px;

    button {
      width: 40px;
      height: 40px;
    }
  }

  @media only screen and (max-width: 1400px) {
    gap: 22px;

    button {
      width: 38px;
      height: 38px;
    }
  }

  @media only screen and (max-width: 1200px) {
    gap: 20px;

    button {
      width: 37px;
      height: 37px;
    }
  }

  @media only screen and (max-width: 1024px) {
    gap: 17px;

    button {
      width: 36px;
      height: 36px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 40px;

    button {
      width: 35px;
      height: 35px;
    }
  }

  @media only screen and (max-width: 500px) {
    gap: 15px;
    margin-top: 35px;

    button {
      width: 34px;
      height: 34px;
    }
  }

  @media only screen and (max-width: 400px) {
    button {
      width: 32px;
      height: 32px;
    }
  }
`

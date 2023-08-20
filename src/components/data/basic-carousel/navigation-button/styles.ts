import { styled } from 'styled-components'

export const NavigationButton = styled.button`
  padding: 0;
  border: 0;
  background-color: unset;

  .icon {
    width: 100%;
    width: clamp(11px, 1.04vw, 20px);

    svg {
      width: 100%;
      height: auto;
    }
  }
`

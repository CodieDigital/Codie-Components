import styled from 'styled-components'

export const Loader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 5s loading ease-in-out infinite;
  background: var(--secondary-color);
  background: linear-gradient(
    to right,
    var(--secondary-color) 8%,
    var(--primary-color) 50%,
    var(--secondary-color) 20%
  );
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`

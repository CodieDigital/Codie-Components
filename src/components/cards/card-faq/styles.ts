import styled from 'styled-components';

interface ICardFaqStyles {
  $open: boolean;
  $height: number;
}

export const CardFaq = styled.div<ICardFaqStyles>`
  display: flex;
  flex-direction: column;
  gap: ${({ $open }) => ($open ? '20px' : '0')};
  width: 100%;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding: 18px 30px;
  transition: 0.5s;

  .box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5px;

    h2 {
      color: var(--primary-color);
    }
  }

  .svg-icon {
    max-width: 15px;
    stroke: var(--primary-color);
    transform: ${({ $open }) => $open && 'rotate(180deg)'};
    transition: 0.5s;
  }

  .answer {
    height: ${({ $open, $height }) => ($open ? `${$height}px` : '0')};
    transition: height 0.5s;
    padding-right: 5px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 3px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #ccc;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    gap: ${({ $open }) => ($open ? '15px' : '0')};
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    gap: ${({ $open }) => ($open ? '10px' : '0')};
    padding: 16px;
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;

import styled from 'styled-components';

export const Whattsapp = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  border-radius: 50%;
  z-index: 999;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #25d366;
    bottom: -20px;
    top: -20px;
    left: -20px;
    right: -20px;
    animation: animar 1.5s linear infinite;
    opacity: 0;
  }
  &::after {
    animation-delay: 0.5s;
  }
  @keyframes animar {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
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
    width: 45px;
    height: 45px;
    bottom: 30px;
    right: 30px;

    svg {
      max-width: 30px;
    }
    &::before,
    &::after {
      bottom: -15px;
      top: -15px;
      left: -15px;
      right: -15px;
    }
  }
  @media only screen and (max-width: 650px) {
  }
  @media only screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;

    svg {
      max-width: 25px;
    }
    &::before,
    &::after {
      bottom: -10px;
      top: -10px;
      left: -10px;
      right: -10px;
    }
  }
  @media only screen and (max-width: 400px) {
  }
`;

import styled from 'styled-components'

interface ButtonProps {
  backgroundColor?: string
  $loading?: boolean
  checked?: boolean
}

export const Button = styled.div<ButtonProps>`
  a,
  button {
    padding: 0 20px;
    width: 100%;
    height: 50px;
    cursor: ${(props) => (props.$loading ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 0;
    border-radius: 5px;
    opacity: ${(props) => props.$loading && '0.8'};
    transition: all 0.4s ease-in-out;
    background-size: 300% 100%;
    background: ${(props) => (props.$loading ? '#295d00' : props.backgroundColor)};

    svg {
      width: 30px;
      height: auto;
    }
  }

  a:hover,
  button:hover {
    background-position: ${(props) => (props.$loading ? 'unset' : '100% 0')};
    transition: all 0.4s ease-in-out;
  }

  @keyframes loading {
    0% {
      background-size: 300% 100%;
    }

    50% {
      background-position: 100% 0;
    }

    100% {
      background-size: 300% 100%;
    }
  }

  button:disabled {
    cursor: not-allowed;
    background: ${(props) => (props.$loading ? '#295d00' : props.backgroundColor)};
    opacity: 0.75;
  }

  @media only screen and (max-width: 1600px) {
    a,
    button {
      height: 46px;

      svg {
        width: 28px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 44px;

      svg {
        width: 26px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 42px;

      svg {
        width: 26px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    a,
    button {
      height: 40px;

      svg {
        width: 24px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 38px;
    }
  }

  @media only screen and (max-width: 600px) {
    a,
    button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 450px) {
    a,
    button {
      height: 32px;

      svg {
        width: 22px;
      }
    }
  }

  @media only screen and (max-width: 370px) {
  }

  @media only screen and (max-width: 350px) {
  }
`

import styled from 'styled-components'

interface IBoxContactStyles {
  $type?: 1 | 2 | 3 | 4 | 5
  $titleColor?: string
}

export const BoxContact = styled.div<IBoxContactStyles>`
  width: 100%;
  max-width: 48vw;
  margin-left: ${({ $type }) => $type === 5 && 'auto'};

  .title {
    color: ${({ $titleColor }) => ($titleColor ? $titleColor : 'var(--primary-color)')};
    & + * {
      margin-top: 30px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;

    .phone-plan {
      display: flex;
      gap: 20px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 15px;

    .button {
      width: 100%;

      button {
        border-radius: 24px;
      }
    }

    .captcha {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
  }

  @media only screen and (max-width: 1600px) {
    .title + * {
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 1400px) {
    max-width: 50vw;

    .title + * {
      margin-top: 20px;
    }

    .actions {
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1200px) {
    max-width: 60vw;
    margin-right: ${({ $type }) => $type === 5 && 'auto'};

    .title {
      text-align: ${({ $type }) => $type === 5 && 'center'};

      & + * {
        margin-top: 15px;
      }
    }

    .actions {
      gap: 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .title {
      display: none;

      & + * {
        margin-top: 0;
      }
    }

    .actions {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 900px) {
    max-width: 65vw;
  }

  @media only screen and (max-width: 768px) {
    max-width: 75vw;
  }

  @media only screen and (max-width: 650px) {
    max-width: unset;

    .actions {
      flex-direction: column;
      align-items: center;
      max-width: 304px;
      margin-left: auto;
      margin-right: auto;
      gap: 10px;

      .captcha {
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 390px) {
    max-width: 304px;
  }
`

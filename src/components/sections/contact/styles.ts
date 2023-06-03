import styled from 'styled-components';

interface IContactStyles {
  $type?: 1 | 2 | 3 | 4 | 5;
}

export const Contact = styled.section<IContactStyles>`
  padding-top: 200px;
  padding-bottom: 60px;

  .title {
    color: var(--primary-color);
  }

  .subtitle {
    color: var(--text-color);
    max-width: 530px;
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: ${({ $type }) =>
      ($type === 2 || $type === 3) && 'row-reverse'};
    justify-content: space-between;
    gap: 50px;
  }

  .box-content {
    width: 100%;
    display: ${({ $type }) => ($type === 4 || $type === 5 ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: ${({ $type }) => $type === 2 && 'center'};
    gap: 60px;
  }

  .box-title {
    display: ${({ $type }) => ($type === 2 ? 'none' : 'flex')};
    flex-direction: column;
    gap: 20px;
  }

  .contact-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    padding-top: 150px;

    .box-content {
      gap: 40px;
    }

    .contact-list {
      gap: 25px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .box-content {
      gap: 30px;
    }

    .contact-list {
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 110px;

    .subtitle {
      display: ${({ $type }) => ($type === 2 ? 'none' : 'flex')};
      max-width: unset;
      text-align: center;
    }

    .container {
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }

    .box-content {
      max-width: 450px;
    }

    .box-title {
      display: flex;
      text-align: center;
      gap: 15px;
    }

    .contact-list {
      margin-left: auto;
      margin-right: auto;
      max-width: fit-content;
    }
  }

  @media only screen and (max-width: 900px) {
    .container {
      gap: 15px;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    padding-top: 80px;

    .box-content {
      gap: 15px;
    }

    .contact-list {
      gap: 10px;
    }
  }

  @media only screen and (max-width: 390px) {
    .container {
      padding-left: 10px;
      padding-right: 10px;

      .box-content {
        padding: 0 15px;
      }
    }
  }
`;

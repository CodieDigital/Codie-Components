import styled from 'styled-components';

export const Blog = styled.section`
  background-color: #f2f2f2;

  .box-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: var(--primary-color);
    }

    & + * {
      margin-top: 50px;
    }
  }

  .button {
    max-width: 285px;
    border-radius: 15px;
  }
  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    .box-top + * {
      margin-top: 30px;
    }

    .button {
      max-width: 265px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .box-top + * {
      margin-top: 25px;
    }

    .button {
      max-width: 230px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    .box-top + * {
      margin-top: 20px;
    }

    .button {
      max-width: 220px;
    }
  }

  @media only screen and (max-width: 768px) {
    .box-top + * {
      margin-top: 16px;
    }

    .button {
      max-width: 210px;
    }
  }

  @media only screen and (max-width: 650px) {
    padding-bottom: 40px;
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
    padding-bottom: 35px;

    .box-top + * {
      margin-top: 13px;
    }

    .button {
      max-width: 180px;
    }
  }
`;

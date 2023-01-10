import styled from "styled-components";

export const Newsletter = styled.div`
  .side-box.newsletter {
    p {
      text-align: center;
      max-width: 222px;
      margin: 0 auto;
      margin-bottom: 15px;

      font-weight: 600;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input {
      height: 53px;
      text-align: center;
      margin-bottom: 10px;

      border: 1px solid #707070;
      border-radius: 5px;
    }

    .input {
      margin-bottom: 5px;
    }

    button {
      padding-top: 3px;
      border: unset;
      height: 53px;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--secondary-color);
      color: #fff;
      border-radius: 5px;
      transition: 0.5;
    }

    button:hover {
      background-color: var(--primary-color);
    }
  }

  @media only screen and (max-width: 1400px) {
    .side-box.newsletter {
      input,
      button {
        height: 51px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .side-box.newsletter {
      input,
      button {
        height: 48px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .side-box.newsletter {
      input,
      button {
        height: 46px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .side-box.newsletter {
      input,
      button {
        height: 44px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .side-box.newsletter {
      input,
      button {
        height: 40px;
      }
    }
  }
`;

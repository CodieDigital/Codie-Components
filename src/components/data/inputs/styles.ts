import styled from 'styled-components';

export const Input = styled.div`
  width: 100%;
  margin-bottom: 15px;

  .input-content {
    width: 100%;
    position: relative;

    input:focus + .label-animation,
    .label-animation:focus {
      background: transparent;
      top: 0;
      width: auto;

      span {
        display: block;
        transform: scale(0.9);
        margin-left: -5px;
      }
    }
  }
  input,
  textarea,
  select {
    width: 100%;
    background-color: var(--white);
    padding: 0 15px;
    color: #232323;
    border: 0;
    border-radius: 10px;
  }
  input,
  select {
    height: 48px;
  }
  input:read-only {
    opacity: 0.7;
    cursor: not-allowed;
  }
  textarea {
    height: 160px;
    padding-top: 15px;
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #232323;
  }
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    /* Firefox 19+ */
    color: #232323;
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* IE 10+ */
    color: #232323;
  }
  input:-moz-placeholder,
  textarea:-moz-placeholder {
    /* Firefox 18- */
    color: #232323;
  }
  input::placeholder,
  textarea::placeholder {
    color: #232323;
  }
  .eye {
    background-color: unset;
    border: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;

    svg {
      width: 20px;
      height: auto;
      fill: rgba(0, 0, 0, 0.3);
    }
  }

  @media only screen and (max-width: 1600px) {
    input {
      height: 46px;
    }
    textarea {
      height: 150px;
    }
  }
  @media only screen and (max-width: 1400px) {
    margin-bottom: 14px;

    input {
      height: 44px;
    }
    textarea {
      height: 145px;
    }
  }
  @media only screen and (max-width: 1200px) {
    input {
      height: 42px;
    }
    textarea {
      height: 135px;
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 13px;

    input {
      height: 40px;
    }
    textarea {
      height: 115px;
    }
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 10px;

    input {
      height: 39px;
    }
    textarea {
      height: 110px;
    }
  }
  @media only screen and (max-width: 768px) {
    input {
      height: 38px;
    }
    textarea {
      height: 100px;
    }
  }
  @media only screen and (max-width: 650px) {
    input {
      height: 37px;
    }
    textarea {
      height: 95px;
    }
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 8px;

    input {
      height: 36px;
    }
    textarea {
      height: 85px;
    }
  }
`;

export const InputEdit = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: rgba(51, 33, 84, 0.1);
  position: relative;
  padding: 22px 50px 15px 20px;

  input {
    background-color: transparent;
    border: 0;
    color: var(--base-color);
    width: 100%;
  }

  .editIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 23px;
    margin: 0;
    display: flex;

    svg {
      cursor: pointer;
      opacity: 0.3;
      transition: 0.3s;
    }
    svg:hover {
      opacity: 1;
    }
  }
`;

export const InputRadio = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 15px;

  .error-message {
    margin-top: -5px;
  }
  .input-content {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
  }

  label {
    cursor: pointer;
  }

  input[type='radio'] {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    border-radius: 50%;
    outline: none;
    background-color: #fff;
    transition: 0.3s;
  }

  input[type='radio']:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    margin: 3px auto;
    border-radius: 50%;
  }
  input[type='radio']:checked:hover {
    background-color: transparent;
  }
  input[type='radio']:checked:before {
    background: var(--secundary-color);
  }

  label {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media only screen and (max-width: 768px) {
    label {
      span {
        /* width: calc(100% - 22px); */
      }
    }
  }

  @media only screen and (max-width: 400px) {
    input[type='radio'] {
      width: 10px;
      height: 10px;
    }

    input[type='radio']:before {
      content: '';
      width: 5px;
      height: 5px;
      margin: 1.2px auto 0px;
    }

    label {
      span {
        width: calc(100% - 16px);
      }
    }
  }
`;

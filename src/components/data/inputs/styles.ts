import styled from "styled-components";

interface InputStyleProps {
  dark?: boolean;
  inputCurrency?: boolean;
}

export const Input = styled.div<InputStyleProps>`
  margin-bottom: 20px;

  .selectValidator {
    display: none;
  }

  .label-animation {
    color: ${(props) => (props.dark ? "#fff" : "rgb(178 173 192)")};
    text-align: left;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 10px;
    background-color: ${(props) =>
    props.dark ? "#353746" : "rgb(234 232 238)"};
    width: 100%;
    transition: 0.3s;
  }

  .label-animation.active {
    background-color: transparent;
    top: -2px;
    width: auto;

    span {
      display: block;
      transform: scale(0.9);
      margin-left: -5px;
    }
  }

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

  .container-input {
    position: relative;
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
      color: ${(props) => (props.dark ? "#fff" : "var(--yellow-900)")};
    }
  }

  input,
  select,
  textarea {
    width: 100%;
    background-color: ${(props) => (props.dark ? "#353746" : "#fff")};
    border-radius: 6px;
    padding-left: 10px;
    padding-right: 10px;
    color: ${(props) => (props.dark ? "#fff" : "#000")};
    border: 0;
  }

  textarea {
    padding-top: 15px;
    height: 150px;
  }

  input,
  select {
    height: 45px;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${(props) => (props.dark ? "#fff" : "#000")};
  }

  input:read-only {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input-currency {
    position: relative;

    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
    }

    > input {
      padding-left: 35px;
    }
  }

  @media only screen and (max-width: 1600px) {
    margin-bottom: 18px;

    input,
    select {
      height: 43px;
    }
  }

  @media only screen and (max-width: 1400px) {
    margin-bottom: 16px;

    input,
    select {
      height: 41px;
    }
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 14px;

    input,
    select {
      height: 39px;
    }
  }
`;

export const Checkbox = styled.div`
  input {
    display: none;
  }

  label {
    width: 18px;
    height: 18px;
    border: 1px solid #232f3e;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: rgba(35, 47, 62, 10%);
    }
  }

  input:checked + label {
    background-color: #232f3e;
  }
`;

export const InputFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;

  input[type="file"] {
    display: none;
  }

  label {
    cursor: pointer;
    width: 100%;
    margin: 0;
    border: 1px dashed;
    padding: 15px 20px;
    background-color: #fff;
    color: var(--yellow-900);
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.3s;
    height: 100%;

      &:hover {
        background-color: var(--yellow-hover-900);
        color: #fff;
        transition: 0.3s;

        svg {
          fill: #fff;
          transition: 0.3s;
        }
      }

    .input-style {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        width: 20px;
        fill: var(--yellow-900);
        transition: 0.3s;
      }
    }

    .file {
      display: flex;
      align-items: center;
      gap: 5px;

      span {
        font-size: 12px;
      }
    }

  
  }

  p {
    max-width: calc(100% - 270px);
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  img {
    max-width: 20px;
  }

  .file-name {
    max-width: 203px;
    overflow: hidden;
    height: 14px;
    margin-right: -5px;
}
`;

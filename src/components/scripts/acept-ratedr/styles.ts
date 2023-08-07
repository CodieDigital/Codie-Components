import styled from "styled-components";

export const AceptCookies = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    height: calc(100vh - 150px);
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 150px;
    text-align: center;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
    background-color: #ffffff;

    p {
      font-size: 15px;
    }

    .actions-cookie {
      display: flex;
      gap: 30px;
      align-items: center;

      button {
        border: 0;
        padding: 0;
        background-color: transparent;
        font-size: 14px;
      }

      .recusar {
        color: #000;
      }

      .aceitar {
        padding: 0 25px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        color: #fff;
        background-color: ${(props) => props.theme.primaryColor};
      }
    }
  }
`;

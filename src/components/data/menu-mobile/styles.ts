import styled from 'styled-components';

export const Menu = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  right: 0;
  top: 0;
  z-index: 999;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  display: none;
  justify-content: flex-end;

  .filter {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-end;
    z-index: 99;
  }

  .menu-mobile {
    overflow-y: auto;
    width: 325px;
    height: 100%;
    background-color: #eeeeee;
    position: relative;
    transform: translateX(100%);
    transition: 0.3s ease-in-out;
    z-index: 99;
    padding-bottom: 80px;

    nav {
      padding: 15px 0 0;
      display: flex;
      flex-direction: column;
      flex-direction: column;
      height: auto;
      align-items: flex-start;
      gap: 10px;

      .border {
        border-bottom: 3px solid #fff;
        width: 100%;
        height: 1px;
        margin: 10px 0;
      }

      h3 {
        color: var(--secondary-color);
        padding: 0 25px;
      }

      .link,
      span {
        color: #fff;
        cursor: pointer;
        padding: 10px 25px 7px;
        width: 100%;
        border-radius: 0;
        color: #000;

        &.active {
          color: red;
        }
      }

      .itens.active {
        color: var(--red);
      }
    }
  }

  .menu-mobile::-webkit-scrollbar {
    width: 4px;
  }

  .menu-mobile::-webkit-scrollbar-track {
    background: #ccc;
  }

  .menu-mobile::-webkit-scrollbar-thumb {
    background: #000;
  }

  .menu-mobile::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
  }

  .link.active {
    font-weight: 700;
    background-color: #fff;
  }

  .dropdown {
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        width: 14px;
        height: 10px;
        stroke: #000;
        transition: 0.5s;
      }
    }

    .subMenu-bg {
      padding-top: 15px;
      width: 100%;
      display: none;
      flex-direction: column;
      transition: 3s;
      opacity: 0;
      gap: 8px;

      .sub-link {
        padding: 10px;
        width: 100%;
        color: #000;
        background-color: #eeeeee;
      }
    }
  }

  .dropdown.active {
    background-color: #fff;

    .title {
      svg {
        transform: rotate(90deg);
      }
    }

    .subMenu-bg {
      display: flex;
      opacity: 1;

      .sub-link.active {
        color: red;
        font-weight: 700;
      }
    }
  }

  .close {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
    padding: 40px 25px 0;

    h3 {
      color: #000;
    }

    svg {
      display: flex;
      align-items: center;
      width: 20px;
      height: 20px;
      fill: black;
      margin-bottom: 5px;
    }
  }

  .close:hover {
    color: var(--secondary-color);
  }

  &.active {
    visibility: visible;

    .menu-mobile {
      transform: translateX(0%);
    }
  }

  .button {
    margin-left: 20px;
  }

  .box-socials {
    padding-left: 25px;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
  }

  @media only screen and (max-width: 390px) {
    .menu-mobile {
      width: 90%;
    }
  }
`;

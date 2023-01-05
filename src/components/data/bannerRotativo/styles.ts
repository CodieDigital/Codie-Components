import styled from 'styled-components'

export const BannerRotativo = styled.div`
  .swiper-banner {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      z-index: 2;
    }

    .absolute-image {
      height: inherit;
      width: 100%;
      position: relative;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: inherit;
        background-image: linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0) 100%);
        opacity: 0.5;
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
  }

  .titles {
    padding-top: 380px;
    color: #fff;
    line-height: normal;

    h1 + * {
      margin-top: 70px;
    }

    .scroll {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      color: #fff;

      svg {
        fill: #fff;
        stroke: #fff;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .titles {
      padding-left: 60px;
    }
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
    .titles {
      padding-left: 45px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .titles {
      padding-left: 40px;
    }
  }

  @media only screen and (max-width: 900px) {
    .titles {
      padding-left: 35px;
    }
  }

  @media only screen and (max-width: 768px) {
    .bg {
      display: flex;
      align-items: center;
    }
  }

  @media only screen and (max-width: 650px) {
    .titles {
      h1 + * {
        margin-top: 60px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 33px;
    }

    h2 {
      font-size: 30px;
    }
  }
`

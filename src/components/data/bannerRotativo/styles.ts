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
    display: flex;
  }

  .container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .titles {
    color: #fff;
    line-height: normal;

    h1 + * {
      margin-top: 70px;
    }

    .subtitle {
      max-width: 680px;
      line-height: 1.2;

      & + * {
        margin-top: 80px;
      }
    }
  }

  .scroll {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    color: #fff;
    position: absolute;
    bottom: 60px;
    left: 15px;

    svg {
      fill: #fff;
      stroke: #fff;
    }
  }

  @media only screen and (max-width: 1600px) {
    .titles {
      padding-left: 60px;
    }

    .scroll {
      left: 75px;
    }
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
    .titles {
      padding-left: 45px;
    }

    .scroll {
      left: 60px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .titles {
      padding-left: 40px;
    }

    .scroll {
      left: 55px;
    }
  }

  @media only screen and (max-width: 900px) {
    .titles {
      padding-left: 35px;
    }

    .scroll {
      left: 50px;
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

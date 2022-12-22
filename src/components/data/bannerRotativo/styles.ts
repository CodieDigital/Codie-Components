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
`

import { styled } from 'styled-components'

export const BasicCarousel = styled.div`
  width: 100%;
  padding: 80px 0;

  .swiper {
    width: 100%;
    max-width: 100%;
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--primary-color);
  }

  .swiper-box {
    position: relative;

    .desktop-left-button,
    .desktop-right-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 24;
    }

    .desktop-left-button {
      left: -3vw;
    }

    .desktop-right-button {
      right: -3vw;
    }
  }

  @media only screen and (max-width: 1024px) {
    .mobile-nav-buttons {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 20%;
    }
  }
`

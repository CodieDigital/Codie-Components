import styled from 'styled-components'

import { IBoxSwiperStyles } from './interfaces'

export const BoxSwiper = styled.div<IBoxSwiperStyles>`
  width: 100%;
  position: relative;
  z-index: 5;

  .button-nav {
    width: 100%;
    max-width: fit-content;
    display: ${({ $slidesLenght, $slidesBreakpoints }) =>
      $slidesLenght === $slidesBreakpoints?.[1920].breaking ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    position: absolute;
    z-index: 1000;
    top: 50%;
    transform: translateY(-50%);

    .svg-icon {
      stroke: ${({ $navColor }) => ($navColor ? $navColor : 'var(--secondary-color)')};
      max-width: 20px;
      width: 100%;
    }
  }

  .nav-left-${({ $name }) => $name} {
    left: ${({ $navPositions }) => $navPositions[1920].position};
  }

  .nav-right-${({ $name }) => $name} {
    right: ${({ $navPositions }) => $navPositions[1920].position};
  }

  .swiper-pagination-${({ $name }) => $name} {
    position: absolute;
    display: ${({ $slidesBreakpoints }) => ($slidesBreakpoints?.[1920].pagination ? 'flex' : 'none')};
    justify-content: center;
    bottom: -20px;

    .pagination-bullet {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${({ $navColor }) => ($navColor ? $navColor : 'var(--primary-color)')};
      margin: 0 5px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .pagination-bullet.swiper-pagination-bullet-active {
      background-color: ${({ $navColor }) => ($navColor ? $navColor : 'var(--primary-color)')};
    }
  }

  @media only screen and (max-width: 1600px) {
    .button-nav {
      display: ${({ $slidesLenght, $slidesBreakpoints }) =>
        $slidesLenght != $slidesBreakpoints?.[1600]?.breaking && 'flex'};
    }

    .nav-left-${({ $name }) => $name} {
      left: ${({ $navPositions }) => $navPositions[1600].position};
    }

    .nav-right-${({ $name }) => $name} {
      right: ${({ $navPositions }) => $navPositions[1600].position};
    }

    .swiper-pagination-${({ $name }) => $name} {
      display: ${({ $slidesBreakpoints }) => $slidesBreakpoints?.[1600]?.pagination && 'flex'};
    }
  }

  @media only screen and (max-width: 1400px) {
    .button-nav {
      display: ${({ $slidesLenght, $slidesBreakpoints }) =>
        $slidesLenght != $slidesBreakpoints?.[1400]?.breaking && 'flex'};

      .svg-icon {
        max-width: 16px;
      }
    }

    .nav-left-${({ $name }) => $name} {
      left: ${({ $navPositions }) => $navPositions[1400].position};
    }

    .nav-right-${({ $name }) => $name} {
      right: ${({ $navPositions }) => $navPositions[1400].position};
    }

    .swiper-pagination-${({ $name }) => $name} {
      display: ${({ $slidesBreakpoints }) => $slidesBreakpoints?.[1400]?.pagination && 'flex'};
    }
  }

  @media only screen and (max-width: 1200px) {
    .button-nav {
      display: ${({ $slidesLenght, $slidesBreakpoints }) =>
        $slidesLenght != $slidesBreakpoints?.[1200]?.breaking && 'flex'};

      .svg-icon {
        max-width: 14px;
      }
    }

    .nav-left-${({ $name }) => $name} {
      left: ${({ $navPositions }) => $navPositions[1200].position};
    }

    .nav-right-${({ $name }) => $name} {
      right: ${({ $navPositions }) => $navPositions[1200].position};
    }

    .swiper-pagination-${({ $name }) => $name} {
      display: ${({ $slidesBreakpoints }) => $slidesBreakpoints?.[1200]?.pagination && 'flex'};
    }
  }

  @media only screen and (max-width: 1024px) {
    .button-nav {
      display: ${({ $slidesLenght, $slidesBreakpoints }) =>
        $slidesLenght != $slidesBreakpoints?.[1024]?.breaking && 'flex'};
    }

    .nav-left-${({ $name }) => $name} {
      left: ${({ $navPositions }) => $navPositions[1024].position};
    }

    .nav-right-${({ $name }) => $name} {
      right: ${({ $navPositions }) => $navPositions[1024].position};
    }

    .swiper-pagination-${({ $name }) => $name} {
      display: ${({ $slidesBreakpoints }) => $slidesBreakpoints?.[1024]?.pagination && 'flex'};
    }
  }

  @media only screen and (max-width: 900px) {
    .button-nav {
      display: ${({ $slidesLenght, $slidesBreakpoints }) =>
        $slidesLenght != $slidesBreakpoints?.[900]?.breaking && 'flex'};
    }

    .nav-left-${({ $name }) => $name} {
      left: ${({ $navPositions }) => $navPositions[900].position};
    }

    .nav-right-${({ $name }) => $name} {
      right: ${({ $navPositions }) => $navPositions[900].position};
    }

    .swiper-pagination-${({ $name }) => $name} {
      display: ${({ $slidesBreakpoints }) => $slidesBreakpoints?.[900]?.pagination && 'flex'};
    }
  }

  @media only screen and (max-width: 768px) {
    .button-nav {
      display: ${({ $slidesLenght, $slidesBreakpoints }) =>
        $slidesLenght != $slidesBreakpoints?.[768]?.breaking && 'flex'};
    }

    .nav-left-${({ $name }) => $name} {
      left: ${({ $navPositions }) => $navPositions[768].position};
    }

    .nav-right-${({ $name }) => $name} {
      right: ${({ $navPositions }) => $navPositions[768].position};
    }

    .swiper-pagination-${({ $name }) => $name} {
      display: ${({ $slidesBreakpoints }) => $slidesBreakpoints?.[768]?.pagination && 'flex'};
    }
  }

  @media only screen and (max-width: 650px) {
    .swiper-pagination-${({ $name }) => $name} {
      display: ${({ $slidesBreakpoints }) => $slidesBreakpoints?.[650].pagination && 'flex'};
    }

    .button-nav {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`

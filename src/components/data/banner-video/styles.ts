import styled from 'styled-components'

interface IBannerVideoStyles {
  $defaultStyles?: {
    titleAlign?: 'flex-start' | 'center' | 'flex-end'
    titleColor?: string
    linkColor?: string
    linkHovervColor?: string
    subtitleColor?: string
    linkCenter?: boolean
    linkBottom?: string
  }
}

export const BannerVideo = styled.section<IBannerVideoStyles>`
  aspect-ratio: 1920/800;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  .back-video {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ $defaultStyles }) => $defaultStyles?.titleAlign && $defaultStyles.titleAlign};
    position: relative;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .title {
    color: ${({ $defaultStyles }) => ($defaultStyles?.titleColor ? $defaultStyles.titleColor : '#fff')};
  }

  .subtitle {
    color: ${({ $defaultStyles }) => ($defaultStyles?.subtitleColor ? $defaultStyles.subtitleColor : '#fff')};
  }

  .link {
    position: absolute;
    width: 100%;
    gap: 10px;
    max-width: fit-content;
    display: flex;
    align-items: center;
    bottom: ${({ $defaultStyles }) => ($defaultStyles?.linkBottom ? $defaultStyles?.linkBottom : '5%')};
    left: ${({ $defaultStyles }) => ($defaultStyles?.linkCenter ? '50%' : '15px')};
    transform: ${({ $defaultStyles }) => $defaultStyles?.linkCenter && 'translateX(-50%)'};
    color: ${({ $defaultStyles }) => ($defaultStyles?.linkColor ? $defaultStyles.linkColor : '#fff')};

    .svg-icon {
      stroke: ${({ $defaultStyles }) => ($defaultStyles?.linkColor ? $defaultStyles.linkColor : '#fff')};
    }

    &:hover {
      color: ${({ $defaultStyles }) => ($defaultStyles?.linkHovervColor ? $defaultStyles.linkHovervColor : '#0000ff')};

      .svg-icon {
        stroke: ${({ $defaultStyles }) =>
          $defaultStyles?.linkHovervColor ? $defaultStyles.linkHovervColor : '#0000ff'};
      }
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
    height: 80vh;
    aspect-ratio: 1;
  }

  @media only screen and (max-width: 900px) {
    height: 70vh;
  }

  @media only screen and (max-width: 768px) {
    height: 65vh;
  }

  @media only screen and (max-width: 650px) {
    .link {
      right: 5%;
    }
  }

  @media only screen and (max-width: 500px) {
    height: 60vh;

    .container {
      align-items: center;
    }

    .title {
      text-align: center;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`

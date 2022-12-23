import styled from 'styled-components'

interface PostPageComponentStyles {
  bgBanner: string
}

export const PostPageComponent = styled.section<PostPageComponentStyles>`
  .bg {
    width: 100%;
    height: 80vh;
    background-image: ${(props) => props.bgBanner && `url(${props.bgBanner})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .box-post {
    max-width: 70vw;
    margin-top: -30vw;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    padding: 3.5vw;

    & + * {
      margin-top: 40px;
    }

    h1 {
      line-height: 1.1;
      color: #000;

      & + * {
        margin-top: 80px;
      }
    }

    h2 {
      line-height: 1;
      color: #000;

      & + * {
        margin-top: 20px;
      }
    }

    .text {
      line-height: 1.2;
      color: #252525;

      & + * {
        margin-top: 40px;
      }
    }

    .box-image {
      width: 100%;
      aspect-ratio: 968/360;
      border-radius: 10px;
      overflow: hidden;

      img {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;

        &:hover {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }

      & + * {
        margin-top: 40px;
      }
    }
  }

  .box-tags {
    padding: 3.5vw;
    max-width: 70vw;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5vw;

    .left {
      width: 65%;

      h2 {
        color: #000;
        line-height: 1;

        & + * {
          margin-top: 20px;
        }
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        li {
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: fit-content;
          border-radius: 5px;
          border: 1px solid var(--red);

          &:hover {
            background-color: var(--red);
          }

          a {
            display: inline-block;
            width: 100%;
            line-height: 1;
            color: #000;
            padding: 12px 15px;
            text-decoration: none;
          }
        }
      }
    }

    .right {
      max-width: 160px;
      width: 100%;

      h2 {
        color: #000;
        line-height: 1;

        & + * {
          margin-top: 20px;
        }
      }
      .social-icons {
        display: flex;
        gap: 15px;

        svg {
          fill: var(--red);
        }

        li:hover {
          svg {
            fill: var(--blue);
          }
        }
      }
    }
  }

  /* Responsives */

  @media only screen and (max-width: 1600px) {
    .box-post {
      max-width: 70vw;
      padding: 55px;

      & + * {
        margin-top: 35px;
      }

      h1 + * {
        margin-top: 70px;
      }

      h2 + * {
        margin-top: 15px;
      }

      .text + * {
        margin-top: 35px;
      }
    }

    .box-tags {
      padding: 35px;
      margin-bottom: 90px;
      max-width: 70vw;

      .left {
        h2 + * {
          margin-top: 15px;
        }

        .tags {
          gap: 9px;

          li a {
            padding: 11px 14px;
          }
        }
      }
      .right {
        max-width: 140px;

        h2 + * {
          margin-top: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .box-post {
      max-width: 75vw;
      padding: 50px;
      margin-top: -25vh;

      & + * {
        margin-top: 30px;
      }

      h1 + * {
        margin-top: 60px;
      }

      h2 + * {
        margin-top: 12px;
      }

      .text + * {
        margin-top: 30px;
      }
    }

    .box-tags {
      padding: 30px;
      max-width: 75vw;
      margin-bottom: 80px;

      .left {
        h2 + * {
          margin-top: 12px;
        }

        .tags {
          gap: 8px;

          li a {
            padding: 10px 13px;
          }
        }
      }

      .right h2 + * {
        margin-top: 12px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .box-post {
      padding: 45px;

      & + * {
        margin-top: 25px;
      }

      h1 + * {
        margin-top: 50px;
      }

      h2 + * {
        margin-top: 10px;
      }

      .text + * {
        margin-top: 25px;
      }
    }

    .box-tags {
      padding: 25px;
      margin-bottom: 70px;

      .left {
        h2 + * {
          margin-top: 10px;
        }

        .tags {
          gap: 7px;

          li a {
            padding: 9px 12px;
          }
        }
      }

      .right h2 + * {
        margin-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .box-post {
      padding: 45px;

      & + * {
        margin-top: 25px;
      }

      h1 + * {
        margin-top: 50px;
      }

      h2 + * {
        margin-top: 10px;
      }

      .text + * {
        margin-top: 25px;
      }
    }

    .box-tags {
      padding: 25px;
      margin-bottom: 70px;

      .left {
        h2 + * {
          margin-top: 10px;
        }

        .tags {
          gap: 7px;

          li a {
            padding: 9px 12px;
          }
        }
      }

      .right h2 + * {
        margin-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .box-post {
      max-width: 85vw;
      padding: 40px;

      h1 + * {
        margin-top: 45px;
      }

      .box-image + * {
        margin-top: 35px;
      }
    }

    .box-tags {
      max-width: 85vw;
      padding: 20px;
      margin-bottom: 60px;

      .left .tags {
        gap: 6px;

        li a {
          padding: 8px 11px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .bg {
      height: 50vh;
    }

    .box-post {
      padding: 35px;

      & + * {
        margin-top: 20px;
      }

      h1 + * {
        margin-top: 40px;
      }

      .box-image + * {
        margin-top: 30px;
      }
    }

    .box-tags {
      margin-bottom: 50px;

      .left .tags {
        gap: 5px;

        li a {
          padding: 7px 10px;
        }
      }

      .right {
        max-width: 115px;

        .social-icons {
          gap: 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .box-post {
      padding: 30px;

      & + * {
        margin-top: 15px;
      }

      h1 + * {
        margin-top: 35px;
      }

      .box-image + * {
        margin-top: 25px;
      }
    }

    .box-tags {
      margin-bottom: 40px;

      .left .tags li a {
        padding: 6px 9px;
      }

      .right {
        max-width: 115px;

        .social-icons {
          gap: 10px;

          svg {
            max-width: 18px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .bg {
      height: 30vh;
    }

    .box-post {
      margin-top: -70px;
    }

    .box-post {
      padding: 20px;

      h1 + * {
        margin-top: 30px;
      }

      .text + * {
        margin-top: 15px;
      }

      .box-image + * {
        margin-top: 20px;
      }
    }

    .box-tags {
      margin-bottom: 30px;
      flex-direction: column;
      gap: 25px;

      .left {
        max-width: 100%;

        .tags li a {
          padding: 5px 8px;
        }
      }
      .right {
        max-width: 90px;

        .social-icons {
          gap: 8px;

          svg {
            max-width: 16px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 390px) {
    .box-post,
    .box-tags {
      padding: 15px;
    }
  }
`

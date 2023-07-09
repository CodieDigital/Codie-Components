import styled from 'styled-components'

export const BlogContent = styled.section`
  padding-bottom: 225px;

  .banner-blog {
    height: 400px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 70px;
    background-color: var(--primary-color);
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      top: 0;
      left: 0;
      z-index: 2;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h1 {
      font-size: 80px;
      color: #fff;
      font-family: var(--font-blog-1);
      position: relative;
      z-index: 3;
    }
  }

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
  }

  .posts,
  .side-bar {
    margin-top: 30px;
  }

  .posts {
    width: 100%;
  }

  .side-bar {
    max-width: 450px;
    width: 100%;
  }

  .box-post {
    padding: 40px 40px 50px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;

    * {
      font-family: var(--font-blog-2);
    }

    .image {
      width: 100%;
      aspect-ratio: 890/440;
      margin-bottom: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      overflow: hidden;

      img {
        border-radius: 10px;
        transition: transform 0.8s;
      }

      img:hover {
        -ms-transform: scale(1.2); /* IE 9 */
        -webkit-transform: scale(1.2); /* Safari 3-8 */
        transform: scale(1.2);
      }

      .tag-post {
        position: absolute;
        top: 20px;
        right: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        padding: 9px 16px 7px;

        background-color: var(--secondary-color);
        border-radius: 5px;
        color: #fff;
        font-weight: 700;
      }

      .tag-post:hover {
        background-color: var(--primary-color);
      }
    }

    .title-post {
      font-size: 32px;
      line-height: 1.3;
      margin-bottom: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      transition: 0.5s;

      font-weight: 600;
      color: #000;
    }

    .title-post:hover {
      text-decoration: underline !important;
    }

    .description {
      p {
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        font-size: 16px;
        font-weight: 400;
      }

      & + * {
        border-top: 1px solid rgba(37, 37, 37, 0.6);
        padding-top: 25px;
        margin-top: 25px;
      }
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .share {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
      }

      .link {
        padding: 6px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary-color) !important;
        border-radius: 5px;

        svg {
          width: 13px;
          height: 13px;
          fill: #fff;
        }
      }

      .link:hover {
        background-color: var(--primary-color) !important;
      }

      .leia-mais {
        text-underline-offset: 4px;
        text-decoration: underline !important;

        color: var(--secondary-color);
        font-weight: 300;
      }

      .leia-mais:hover {
        color: var(--primary-color);
      }
    }
  }

  .box-post + .box-post {
    margin-top: 30px;
  }

  .pagination {
    font-size: 20px;

    span,
    button {
      border: unset;
      font-family: var(--font-blog-2);
      background-color: var(--primary-color);
      border-radius: 10px;
      color: #fff;
    }

    button {
      padding-top: 3px;
    }

    button.active {
      background-color: var(--secondary-color);
    }

    span.filson {
      svg {
        stroke: #fff;
      }
    }
  }

  .side-box {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    padding: 40px 40px 45px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    h4 {
      font-size: 32px;
      text-align: center;
      margin-bottom: 25px;

      color: var(--primary-color);
    }

    a,
    button {
      font-weight: 600;
    }

    * {
      font-family: var(--font-blog-2);
    }

    a,
    p,
    span,
    input,
    button {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding-bottom: 200px;

    .banner-blog {
      height: 375px;
      padding-bottom: 60px;

      h1 {
        font-size: 75px;
      }
    }

    .posts,
    .side-bar {
      margin-top: 28px;
    }

    .side-bar {
      max-width: 440px;
    }

    .box-post {
      padding: 37px 37px 45px;

      .image {
        margin-bottom: 35px;
      }

      .title-post {
        font-size: 30px;
        margin-bottom: 18px;
      }

      p {
        font-size: 15.5px;

        line-height: 23.5px;
      }

      p + * {
        margin-top: 22px;
        padding-top: 22px;
      }
    }

    .side-box {
      padding: 37px 37px 42px;

      h4 {
        margin-bottom: 22px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-bottom: 175px;

    .banner-blog {
      height: 350px;
      padding-bottom: 55px;

      h1 {
        font-size: 70px;
      }
    }

    .posts,
    .side-bar {
      margin-top: 26px;
    }

    .container {
      gap: 25px;
    }

    .box-post + .box-post {
      margin-top: 25px;
    }

    .box-post {
      padding: 30px 30px 40px;

      .image {
        margin-bottom: 30px;

        .tag-post {
          top: 17px;
          right: 17px;
          font-size: 14px;
          padding: 9px 16px 5px;
        }
      }

      .title-post {
        font-size: 27px;
        margin-bottom: 13px;
      }

      p {
        font-size: 15px;
        line-height: 23px;
      }

      p + * {
        margin-top: 19px;
        padding-top: 19px;
      }
    }

    .side-bar {
      max-width: 350px;
    }

    .side-box {
      padding: 35px 35px 39px;
      margin-bottom: 25px;

      h4 {
        font-size: 28px;
        margin-bottom: 19px;
      }

      a,
      p,
      span,
      input,
      button {
        font-size: 15.5px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding-bottom: 160px;

    .banner-blog {
      height: 300px;
      padding-bottom: 45px;

      h1 {
        font-size: 65px;
      }
    }

    .posts,
    .side-bar {
      margin-top: 24px;
    }

    .container {
      gap: 22px;
    }

    .box-post + .box-post {
      margin-top: 22px;
    }

    .box-post {
      padding: 28px 28px 35px;

      .image {
        margin-bottom: 28px;

        .tag-post {
          top: 15px;
          right: 15px;
          font-size: 13.5px;
          padding: 7px 12px 4px;
        }
      }

      .title-post {
        font-size: 24px;
        margin-bottom: 10px;
      }

      p {
        font-size: 14.5px;
        line-height: 22.5px;
      }

      p + * {
        margin-top: 17px;
        padding-top: 17px;
      }
    }

    .side-bar {
      max-width: 300px;
    }

    .side-box {
      padding: 31px 31px 38px;
      margin-bottom: 22px;

      h4 {
        font-size: 25px;
        margin-bottom: 16px;
      }

      a,
      p,
      span,
      input,
      button {
        font-size: 14.5px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-bottom: 145px;

    .banner-blog {
      height: 275px;
      padding-bottom: 40px;

      h1 {
        font-size: 60px;
      }
    }

    .posts,
    .side-bar {
      margin-top: 0;
    }

    .container {
      flex-direction: column;
      max-width: 700px;
      gap: 25px;
    }

    .box-post {
      padding: 25px 25px 32px;

      .image {
        margin-bottom: 24px;

        .tag-post {
          top: 13px;
          right: 13px;
          font-size: 13px;
          padding: 7px 10px 4px;
        }
      }

      .title-post {
        font-size: 22px;
        margin-bottom: 8px;
      }

      p {
        font-size: 14px;
        line-height: 22px;
      }

      p + * {
        margin-top: 15px;
        padding-top: 15px;
      }
    }

    .hide-mobile {
      display: none;
    }

    .show-mobile {
      display: flex !important;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      gap: 20px;
      margin-top: 20px;

      .side-box {
        margin-bottom: 0;
      }

      .filtro {
        width: 100%;
      }

      .box-tags {
        width: 100%;
        height: 100%;
      }
    }

    .side-bar {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      max-width: 100%;
    }

    .side-box {
      padding: 28px 28px 35px;
      margin-bottom: 22px;

      h4 {
        font-size: 22px;
        margin-bottom: 14px;
      }

      a,
      p,
      span,
      input,
      button {
        font-size: 14px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .banner-blog {
      height: 225px;
      padding-bottom: 35px;

      h1 {
        font-size: 55px;
      }
    }

    .container {
      max-width: 650px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 130px;

    .banner-blog {
      padding-bottom: 30px;
      height: 200px;

      h1 {
        font-size: 50px;
      }
    }

    .container {
      max-width: 480px;
    }

    .box-post {
      padding: 23px 23px 29px;

      .image {
        margin-bottom: 20px;

        .tag-post {
          top: 11px;
          right: 11px;
          font-size: 12px;
          padding: 7px 10px 4px;
        }
      }

      .title-post {
        font-size: 19px;
        margin-bottom: 4px;
      }

      p {
        font-size: 13px;
        line-height: 21px;
      }

      p + * {
        margin-top: 12px;
        padding-top: 12px;
      }
    }

    .side-box {
      padding: 25px 25px 32px;
      margin-bottom: 22px;

      h4 {
        font-size: 20px;
        margin-bottom: 12px;
      }

      a,
      p,
      span,
      input,
      button {
        font-size: 12.5px;
      }
    }

    .show-mobile {
      flex-direction: column;
    }

    .side-bar {
      grid-template-columns: repeat(1, 1fr);
      gap: 0;
    }
  }

  @media only screen and (max-width: 500px) {
    padding-bottom: 115px;

    .banner-blog {
      height: 180px;
      padding-bottom: 25px;

      h1 {
        font-size: 45px;
      }
    }

    .show-mobile {
      gap: 15px;
    }

    .container {
      gap: 25px;
    }

    .box-post {
      padding: 15px 15px 25px;

      .image {
        margin-bottom: 15px;
        min-height: 210px;

        .tag-post {
          top: 11px;
          right: 11px;
          font-size: 12px;
          padding: 7px 10px 4px;
        }
      }

      .title-post {
        font-size: 17px;
        margin-bottom: 4px;
      }

      p {
        font-size: 12px;
        line-height: 19px;
      }

      p + * {
        margin-top: 10px;
        padding-top: 10px;
      }
    }

    .side-box {
      padding: 20px 20px 25px;
      margin-bottom: 15px;

      h4 {
        font-size: 18px;
        margin-bottom: 12px;
      }

      a,
      p,
      span,
      input,
      button {
        font-size: 12.5px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .banner-blog {
      height: 160px;
      padding-bottom: 20px;

      h1 {
        font-size: 40px;
      }
    }
  }
`

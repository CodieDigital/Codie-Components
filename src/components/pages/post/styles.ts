import styled from "styled-components";

export const Post = styled.section`
  /* ----------  ESTILIZACAO CORES ------------- */

  .banner-post {
    background-color: var(--primary-color);

    * {
      font-family: var(--font-blog-2);
    }

    h1 {
      color: #fff;
    }

    .breadcrumb {
      a,
      span,
      li::after {
        color: #fcfcfc;
        opacity: 0.5;
      }

      a:hover {
        opacity: 1;
      }
    }
  }

  .box-left {
    * {
      font-family: var(--font-blog-2);
    }

    .post,
    .box-tags-post {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    }

    .post {
      margin-bottom: 30px;

      h3 {
        font-weight: 600;
      }

      p {
        font-weight: 400;
      }
    }

    .box-tags-post {
      .tag {
        border: 1px solid var(--secondary-color);
        border-radius: 5px;
        font-weight: 600;
        color: #000;
      }

      .tag:hover {
        background-color: var(--secondary-color);
        color: #fff;
      }

      .link-share {
        background-color: var(--secondary-color);
        border-radius: 5px;
        transition: 0.3s;

        svg {
          fill: #fff;
          border-radius: 5px;
        }
      }

      .link-share:hover {
        background-color: var(--primary-color);
      }
    }
  }

  .side-bar {
    .side-box {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

      h4 {
        color: var(--primary-color);
      }

      a,
      button {
        font-weight: 600;
      }

      * {
        font-family: var(--font-blog-2);
      }
    }

    .side-box.filter {
      a {
        color: #252525;
      }

      a:hover {
        text-decoration: underline !important;
      }

      a + a {
        border-color: rgba(37, 37, 37, 0.3);
      }
    }

    .side-box.newsletter {
      p {
        font-weight: 600;
      }

      input {
        border: 1px solid #707070;
        border-radius: 5px;
      }

      button {
        background-color: var(--secondary-color);
        color: #fff;
        border-radius: 5px;
        transition: 0.5;
      }

      button:hover {
        background-color: var(--primary-color);
      }
    }

    .side-box.tags {
      .tag {
        border: 1px solid var(--secondary-color);
        border-radius: 5px;
        color: #000;
      }

      .tag:hover {
        background-color: var(--secondary-color);
        color: #fff;
      }
    }

    .side-box.destaques {
      a {
        color: #000;
      }

      a:hover {
        color: var(--primary-color);
      }

      .date {
        color: #565454;
      }
    }
  }

  /* ----------- ESTILIZACAO ESPACAMENTO E RESPONSIVIDADE -------------- */

  .banner-post {
    min-height: 400px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 40px;

    .breadcrumb {
      margin-bottom: 20px;
      position: relative;
      z-index: 99;

      a,
      span {
        font-size: 18px;
      }
    }

    h1 {
      font-size: 48px;
      max-width: 1200px;
      line-height: 1.3;
    }
  }

  .post-content {
    padding: 70px 0 220px;

    .container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 30px;
    }
  }

  .post {
    max-width: 890px;
    width: 100%;
    padding: 40px 40px 50px;

    h3 {
      font-size: 24px;
      line-height: 24px;
    }

    p,
    li {
      font-size: 16px;
      line-height: 24px;
    }

    .image {
      max-width: 100%;
      width: 100%;
      margin-bottom: 30px;
    }

    h3 + * {
      margin-top: 12px;
    }

    p + * {
      margin-top: 30px;
    }

    ul + * {
      margin-top: 15px;
    }
  }

  .box-tags-post {
    width: 100%;
    display: flex;
    gap: 40px;
    padding: 40px;

    h4 {
      font-size: 16px;
      margin-bottom: 17px;
    }

    .share {
      max-width: 155px;
      width: 100%;
    }

    .tags {
      max-width: calc(100% - 195px);
      width: 100%;
    }

    .tag {
      display: inline-flex;
      padding: 8px 14px 7px 13px;
      font-size: 12px;
    }

    .midias {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
    }

    .link-share {
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 17px;
        height: 17px;
      }
    }
  }

  .side-bar {
    max-width: 430px;
    width: 100%;
  }

  .side-box {
    padding: 40px 40px 45px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    h4 {
      font-size: 32px;
      text-align: center;
      margin-bottom: 25px;
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
    .banner-post {
      min-height: 375px;

      .breadcrumb {
        margin-bottom: 15px;

        a,
        span {
          font-size: 15.5px;
        }
      }

      h1 {
        font-size: 43px;
        max-width: 1100px;
        line-height: 1.3;
      }
    }

    .post-content {
      padding: 60px 0 200px;
    }

    .post {
      padding: 37px 37px 45px;

      h3 {
        font-size: 23px;
        line-height: 23.5px;
      }

      p,
      li {
        font-size: 15.5px;
        line-height: 23.5px;
      }

      .image {
        margin-bottom: 28px;
      }

      h3 + * {
        margin-top: 11px;
      }

      p + * {
        margin-top: 28px;
      }
    }

    .box-tags-post {
      padding: 37px;

      h4 {
        margin-bottom: 15px;
      }

      .tag {
        padding: 8px 12px 5px;
      }

      .link-share {
        padding: 7px;

        svg {
          width: 16px;
          height: 16px;
        }
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
    .banner-post {
      min-height: 365px;

      .breadcrumb {
        margin-bottom: 15px;

        a,
        span {
          font-size: 15px;
        }
      }

      h1 {
        font-size: 39px;
        max-width: 1000px;
        line-height: 1.3;
      }
    }

    .post-content {
      padding: 50px 0 180px;

      .container {
        gap: 25px;
      }
    }

    .post {
      padding: 30px 30px 40px;

      h3 {
        font-size: 21px;
        line-height: 23px;
      }

      p,
      li {
        font-size: 15px;
        line-height: 23px;
      }

      .image {
        margin-bottom: 25px;
      }

      h3 + * {
        margin-top: 10px;
      }

      p + * {
        margin-top: 25px;
      }
    }

    .box-tags-post {
      padding: 30px;

      h4 {
        font-size: 15px;
        margin-bottom: 12px;
      }

      .tag {
        padding: 8px 10px 6px;
        font-size: 11.5px;
      }

      .link-share {
        padding: 6px;

        svg {
          width: 15px;
          height: 15px;
        }
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
    .banner-post {
      min-height: 320px;

      .breadcrumb {
        margin-bottom: 10px;

        a,
        span {
          font-size: 14.5px;
        }
      }

      h1 {
        font-size: 33.5px;
        max-width: 850px;
        line-height: 1.3;
      }
    }

    .post-content {
      padding: 40px 0 160px;

      .container {
        gap: 22px;
      }
    }

    .post {
      padding: 28px 28px 35px;
    }

    .box-tags-post {
      padding: 20px;

      h4 {
        font-size: 14.5px;
        margin-bottom: 10px;
      }

      .tag {
        padding: 7px 8px 5px;
        font-size: 11px;
      }

      .tags {
        max-width: calc(100% - 130px);
      }

      .share {
        max-width: 130px;
      }

      .link-share {
        padding: 5px;

        svg {
          width: 14px;
          height: 14px;
        }
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
    .banner-post {
      min-height: 275px;
      padding-bottom: 30px;

      .breadcrumb {
        margin-bottom: 10px;

        a,
        span {
          font-size: 14px;
        }
      }

      h1 {
        font-size: 30px;
        max-width: 750px;
      }
    }

    .post-content {
      padding: 30px 0 140px;
    }

    .post {
      padding: 25px 25px 32px;

      h3 {
        font-size: 18px;
        line-height: 22.5px;
      }

      p,
      li {
        font-size: 13.5px;
        line-height: 20.5px;
      }

      .image {
        margin-bottom: 20px;
      }

      h3 + * {
        margin-top: 7px;
      }

      p + * {
        margin-top: 20px;
      }
    }

    .side-bar {
      max-width: 260px;
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
    .side-bar {
      max-width: 240px;
    }

    .breadcrumb {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .banner-post {
      min-height: 240px;
      padding-bottom: 30px;

      .breadcrumb {
        margin-bottom: 10px;
        max-width: 100%;

        li:first-child {
          display: none;
        }

        a,
        span {
          font-size: 11px;
        }
      }

      h1 {
        font-size: 25px;
      }
    }

    .post-content {
      .container {
        flex-direction: column;
        max-width: 500px;
        gap: 25px;
      }
    }

    .post {
      padding: 23px 23px 29px;

      h3 {
        font-size: 16px;
        line-height: 21px;
      }

      p,
      li {
        font-size: 12.5px;
        line-height: 20px;
      }

      .image {
        margin-bottom: 15px;
      }

      h3 + * {
        margin-top: 6px;
      }

      p + * {
        margin-top: 15px;
      }
    }

    .side-bar {
      max-width: 100%;
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
  }

  @media only screen and (max-width: 650px) {
    .breadcrumb {
      display: none;
    }

    .banner-post {
      padding-top: 80px;
      min-height: 190px;

      h1 {
        font-size: 21px;
      }
    }

    .box-left {
      .post {
        margin-bottom: 20px;
      }
    }

    .box-tags-post {
      flex-direction: column;
      gap: 30px;

      h4 {
        font-size: 13.5px;
      }

      .tags {
        max-width: 100%;
      }

      .share {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;

        h4 {
          margin-top: 2px;
          margin-bottom: 0;
        }

        .midias {
          gap: 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .banner-post {
      padding-bottom: 18px;
      min-height: 175px;

      h1 {
        font-size: 18px;
      }
    }

    .post-content {
      padding: 20px 0 120px;
    }

    .post {
      padding: 15px 15px 20px;

      h3 {
        font-size: 15px;
        line-height: 20px;
      }

      p,
      li {
        font-size: 12px;
        line-height: 19px;
      }

      h3 + * {
        margin-top: 5px;
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
`;

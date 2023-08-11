import styled from 'styled-components'

export const Post = styled.section`
  .banner-post {
    width: 100%;
    padding: 40px 0;
    background-color: var(--primary-color);

    * {
      font-family: var(--font-blog-2);
    }

    & + * {
      margin-top: 100px;
    }
  }

  .title {
    color: #fff;
    font-size: 48px;
    line-height: 1.3;
  }

  .post-content {
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: flex-start;
    justify-content: space-between;
  }

  .box-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    * {
      font-family: var(--font-blog-2);
    }
  }

  .box-post,
  .box-tags {
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }

  .box-post {
    width: 100%;
    padding: 40px;

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

  .box-tags {
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
  }

  .link-share {
    background-color: var(--secondary-color) !important;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background-color: var(--primary-color) !important;
    }

    svg {
      fill: #fff;
      border-radius: 5px;
    }
  }

  .side-bar {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 450px;
    width: 100%;

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

  .box-tags {
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
      padding: 8px !important;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 17px;
        height: 17px;
      }
    }
  }

  .side-box {
    padding: 40px;
    display: flex;
    flex-direction: column;

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
    .banner-post + * {
      margin-top: 60px;
    }

    .post-content,
    .box-left,
    .side-bar {
      gap: 25px;
    }

    .title {
      font-size: 43px;
    }

    .box-post {
      padding: 35px;

      h3 {
        font-size: 23px;
      }

      p,
      li {
        font-size: 15.5px;
      }

      .image {
        margin-bottom: 25px;
      }

      h3 + * {
        margin-top: 10px;
      }

      p + * {
        margin-top: 28px;
      }
    }

    .box-tags {
      padding: 35px;

      h4 {
        margin-bottom: 15px;
      }

      .tag {
        padding: 8px 12px 5px;
      }
    }

    .link-share {
      padding: 7px;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    .side-box {
      padding: 35px;

      h4 {
        margin-bottom: 20px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .banner-post + * {
      margin-top: 50px;
    }

    .title {
      font-size: 39px;
    }

    .post-content,
    .box-left,
    .side-bar {
      gap: 20px;
    }

    .box-post {
      padding: 30px;

      h3 {
        font-size: 21px;
      }

      p,
      li {
        font-size: 15px;
      }

      h3 + * {
        margin-top: 10px;
      }

      p + * {
        margin-top: 25px;
      }
    }

    .box-tags {
      padding: 30px;

      h4 {
        font-size: 15px;
        margin-bottom: 12px;
      }

      .tag {
        padding: 8px 10px 6px;
        font-size: 11.5px;
      }
    }

    .link-share {
      padding: 6px;

      svg {
        width: 15px;
        height: 15px;
      }
    }

    .side-bar {
      max-width: 350px;
    }

    .side-box {
      padding: 30px;

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
    .banner-post + * {
      margin-top: 45px;
    }

    .title {
      font-size: 33.5px;
    }

    .post-content,
    .box-left,
    .side-bar {
      gap: 18px;
    }

    .box-post {
      padding: 28px;
    }

    .box-tags {
      padding: 28px;

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
    }

    .link-share {
      padding: 5px;

      svg {
        width: 14px;
        height: 14px;
      }
    }

    .side-bar {
      max-width: 300px;
    }

    .side-box {
      padding: 28px;

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
    .title {
      font-size: 30px;
    }

    .post-content,
    .box-left,
    .side-bar {
      gap: 15px;
    }

    .box-post {
      padding: 25px;

      h3 {
        font-size: 18px;
      }

      p,
      li {
        font-size: 13.5px;
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

    .box-tags {
      padding: 25px;
    }

    .side-box {
      padding: 25px;

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
    .banner-post + * {
      margin-top: 40px;
    }

    .side-bar {
      max-width: 240px;
    }
  }

  @media only screen and (max-width: 768px) {
    .title {
      font-size: 25px;
    }

    .post-content {
      flex-direction: column;
      gap: 25px;
    }

    .box-post {
      padding: 20px;

      h3 {
        font-size: 16px;
      }

      p,
      li {
        font-size: 12.5px;
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
      max-width: unset;
      gap: 25px;
    }

    .side-box {
      padding: 20px;

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
    .banner-post {
      padding: 25px 0;
    }

    .title {
      font-size: 21px;
    }

    .box-tags {
      flex-direction: column;
      gap: 30px;

      h4 {
        font-size: 13.5px;
      }

      .tags {
        max-width: unset;
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
    .banner-post + * {
      margin-top: 30px;
    }

    .title {
      font-size: 18px;
    }

    .box-post {
      padding: 15px;

      h3 {
        font-size: 15px;
      }

      p,
      li {
        font-size: 12px;
      }

      h3 + * {
        margin-top: 5px;
      }
    }

    .side-box {
      padding: 20px;
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
`

import styled from 'styled-components'

export const Destaques = styled.div`
  .side-box.destaques {
    .box-destaque {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;

      & + * {
        margin-top: 10px;
      }

      .image {
        width: 100%;
        max-width: 68px;
        height: 68px;

        img {
          border-radius: 5px;
        }
      }

      .text {
        width: 100%;
      }

      a {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        color: #000;
      }

      a:hover {
        color: var(--primary-color);
      }

      .date {
        font-size: 14px;
        font-weight: 300;

        color: #565454;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .side-box.destaques {
      .box-destaque {
        .image {
          max-width: 64px;
          height: 64px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .side-box.destaques {
      .box-destaque {
        .image {
          max-width: 60px;
          height: 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .side-box.destaques {
      .box-destaque {
        .image {
          max-width: 56px;
          height: 56px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .side-box.destaques {
      .box-destaque {
        .image {
          max-width: 52px;
          height: 52px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .side-box.destaques {
      .box-destaque {
        .image {
          max-width: 50px;
          height: 50px;
        }
      }
    }
  }
`

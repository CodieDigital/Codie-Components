import styled from 'styled-components'

export const Faqs = styled.section`
  padding-top: clamp(25px, 5vw, 80px);
  padding-bottom: clamp(25px, 5vw, 80px);

  .box-duvidas {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* Card dúvida styles: */
  .question {
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    background-color: var(--white);
    color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px 20px;
    border: none;

    .question-text {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text {
        display: flex;
        gap: 15px;

        h1 {
          line-height: 1;
          text-align: start;
        }
      }

      .number {
        color: var(--blue);
      }

      svg {
        max-width: 20px;
        width: 100%;
      }
    }

    &.active {
      .question-text {
        padding-bottom: 20px;
        border-bottom: 2px solid var(--black);
      }
    }
  }

  .answer {
    width: 100%;
    border-radius: 0 0 10px 10px;
    background-color: var(--white);
    padding: 20px;
    -webkit-transition: 0.4s;

    p {
      line-height: 1.3;
      color: var(--lightgray);
    }
  }

  .disabled {
    display: none;
  }

  .active {
    display: flex;
  }


  /* Responsivos */
  @media only screen and (max-width: 1600px) {
    .question {
      padding: 26px 18px;

      .question-text {
        svg {
          max-width: 19px;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .box-duvidas {
      gap: 15px;
    }

    .question {
      padding: 25px 17px;

      .question-text {
        svg {
          max-width: 18px;
        }
      }
    }

    .answer {
      p {
        line-height: 1.2;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .question {
      padding: 24px 16px;

      .question-text {
        svg {
          max-width: 17px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .box-duvidas {
      gap: 12px;
    }

    .question {
      padding: 23px 15px;

      .question-text {
        svg {
          max-width: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .question {
      padding: 22px 14px;

      .question-text {
        svg {
          max-width: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .box-duvidas {
      gap: 10px;
    }

    .question {
      padding: 21px 12px;

      .question-text {
        svg {
          max-width: 14px;
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .question {
      padding: 20px 11px;

      .question-text {
        gap: 8px;

        .text {
          gap: 10px;
        }

        svg {
          max-width: 12px;
        }
      }
    }

    .answer {
      p {
        line-height: 1.1;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .box-duvidas {
      gap: 8px;
    }

    .question {
      padding: 19px 10px;
      
      .question-text {
        svg {
          max-width: 11px;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .box-duvidas {
      gap: 5px;
    }
  }
`

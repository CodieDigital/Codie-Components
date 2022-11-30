import styled from 'styled-components'

interface FaqsProps {
  bgColor?: string
  questionColor?: string
  answerColor?: string
  numberColor?: string
  padding?: boolean
  middleLineColor?: string
}

export const Faqs = styled.div<FaqsProps>`
  padding-top: ${(props) => (props.padding === true ? 'clamp(25px, 5vw, 80px)' : '0')};
  padding-bottom: ${(props) => (props.padding === true ? 'clamp(25px, 5vw, 80px)' : '0')};

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
    background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
    color: ${(props) => (props.questionColor ? props.questionColor : '#000')};
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
        color: ${(props) => (props.numberColor ? props.numberColor : 'blue')};
      }

      svg {
        max-width: 20px;
        width: 100%;
        fill: ${(props) => (props.questionColor ? props.questionColor : '#000')};
      }
    }

    &.active {
      .question-text {
        padding-bottom: 20px;
        border-bottom: 2px solid ${(props) => (props.middleLineColor ? props.middleLineColor : '#000')};
      }
    }
  }

  .answer {
    width: 100%;
    border-radius: 0 0 10px 10px;
    background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
    padding: 20px;
    -webkit-transition: 0.4s;

    p {
      line-height: 1.3;
      color: ${(props) => (props.answerColor ? props.answerColor : '#000')};
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
      padding: 20px 10px;
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

    .answer {
      padding: 20px 10px 0;
    }
  }
`

import React, { useState } from 'react'

import { Container } from '../../data/container'

import * as S from './styles'

interface FaqsProps {
  questionsList: IFaqs[]
  bgColor?: string
  questionColor?: string
  answerColor?: string
  numberColor?: string
  padding?: boolean
  middleLineColor?: string
  fontFamily?: string
}

interface IFaqs {
  id: number
  titulo: string
  descricao: string
}

export const Faqs = ({
  questionsList,
  answerColor,
  bgColor,
  numberColor,
  padding,
  questionColor,
  middleLineColor,
  fontFamily,
}: FaqsProps) => {
  return (
    <S.Faqs
      bgColor={bgColor}
      questionColor={questionColor}
      answerColor={answerColor}
      numberColor={numberColor}
      padding={padding}
      middleLineColor={middleLineColor}
    >
      <Container>
        <div className='box-duvidas'>
          {questionsList.map((cardFaq, i) => {
            i = i + 1
            const [isActive, setIsActive] = useState(false)

            const onClick = () => setIsActive(!isActive)

            return (
              <div key={cardFaq.id + cardFaq.titulo} className='card-duvida'>
                <button className={`question ${isActive ? 'active' : 'disabled2'}`} onClick={onClick}>
                  <span className='question-text'>
                    <span className='text'>
                      <span className={`link-4${fontFamily} number`}>{i <= 9 ? '0' + i : i}</span>
                      <h1 className={`title-8${fontFamily}`}>{cardFaq.titulo}</h1>
                    </span>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='4'
                      viewBox='0 0 20 4'
                      aria-label='botao para fechar a dúvida'
                      className={`${isActive ? 'active' : 'disabled'}`}
                    >
                      <g>
                        <g>
                          <path d='M18.755.87H1.245a1.241 1.241 0 1 0-.88 2.125c.226.224.538.364.88.364h17.51C19.44 3.36 20 2.8 20 2.114S19.44.87 18.755.87z' />
                        </g>
                      </g>
                    </svg>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      aria-label='botao para abrir a dúvida'
                      className={`${isActive ? 'disabled' : 'active'}`}
                    >
                      <g>
                        <g>
                          <path d='M18.755 8.755h-7.51v-7.51C11.245.56 10.685 0 10 0S8.755.56 8.755 1.245v7.51h-7.51C.56 8.755 0 9.315 0 10c0 .342.14.654.366.88.225.225.537.365.88.365h7.509v7.51c0 .342.14.654.366.88.225.225.537.365.879.365.685 0 1.245-.56 1.245-1.245v-7.51h7.51c.685 0 1.245-.56 1.245-1.245s-.56-1.245-1.245-1.245z' />
                        </g>
                      </g>
                    </svg>
                  </span>

                  <div
                    className={`paragraph-1${fontFamily} answer ${isActive ? 'active' : 'disabled'}`}
                    dangerouslySetInnerHTML={{ __html: cardFaq.descricao }}
                  ></div>
                </button>
              </div>
            )
          })}
        </div>
      </Container>
    </S.Faqs>
  )
}

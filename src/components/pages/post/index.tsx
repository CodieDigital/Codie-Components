import Link from 'next/link'
import React from 'react'
import { NextImage } from '../../data/NextImage'
import { PostPageComponentProps } from './interfaces'

import * as S from './styles'

export default function PostPageComponent({
  tags,
  bgBanner,
  fontFamily,
  data,
  baseImage,
  baseImageGallery,
  isBaseUrl,
  isBaseImageGallery,
}: PostPageComponentProps) {
  return (
    <S.PostPageComponent bgBanner={bgBanner}>
      <div className='bg'></div>

      <div className='box-post'>
        <h1 className={`title-5${fontFamily}-bold`}>{data.detail.titulo}</h1>

        <h2 className={`title-8${fontFamily}-bold`}>{data.detail.subtitulo}</h2>

        <div
          className={`paragraph-3${fontFamily}-medium text`}
          dangerouslySetInnerHTML={{ __html: data.detail.descricao }}
        ></div>

        <div className='box-image'>
          <NextImage
            baseImage={baseImage}
            baseImageGallery={baseImageGallery}
            isBaseUrl={isBaseUrl}
            isBaseImageGallery={isBaseImageGallery}
            src={data.detail.imagem}
            alt={`imagem que representa um ${data.detail.titulo}`}
          />
        </div>
      </div>

      <div className='box-tags'>
        <div className='left'>
          <h2 className={`title-11${fontFamily}-bold`}>tags</h2>
          <ul className='tags'>
            {tags.map(({ id, title, href }) => {
              return (
                <li key={id}>
                  <Link href={href} className={`link-4${fontFamily}-medium`}>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='right'>
          <h2 className={`title-11${fontFamily}-bold`}>compartilhe</h2>
          <ul className='social-icons'>
            <li>
              <Link href='/' aria-label='ícone do facebook'>
                <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20'>
                  <g>
                    <g>
                      <path d='M20.473 10c0-5.524-4.476-10-10-10-5.525 0-10 4.476-10 10 0 4.991 3.656 9.128 8.437 9.879V12.89H6.37V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.239.195 2.239.195v2.46h-1.262c-1.241 0-1.629.77-1.629 1.56V10h2.773l-.443 2.89h-2.33v6.989c4.78-.75 8.438-4.888 8.438-9.88z' />
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
            <li>
              <Link href='/' aria-label='ícone do linkedin'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
                  <g>
                    <g>
                      <path d='M17.138 17.143h-2.964V12.5c0-1.107-.022-2.531-1.54-2.531-1.545 0-1.781 1.205-1.781 2.45v4.724H7.888V7.598h2.844v1.304h.04c.397-.75 1.366-1.54 2.808-1.54 3 0 3.558 1.977 3.558 4.549zM4.545 6.295a1.72 1.72 0 0 1 0-3.438c.946 0 1.718.772 1.718 1.719 0 .95-.768 1.719-1.718 1.719zM3.062 17.143V7.598h2.97v9.545zM18.553 0H1.406C.62 0-.018.647-.018 1.442v17.116C-.018 19.353.62 20 1.406 20h17.147c.786 0 1.429-.647 1.429-1.442V1.442C19.982.647 19.339 0 18.553 0z' />
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
            <li>
              <Link href='/' aria-label='ícone do whattsapp'>
                <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20'>
                  <g>
                    <g>
                      <path d='M15.555 13.442c-.231.573-1.276 1.096-1.737 1.12-.46.024-.473.357-2.984-.734-2.51-1.09-4.02-3.743-4.139-3.914-.119-.17-.972-1.386-.926-2.61.046-1.223.716-1.8.955-2.04a.961.961 0 0 1 .68-.287c.198-.003.326-.006.472 0 .147.005.366-.03.556.475.19.505.645 1.747.703 1.874.058.127.094.274.005.436-.09.163-.136.265-.266.406-.131.14-.276.314-.393.422-.13.119-.266.248-.13.503.138.254.61 1.087 1.33 1.774.925.882 1.723 1.175 1.969 1.308.246.135.393.12.546-.041.152-.16.653-.703.83-.945.176-.243.342-.195.569-.104.226.092 1.435.739 1.681.873.246.133.41.202.47.308.058.106.04.604-.191 1.176zM10.673 0C5.25 0 .855 4.362.855 9.743c0 1.84.514 3.562 1.408 5.03L.491 20l5.436-1.727a9.838 9.838 0 0 0 4.746 1.212c5.423 0 9.818-4.362 9.818-9.742C20.491 4.362 16.096 0 10.673 0z' />
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
            <li>
              <Link href='/' aria-label='ícone do twitter'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='17' viewBox='0 0 20 17'>
                  <g>
                    <g>
                      <path d='M17.945 4.27c.013.179.013.356.013.534 0 5.419-4.125 11.662-11.663 11.662-2.322 0-4.48-.672-6.294-1.84.33.038.647.05.99.05 1.916 0 3.68-.646 5.089-1.75a4.106 4.106 0 0 1-3.833-2.843c.254.038.508.063.774.063.368 0 .736-.05 1.079-.14A4.1 4.1 0 0 1 .813 5.985v-.05c.546.304 1.18.494 1.853.52A4.096 4.096 0 0 1 .838 3.04c0-.762.203-1.46.559-2.069a11.651 11.651 0 0 0 8.451 4.29 4.627 4.627 0 0 1-.101-.94A4.097 4.097 0 0 1 13.846.224a4.09 4.09 0 0 1 2.995 1.294 8.07 8.07 0 0 0 2.601-.99 4.088 4.088 0 0 1-1.802 2.26A8.217 8.217 0 0 0 20 2.151a8.811 8.811 0 0 1-2.055 2.119z' />
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </S.PostPageComponent>
  )
}

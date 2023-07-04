import React from 'react'
import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Error, Button, BoxSocials } from '..'

import { CloseIcon, ArrowRightIcon } from '../../icons'

import { MenuMobileProps } from './interfaces'

import * as S from './styles'

export function MenuMobile({
  menu,
  data,
  defaultFonts,
  defaultButton,
  setStateMenu,
  defaultBoxSocials,
}: MenuMobileProps) {
  const [dropdown, setDropdown] = useState(false)
  const router = useRouter()

  const urlPage = router.query.url
  return (
    <Error name='menu-mobile'>
      <S.Menu className={`menuMobile ${menu ? 'active' : ''}`}>
        <div className='filter' onClick={() => setStateMenu(false)}></div>

        <div className='menu-mobile'>
          <div className='close ' onClick={() => setStateMenu(false)}>
            <h3
              className={`${defaultFonts?.title ? defaultFonts.title : 'title-3'} ${
                defaultFonts?.isUppercase ? 'uppercase' : ''
              }`}
            >
              Mapa do site
            </h3>

            <CloseIcon />
          </div>

          <nav>
            {data.map((categoria, index) =>
              categoria.categorias ? (
                <span
                  key={'link-menu-' + categoria.id + index}
                  className={`dropdown ${dropdown ? 'active' : ''} ${
                    defaultFonts?.link ? defaultFonts.link : 'link-3'
                  } ${defaultFonts?.isUppercase ? 'uppercase' : ''}`}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <div className='title'>
                    {categoria.link}

                    <ArrowRightIcon />
                  </div>

                  {categoria.categorias && (
                    <div className='subMenu-bg'>
                      {categoria.categorias?.map((subCategoria) => (
                        <Link
                          key={subCategoria.id + subCategoria.titulo}
                          href={{
                            pathname: '/servico/[url]',
                            query: {
                              url: subCategoria.url,
                            },
                          }}
                          className={`sub-link ${defaultFonts?.link ? defaultFonts.link : 'link-3'} ${
                            defaultFonts?.isUppercase ? 'uppercase' : ''
                          } ${urlPage === subCategoria.url ? 'active' : ''}`}
                          onClick={() => setStateMenu(false)}
                        >
                          {subCategoria.titulo}
                        </Link>
                      ))}
                    </div>
                  )}
                </span>
              ) : (
                <Link
                  key={'link-menu-' + categoria.id}
                  href={categoria.href}
                  className={`link ${defaultFonts?.link ? defaultFonts.link : 'link-3'} ${
                    defaultFonts?.isUppercase ? 'uppercase' : ''
                  } ${router.pathname === categoria.href ? 'active' : ''}`}
                  onClick={() => setStateMenu(false)}
                >
                  {categoria.link}
                </Link>
              ),
            )}

            {defaultButton && <Button buttonData={defaultButton} />}

            <div className='border'></div>

            {defaultBoxSocials && (
              <>
                <h3
                  className={`${defaultFonts?.title ? defaultFonts.title : 'title-3'} ${
                    defaultFonts?.isUppercase ? 'uppercase' : ''
                  }`}
                >
                  Contato
                </h3>

                <BoxSocials defaultData={defaultBoxSocials} />
              </>
            )}
          </nav>
        </div>
      </S.Menu>
    </Error>
  )
}
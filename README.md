# Codie Components Web

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

## Installation:

```bash
npm install
```

or

```bash
yarn
```

## Usage :

Add components in aplication:

```js
import { MeuComponente } from 'codieweb/meucomponente'

export function Componente() {
  return <MeuComponente />
}
```

## Components documentation :

Basic-carousel:

```js
import { SwiperOptions } from 'swiper'

import { BasicCarousel, Container } from 'codieweb/dist/cjs/components/data/'

export function Componente() {
  // Configuração do swiper que você deve criar.
  const SwiperConfigurations: SwiperOptions = {
    breakpoints: { 1024: { slidesPerView: 1, spaceBetween: 30 } },
    pagination: true,
    navigation: {
      nextEl: 'next-button-blog',
      prevEl: 'prev-button-blog',
    },
  }

  return (
    <Container>
      <BasicCarousel
        iconColor='red' // Cor do icone de seta de navegação do swiper.
        component={Card} // Componente que vai ser renderizado em cada slide.
        list={home.blogs} // Lista que vai ser percorrida.
        swiperConfigurations={SwiperConfigurations} // Configurações do swiper.
      />
    </Container>
  )
}
```

## Para públicar o projeto no npm:

npm publish --access-public

[npm-url]: https://www.npmjs.com/package/my-react-typescript-package
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
[github-license]: https://img.shields.io/github/license/gapon2401/my-react-typescript-package
[github-license-url]: https://github.com/
[npm-typescript]: https://img.shields.io/npm/types/my-react-typescript-package

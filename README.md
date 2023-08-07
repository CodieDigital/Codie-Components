# reidoecommerce-lib

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
import { MeuComponente } from 'reidoecommerce/meucomponente'

export function Componente() {
    return <MeuComponente />
}

```

## Para públicar o projeto no npm: 

npm publish --access-public

[npm-url]: https://www.npmjs.com/package/my-react-typescript-package
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
[github-license]: https://img.shields.io/github/license/gapon2401/my-react-typescript-package
[github-license-url]: https://github.com/ReiDoEcommerce/npm-ecommerce
[npm-typescript]: https://img.shields.io/npm/types/my-react-typescript-package


tsConfigurations 

{
  "include": ["src"],
  "exclude": ["dist", "node_modules"],
  "compilerOptions": {
    "module": "esnext",
    "lib": ["dom", "esnext"],
    "importHelpers": true,
    "declaration": true,
    "sourceMap": true,
    "rootDir": "./src",
    "outDir": "./dist/cjs",
    "strict": false,
    "noImplicitReturns": false,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "moduleResolution": "node",
    "jsx": "react",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "allowSyntheticDefaultImports": true
  }
}
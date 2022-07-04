# react-arweave-image

Easily render images from Arweave.

## Installation

```bash
npm install react-arweave-image

yarn add react-arweave-image
```

## Getting started

```tsx
import { ArweaveImage } from 'react-arweave-image';

const Page = () => {
  return (
    <>
      {/* pass image hash */}
      <ArweaveImage hash='o-z1Ea6xXyERnujaFyMZwHlsr2SLwnVyDqjP88V2zeE'>
      
      {/* you can also pass in *any* props you can pass to a native HTML `img` tag */}
      <ArweaveImage hash='o-z1Ea6xXyERnujaFyMZwHlsr2SLwnVyDqjP88V2zeE' alt='my image' className='mt-2 rounded' onClick={() => {}} />
    </>
  )
}
```

Made by [pbillingsby](https://twitter.com/pbillingsby_eth) with major help from [Dhaiwat](https://twitter.com/dhaiwat10)
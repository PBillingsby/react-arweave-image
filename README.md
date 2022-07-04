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
      <ArweaveImage hash='krcFgAxEgafePxlPlcoBkrv0_Kjc2Scnqccqry6HnPY'>
      
      {/* you can also pass in *any* props you can pass to a native HTML `img` tag */}
      <ArweaveImage hash='krcFgAxEgafePxlPlcoBkrv0_Kjc2Scnqccqry6HnPY' alt='my image' className='mt-2 rounded' onClick={() => {}} />
    </>
  )
}
```

Made by [Dhaiwat](https://twitter.com/dhaiwat10)! :)
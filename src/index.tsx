import React, { FC, HTMLAttributes } from 'react';

export interface IArweaveImageProps extends HTMLAttributes<HTMLImageElement> {
  hash: string;
}

export const ArweaveImage: FC<IArweaveImageProps> = ({
  hash,
  ...props
}) => {
  return <img src={`https://arweave.net/${hash}`} {...props} />;
};
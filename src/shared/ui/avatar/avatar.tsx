import { FC } from 'react'
import { NextImage } from '../next-image'

export interface AvatarProps {
  image: string
}

export const Avatar: FC<AvatarProps> = ({ image }) => {
  return <NextImage width={24} height={24} className='rounded-[50%]' src={image} />
}

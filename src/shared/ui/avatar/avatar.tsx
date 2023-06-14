import { FC } from 'react'
import { NextImage } from '../next-image'

export interface AvatarProps {
  image: string
  width: number
  height: number
  className?: string
}

export const Avatar: FC<AvatarProps> = ({ image, width, height, className }) => {
  return (
    <div className={className}>
      <NextImage width={width} height={height} className='rounded-[50%] cursor-pointer' src={image} />
    </div>
  )
}

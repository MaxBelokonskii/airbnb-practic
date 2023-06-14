import { FC, useState } from 'react'
import { Avatar } from '../avatar'
import { Label } from '../label'
import { NextImage } from '../next-image'
import Like from '@/shared/assets/icons/common/like.svg'
import Views from '@/shared/assets/icons/common/views.svg'

export interface CardProps {
  title: string
  image: string
  avatar: string
  username: string
  countLikes: string
  countViews: string
}

export const Card: FC<CardProps> = ({ title, image, avatar, username, countLikes, countViews }) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <div className=''>
      <NextImage width={270} height={200} src={image} className='rounded-[4px] mb-small' />
      <div className='flex justify-between max-w-[270px]'>
        <div className='flex items-center gap-2'>
          <Avatar width={24} height={24} image={avatar} />
          <p className='text-dark-blue text-[10px]'>{username}</p>
          <Label title={title} />
        </div>
        <div className='flex items-center gap-[5px]'>
          <Like
            onClick={() => setIsLiked(prev => !prev)}
            className={` cursor-pointer w-3.5 ${isLiked ? 'fill-brown-grey' : 'fill-text'}`}
          />
          <p className='text-[10px]'>{countLikes}</p>
          <Views className='w-3.5 fill-text' />
          <p className='text-[10px]'>{countViews}</p>
        </div>
      </div>
    </div>
  )
}

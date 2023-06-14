import React, { FC } from 'react'
import HamburgerMenu from '@/shared/assets/icons/common/hamburger-menu.svg'
import Logo from '@/shared/assets/icons/common/logo.svg'
import Link from 'next/link'
import { Button } from '@/shared/ui'
import Search from '@/shared/assets/icons/common/search.svg'
import Work from '@/shared/assets/icons/common/work.svg'
import Message from '@/shared/assets/icons/common/message.svg'
import Activity from '@/shared/assets/icons/common/activity.svg'
import { Avatar } from '@/shared/ui/avatar'

export const Header: FC = () => {
  return (
    <header className='top-0 z-20 flex flex-row main:min-w-[1440px] justify-between px-8 items-center h-20 bg-white'>
      <HamburgerMenu className='block w-6 fill-text main:hidden' />
      <div className='flex'>
        <Logo className='block' />
        <div className='hidden gap-5 ml-5 text-text main:flex whitespace-nowrap'>
          <Link href='/inspiration'>
            <a className='no-underline'>
              <p className='text-h3'>Inspiration</p>
            </a>
          </Link>
          <Link href='/findWork'>
            <a className='no-underline'>
              <p className='text-h3 '>Find Work</p>
            </a>
          </Link>
          <Link href='/learnDesign'>
            <a className='no-underline'>
              <p className='text-h3 '>Learn Design</p>
            </a>
          </Link>
          <Link href='/goPro'>
            <a className='no-underline'>
              <p className='text-h3 '>Go Pro</p>
            </a>
          </Link>
          <Link href='/hireDesigners'>
            <a className='no-underline'>
              <p className='text-h3 '>Hire Designers</p>
            </a>
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-end w-full gap-5 max-w-[100px] main:max-w-[400px] '>
        <Button icon={<Search />} className='hidden main:flex' color='secondary'>
          <p className='text-grey text-h3'>Search</p>
        </Button>
        <Work />
        <Message />
        <Activity />
        <Avatar
          image='https://drasler.ru/wp-content/uploads/2019/05/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-027.jpg'
          width={32}
          height={32}
          className='hidden main:block'
        />
        <Button className='hidden main:flex' color='primary'>
          Upload
        </Button>
      </div>
    </header>
  )
}

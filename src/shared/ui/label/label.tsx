import { FC } from 'react'

export interface LabelProps {
  title: string
}

export const Label: FC<LabelProps> = ({ title }) => {
  return (
    <div className='bg-grey max-w-[27px] max-h-[14px] rounded-[2px]'>
      <p className='text-white leading-[9.78px] py-[2px] px-[3px] text-[8px]'>{title}</p>
    </div>
  )
}

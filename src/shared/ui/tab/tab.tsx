import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import { OptionalLinkWrapper } from '@/shared/lib'
import ErrorIcon from '@/shared/assets/icons/common/tab-error.svg'
import CloseIcon from '@/shared/assets/icons/common/close.svg'
import cn from 'classnames'
import { Button } from '@/shared/ui'

export interface TabProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  href?: string
  active?: boolean
  error?: boolean
  onRemove?: () => void
}

export const Tab: FC<TabProps> = ({ children, href, error, className, active, onRemove, ...rest }) => {
  return (
    <OptionalLinkWrapper href={href}>
      <button
        type='button'
        className={cn(
          'flex items-center bg-white text-text rounded-lg outline-none transition-colors px-4 py-2.5 hover:bg-white-secondary hover:text-brown-grey',
          className,
          {
            '!text-brown-grey bg-white-secondary bg-border': active,
            '!text-red': error,
            'gap-x-3.5': onRemove || error,
          }
        )}
        {...rest}
      >
        <h2>{children}</h2>
        {onRemove && (
          <Button
            variant='icon'
            data-testid='remove-tab'
            onClick={e => {
              e.stopPropagation()
              onRemove()
            }}
          >
            <CloseIcon className='stroke-currentColor' />
          </Button>
        )}
        {error && <ErrorIcon className='fill-red' />}
      </button>
    </OptionalLinkWrapper>
  )
}

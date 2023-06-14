import { ButtonHTMLAttributes, ReactElement, forwardRef } from 'react'
import cn from 'classnames'
import Loading from '@/shared/assets/icons/common/loading.svg'
import { OptionalLinkWrapper } from '@/shared/lib'
export type Variant = 'contained' | 'outlined' | 'text' | 'icon' | 'border-icon'
type Color = 'primary' | 'secondary'
export type Size = 'small' | 'medium' | 'large'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  color?: Color
  fullWidth?: boolean
  loading?: boolean
  className?: string
  childrenClassName?: string
  href?: string
  newTab?: boolean
  icon?: ReactElement
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'contained',
      color = 'primary',
      size = 'medium',
      fullWidth,
      type = 'button',
      className,
      childrenClassName,
      loading,
      icon,
      ...rest
    },
    ref
  ) => {
    return (
      <OptionalLinkWrapper {...rest} href={rest.href}>
        <button
          ref={ref}
          className={cn(
            'group relative flex items-center justify-center rounded-lg disabled:cursor-not-allowed disabled:pointer-events-none transition-colors py-small px-base',
            {
              'bg-pink text-white': variant === 'contained' && color === 'primary',
              'bg-white-secondary text-black': variant === 'contained' && color === 'secondary',
              'bg-white border border-grey text-black': variant === 'outlined' && color === 'secondary',
              'bg-white border border-grey text-text': variant === 'outlined' && color === 'primary',
              'px-[60px]': size === 'large' && variant !== 'icon',
              'gap-5': icon,
            },
            className
          )}
          type={type}
          {...rest}
        >
          {
            <Loading
              data-testid='loading-button-icon'
              className={cn('absolute animate-spin group-disabled:fill-grey', {
                'fill-white': color === 'primary' && variant !== 'contained',
                'fill-black':
                  (color === 'primary' && variant === 'contained') ||
                  (color === 'secondary' && variant === 'text') ||
                  variant === 'icon',
                'fill-text': color === 'secondary' && (variant === 'outlined' || variant === 'border-icon'),
                hidden: !loading,
              })}
            />
          }
          {icon && icon}
          <span
            data-testid='button-children-wrapper'
            className={cn(
              'no-underline transition-opacity duration-100',
              {
                'opacity-0': loading,
              },
              childrenClassName
            )}
          >
            {children}
          </span>
        </button>
      </OptionalLinkWrapper>
    )
  }
)

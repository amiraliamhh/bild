import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'

type ButtonAttrs = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({
  children, className = '', type = 'button', ...rest
}: PropsWithChildren<ButtonAttrs>) => (
  <button {...rest} className={`h-8 bg-green-500 text-sm text-white ${className}`} type={type}>{children}</button>
)

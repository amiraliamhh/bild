import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'

type ButtonAttrs = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({
  children, className = '', type = 'button', ...rest
}: PropsWithChildren<ButtonAttrs>) => (
  <button {...rest} className={`h-8 bg-green-500 hover:bg-green-600 text-sm text-white font-semibold ${className}`} type={type}>{children}</button>
)

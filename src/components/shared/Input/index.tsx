import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({ className, type, ...attrs }: InputProps) => (
  <input
    className={`w-[350px] max-w-full h-9 px-[.925rem] border-2 border-zinc-500 rounded-sm placeholder:text-neutral-500 ${className}`}
    type={type}
    {...attrs}
  />
)

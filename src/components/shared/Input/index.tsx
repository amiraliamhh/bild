import {
  DetailedHTMLProps, FormEvent, InputHTMLAttributes, useState,
} from 'react'

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  errorMessage?: string
}

export const Input = ({
  className, type, errorMessage, id, ...attrs
}: InputProps) => {
  const [error, setError] = useState('')

  const customErrorMessage = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()

    const el = evt.target as HTMLInputElement
    if (el.validity.patternMismatch) {
      setError(errorMessage || '')
    }
    if (el.validity.valueMissing) {
      setError('This field is required')
    }
  }

  return (
    <>
      <input
        className={`w-[350px] max-w-full h-9 px-[.925rem] border-2 border-zinc-500 rounded-sm placeholder:text-neutral-500 ${className}`}
        type={type}
        aria-invalid={!!error}
        aria-describedby={`${id}-error`}
        id={id}
        onInvalid={customErrorMessage}
        onChange={() => { setError('') }}
        {...attrs}
      />
      {
        error && <span className='inline-block mt-2 text-red-500' id={`${id}-error`}>{error}</span>
      }
    </>
  )
}

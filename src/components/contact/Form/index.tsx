import {
  FormEvent, useEffect, useRef, useState,
} from 'react'
import axios from 'axios'

import { Input, Button } from '@shared'
import { sleep } from '@/hooks'

import { MessageSent } from './MessageSent'

interface FormProps {
  className?: string
}

// eslint-disable-next-line no-useless-escape
const emailRegex = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'

export const Form = ({ className = '' }: FormProps) => {
  const [showTextareaWarning, setShowTextareaWarning] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sentMessage, setSentMessage] = useState('')
  const textarea = useRef<HTMLTextAreaElement>(null)

  const sendMessage = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const data = new FormData(evt.currentTarget)
    const values = Object.fromEntries(data.entries()) as any

    try {
      setLoading(true)
      // simulate network request
      await sleep()
      await axios.post('/messages', values)
      setSentMessage(values.message)
      document.documentElement.scrollTo(0, 500)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const handleMessageLengthExceed = (e: KeyboardEvent) => {
      const el = e.currentTarget as HTMLTextAreaElement
      if (el.value.length === 1e3) {
        setShowTextareaWarning(true)
      }
    }

    textarea.current?.addEventListener('keypress', handleMessageLengthExceed)

    return () => {
      textarea.current?.removeEventListener('keypress', handleMessageLengthExceed)
    }
  }, [])

  return (
    <form className={`${className} lg:pr-8`} onSubmit={sendMessage}>
      <h3 className='text-2xl font-semibold text-zinc-500 uppercase'>Contact Form</h3>
      {
        sentMessage
          ? <MessageSent className='mt-4' sendAgain={() => { setSentMessage('') }} message={sentMessage} />
          : (
            <>
              <p className='mt-4 text-sm text-zinc-500 leading-[1.375rem]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec tincidunt dolor et tristique bibendum.
                Aenean sollicitudin vitae dolor ut posuere.
              </p>
              <Input
                className='mt-4 block'
                type='text'
                name='name'
                aria-label='Name'
                placeholder='Name'
                id='contact-name'
                required
              />
              <Input
                className='mt-4 block'
                type='email'
                name='email'
                aria-label='Email'
                placeholder='Email Address'
                errorMessage='Please enter a valid email'
                pattern={emailRegex}
                id='contact-email'
                required
              />
              <Input
                className='mt-4 block'
                type='text'
                name='subject'
                aria-label='Subject'
                placeholder='Subject'
                id='contact-subject'
              />
              <div>
                <textarea
                  name='message'
                  aria-label='Message Content'
                  className='w-full max-w-[560px] h-[220px] border-2 border-zinc-500 rounded-sm mt-4 p-3'
                  maxLength={1000}
                  required
                  ref={textarea}
                />
                {
          showTextareaWarning
          && <span className='text-orange-500'>Maximum allowed characters for this field is 1000 characters</span>
        }
              </div>
              <Button className='uppercase px-[0.875rem] mt-3' type='submit'>
                {
          loading
            ? <div className='w-5 h-5 animate-spin border-2 border-white rounded-full border-r-0 border-t-0' />
            : 'Send Message'
        }
              </Button>
            </>
          )
      }
    </form>
  )
}

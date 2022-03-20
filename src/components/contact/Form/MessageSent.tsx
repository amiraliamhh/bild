import { Button } from '@shared'

interface MessageSentProps {
  className?: string
  message: string
  sendAgain: () => void
}

export const MessageSent = ({ className = '', message, sendAgain }: MessageSentProps) => (
  <div className={`${className}`}>
    <p className='text-green-500'>Your message was sent successfully! We&apos;ll get back to you as soon as we can!</p>
    <p className='mt-4 text-zinc-500'>Your message:</p>
    <p className='mt-1 p-4 rounded-xl bg-slate-50 text-zinc-500 font-semibold'>
      {message}
    </p>
    <Button className='px-4 mt-4' onClick={sendAgain}>
      Send another message!
    </Button>
  </div>
)

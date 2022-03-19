import { Input, Button } from '@shared'

interface FormProps {
  className?: string
}

export const Form = ({ className = '' }: FormProps) => (
  <form className={`${className} lg:pr-8`}>
    <h3 className='text-2xl font-semibold text-zinc-500 uppercase'>Contact Form</h3>
    <p className='mt-4 text-sm text-zinc-500 leading-[1.375rem]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae dolor ut posuere.
    </p>
    <Input className='mt-4 block' name='name' placeholder='Name' />
    <Input className='mt-4 block' name='email' placeholder='Email Address' />
    <Input className='mt-4 block' name='subject' placeholder='Subject' />
    <div>
      <textarea className='w-full max-w-[560px] h-[220px] border-2 border-zinc-500 rounded-sm mt-4 p-3' />
    </div>
    <Button className='uppercase px-[0.875rem] mt-3'>
      Send Message
    </Button>
  </form>
)

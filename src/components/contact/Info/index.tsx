interface ContactInfoProps {
  className?: string
}

export const ContactInfo = ({ className = '' }: ContactInfoProps) => (
  <section className={`${className}`}>
    <h3 className='text-2xl font-semibold text-zinc-500 uppercase'>Contact Info</h3>
    <p className='mt-4 text-zinc-500 text-sm'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.
    </p>
    <div className='mt-4'>
      <ul>
        <li className='text-sm'>
          <span className='font-semibold text-zinc-500'>email:</span>
          <a className='ml-2 text-green-500' href='mailto: info@display.com'>
            info@display.com
          </a>
        </li>
        <li className='text-sm text-zinc-500 mt-1'>
          <span className='font-semibold'>phone:</span>
          <a className='ml-2' href='tel: 1.306.222.4545'>
            1.306.222.4545
          </a>
        </li>
      </ul>
      <address className='not-italic text-sm text-zinc-500 mt-4'>
        222 2nd Ave South
        {' '}
        <br />
        Saskabush, SK   S7M 1T6
      </address>
    </div>
    <section className='mt-4'>
      <h4 className='text-2xl font-semibold text-zinc-500 uppercase'>Store Hours</h4>
      <table className='mt-4 w-full text-sm text-zinc-500 leading-[1.375rem]'>
        <tbody>
          <tr>
            <td className='w-full'>Monday - Thursday</td>
            <td className='whitespace-nowrap'>8 am - 5 pm</td>
          </tr>
          <tr>
            <td className='w-full'>Friday</td>
            <td className='whitespace-nowrap'>8 am - 6 pm</td>
          </tr>
          <tr>
            <td className='w-full'>Saturday</td>
            <td className='whitespace-nowrap'>9 am - 5 pm</td>
          </tr>
          <tr>
            <td className='w-full'>Sunday & Holidays</td>
            <td className='whitespace-nowrap'>Closed</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
)

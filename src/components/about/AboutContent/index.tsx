import { PropsWithChildren } from 'react'

interface StatementsProps {
  title: string
}

const Statements = ({ children, title }: PropsWithChildren<StatementsProps>) => (
  <section className='col-span-12 md:col-span-6 mt-9 flex flex-col items-center'>
    <h2 className='text-center md:text-left text-2xl font-semibold text-zinc-500 uppercase'>{title}</h2>
    <p className='max-w-md md:max-w-full justify-self-center text-center md:text-left mt-4 text-sm leading-[1.375rem] text-zinc-500'>{children}</p>
  </section>
)

export const AboutContent = () => (
  <section className='container mx-auto mt-9 grid grid-cols-12 gap-4'>
    <img src='/about@2x.jpg' alt='About Me' className='col-span-12 md:col-span-5 justify-self-center' width='380' height='260' />
    <div className='col-span-12 md:col-span-7 px-2 text-sm text-zinc-500 leading-[1.375rem] flex flex-col justify-between text-center md:text-left max-w-md md:max-w-full justify-self-center'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eu erat lacus, vel congue mauris. Fusce velit
        justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
        non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla
        sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
        id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
      </p>
      <p className='mt-3 lg:mt-0'>
        Nullam tellus turpis, fringilla sit amet congue ut, luctus a
        nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
        facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis
        ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <Statements title='Mission Statement'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque eu erat lacus, vel congue mauris. Fusce velit
      justo, faucibus eu sagittis ac, gravida quis tortor.
      Suspendisse non urna mi, quis tincidunt eros. Nullam tellus
      turpis, fringilla sit amet congue ut, luctus a nulla. Donec
      sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
      Pellentesque pellentesque arcu a elit congue lacinia.
    </Statements>
    <Statements title='Fun Facts'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque eu erat lacus, vel congue mauris. Fusce velit
      justo, faucibus eu sagittis ac, gravida quis tortor.
      Suspendisse non urna mi, quis tincidunt eros. Nullam tellus
      turpis, fringilla sit amet congue ut, luctus a nulla. Donec
      sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
      Pellentesque pellentesque arcu a elit congue lacinia.
    </Statements>
  </section>
)

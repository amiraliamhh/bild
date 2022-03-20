import { Carousel } from '../Carousel'

interface FeaturedProps {
  className?: string
}

export const Featured = ({ className = '' }: FeaturedProps) => (
  <section className={`${className} flex flex-col items-center`}>
    <div className='container mx-auto'>
      <h2 className='text-2xl font-semibold text-center text-zinc-500 uppercase'>A Couple of Our Featured Projects</h2>
      <p className='max-w-[747px] text-center mt-5 text-zinc-500 text-sm leading-6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eu erat lacus, vel congue mauris. Fusce velit
        justo, faucibus eu sagittis ac, gravida quis tortor.
        Suspendisse non urna mi, quis tincidunt eros.
      </p>
    </div>
    <Carousel className='mt-7' />
  </section>
)

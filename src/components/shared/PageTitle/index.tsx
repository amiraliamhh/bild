interface PageTitleProps {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => (
  <section className='w-full h-20 bg-green-500'>
    <div className='container mx-auto h-full flex items-center text-3xl text-white uppercase'>
      <h1 className='text-left'>{title}</h1>
    </div>
  </section>
)

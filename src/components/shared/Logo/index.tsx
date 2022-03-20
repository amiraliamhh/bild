interface LogoProps {
  className?: string
}

export const Logo = ({ className = '' }: LogoProps) => (
  <div className={`${className} flex items-center`}>
    <div className='w-10 h-10 bg-neutral-500 text-white flex justify-center items-center text-4xl pt-1'>
      <span>D</span>
    </div>
    <h1 className='text-2xl ml-3 text-neutral-500 font-semibold'>Display</h1>
  </div>
)

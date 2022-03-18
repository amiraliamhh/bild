interface ServicesProps {
  className?: string
}

export const Services = ({ className = '' }: ServicesProps) => (
  <section className={`${className}`}>
    services
  </section>
)

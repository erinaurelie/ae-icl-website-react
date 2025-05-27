import { SectionHeader, ServiceCard } from '../components'
import { services } from '../constants'

const Services = () => {
  return (
    <section id="services" className='p-section'>
      <SectionHeader 
        span='Our Expertise'
        h1='Services We Offer'
        p='We offer comprehensive solutions across various industries'
      />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map(service => (
          <ServiceCard 
            key={service.label}
            {...service}
          />
        ))}
      </div>

    </section>
  );
};

export default Services;
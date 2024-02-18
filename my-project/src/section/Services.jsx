import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'

const Services = () => {
  return (
    <div className=" flex flex-row gap-16 justify-center items-center">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  )
}

export default Services

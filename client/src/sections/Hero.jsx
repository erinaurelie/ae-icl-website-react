import { companyLogo } from "../assets/images"
import { arrowRight } from '../assets/icons';
import { SectionLabel, ButtonLink } from "../components";


const Hero = () => {
  return (
    <section id="home" className="flex justify-center items-center max-md:flex-col-reverse min-h-screen p-section gap-8">
      <div className="flex-1">
        <SectionLabel content='Strategic Business Consulting'/>

        <h1 className="font-poppins font-extrabold leading-[1] mt-4 tracking-[-2px] text-fluid-lg my-3" style={{ textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)' }}>
          Unlock success <br /> with us.
        </h1>

        <p className="text-fluid-sm my-10 text-sea-blue font-roboto text-lg">
          Our team of experts combines deep industry knowledge with cutting-edge strategies to drive growth, efficiency, and long-term success. At AE - ICL, your vision is our mission.
        </p>

        <div className="flex gap-2 max-lg:flex-col">
          <ButtonLink 
            target='#contact-us'
            content='Schedule Consultation' 
            imgURL={arrowRight} 
            customStyles='bg-white inline-flex items-center justify-center text-black hover:scale-105 transition-transform'
          />
          <ButtonLink 
            target='#services' 
            content='Explore Services' 
            customStyles='border-[2px] bg-transparent text-white transition duration-300 ease-in hover:text-black hover:bg-white hover:scale-105 transition-transform' 
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-[rgba(0,0,0,0.33)] rounded-full shadow-cloud animate-bounce max-w-[35rem] min-w-[20rem] w-full">
          <img src={companyLogo} alt="AE - ICL Strategic Business Consulting company logo" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
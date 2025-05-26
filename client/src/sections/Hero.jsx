import { companyLogo } from "../assets/images"
import SectionLabel from "../components/SectionLabel"


const Hero = () => {
  return (
    <section id="home" className="">
      <div className="">
        <div>
          <SectionLabel content='Strategic Business Consulting'/>
          <h1 className="">
            Unlock success <br /> with us.
          </h1>
          <p>
            Our team of experts combines deep industry knowledge with cutting-edge strategies to drive growth, efficiency, and long-term success. At AE - ICL, your vision is our mission.
          </p>
          <div>
            <a href="#contact-us">
              Schedule Consultation
              <img src="" alt="" width={24} />
            </a>
            <a href="#services">
              Explore Services
            </a>
          </div>
        </div>
        <div>
          <img src={companyLogo} alt="company logo" aria-label="AE - ICL logo" />
        </div>
      </div>
    </section>
  )
}

export default Hero
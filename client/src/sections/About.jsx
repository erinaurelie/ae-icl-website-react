import { SectionHeader } from "../components"
import { achievements, benefits } from "../constants"

const About = () => {
  return (
    <section id="about" className="p-6">
      <SectionHeader 
        span='About Us'
        h1='Who We Are'
        p='A team of strategic thinkers dedicated to transforming businesses through innovative consulting solutions.'
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-[#7E8C9C]">
        {/* Achievements Section */}
        <div className="order-2 lg:order-1 relative flex-1 text-ocean-teal w-full">
          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-turquoise mb-2">{item.value}</div>
                  <div className="text-navy font-medium">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="absolute -top-6 -left-6 -right-6 -bottom-6 bg-gradient-to-br from-navy/20 to-turquoise/20 rounded-xl -z-10 transform -rotate-3 border border-navy/10"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="order-1 lg:order-2 flex-1 text-sea-blue space-y-6 leading-relaxed font-roboto">
          <h3 className="text-3xl font-bold text-white">Transforming Businesses Since 2013</h3>

          <p>
            Welcome to <strong>AE International Consulting and Logistics LTD (AE-ICL)</strong>, your trusted partner in business excellence and global solutions. Established with a vision to bridge international business gaps, we bring together expertise, innovation, and reliability to serve clients across diverse industries.
          </p>

          <p>
            With years of experience in international business consulting and logistics, our team of seasoned professionals delivers tailored solutions that drive growth and efficiency. We pride ourselves on our comprehensive approach to business challenges, combining local insight with global perspective.
          </p>

          <details className="group">
            <summary className="text-xl cursor-pointer font-semibold text-white group-open:mb-2">
              Our Mission
            </summary>
            <p className="mt-2 ml-4 text-sea-blue">
              To empower businesses through strategic consulting and seamless logistics solutions, facilitating sustainable growth and international market success.
            </p>
          </details>

          <details className="group">
            <summary className="text-xl cursor-pointer font-semibold text-white group-open:mb-2">
              Why Choose AE-ICL?
            </summary>
            <ul className="mt-2 ml-6 list-disc space-y-2 text-sea-blue">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-2 before:content-['✓'] before:text-turquoise before:font-bold before:mr-2">
                  {item}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>


      
    </section>
  )
}

export default About;
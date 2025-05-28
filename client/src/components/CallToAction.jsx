import { ButtonLink } from '../components';

const CallToAction = () => {
  return (
    <article className="my-20 mx-auto max-w-[800px] py-12 px-8 text-center rounded-CTA bg-[linear-gradient(white,_teal)]">
      <h3 className="text-3xl text-black my-4 font-bold">
        Ready to Transform Your Business?
      </h3>
      <p className="text-[rgb(75 85 99)] my-5">
        Our team of experts is ready to help you navigate challenges and seize new opportunities for growth.
      </p>
      <ButtonLink
        target='#contact-us'
        content='Schedule a Consultation'
        customStyles='bg-white text-black rounded-full font-medium'
      />
    </article>
  )
}

export default CallToAction;
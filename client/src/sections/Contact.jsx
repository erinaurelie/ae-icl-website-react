import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { SectionHeader, ContactCard, FormField } from '../components';
import { contactInfo, officeHours } from '../constants';
import { useState } from 'react';

const Contact = () => {
  const [phone, setPhone] = useState('');


  return (
    <section id="contact-us" className="p-section">
      <SectionHeader 
        span='Get in Touch'
        h1='Contact Us'
        p='Ready to transform your business? Reach out to schedule a consultation with AE - ICL.'
      />
      
      <div className='grid gap-12 md:grid-cols-[2fr,1fr] lg:grid-cols-2 font-roboto'>
        <div className='border-[#0077B6] shadow-cloud p-8 rounded-xl min-w-0'>
          <h2 className='text-2xl font-bold'>Send Us a Message</h2>
          <p className='text-sea-blue my-4 italic'>
            Required fields are marked with an asterisk (*)
          </p>
          <form action="" method="post" className='flex flex-col gap-8'>
              <div className='grid grid-cols-2 gap-6'>
                <FormField
                  label="Name"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  required
                  maxLength={255}
                />
                <FormField
                  label="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  required
                  maxLength={255}
                />

                <div>
                  <label htmlFor="phone">Phone Number *</label>
                  <PhoneInput
                    international
                    defaultCountry="GH"
                    countryCallingCodeEditable={false}
                    label='Phone Number'
                    id='phone'
                    type='tel'
                    name='phone-number'
                    inputMode='tel'
                    maxLength={15}
                    pattern='[0-9]'
                    value={phone}
                    onChange={setPhone}
                    numberInputProps={{
                      className: 'py-4 rounded-xl bg-transparent text-xl border border-[#0077B6] focus:border-[2px] transition-colors duration-300'
                    }}
                  />
                </div>

                <FormField
                  label="Company Name"
                  id="company"
                  name="company"
                  maxLength={255}
                  required={false}
                />
              </div>
              <FormField
                label="Your Message"
                id="message"
                name="message"
                placeholder="Tell us about your project or inquiry"
                required
                maxLength={255}
                as='textarea'
                rows={5}
                cols={5}
              />

              <button type='submit' className='cursor-pointer py-4 font-bold rounded-2xl bg-[#4b5563] w-full'>
                Send Message
              </button>
          </form>
        </div>

        <div className='min-w-0'>
          <h2 className='text-2xl font-bold'>Get in Touch</h2>
          <p className='text-sea-blue my-4'>Have questions or need more information? Reach out to our team through any of the channels below or visit our office.</p>
          {contactInfo.map(info => (
            <ContactCard {...info} />
          ))}
          
          <div className='p-8 mt-6 shadow-cloud rounded-2xl gap-6'>
            <h3 className='text-2xl font-bold my-3'>
              Office Hours
            </h3>
            {officeHours.map(item => (
              <div className='flex justify-between'>
                <span className='text-sea-blue'>
                  {item.weekDay}:
                </span>
                <span className='text-white font-bold'>
                  {item.availability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
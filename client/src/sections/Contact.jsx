import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { SectionHeader, ContactCard, FormField } from '../components';
import { contactInfo, officeHours } from '../constants';
import { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
        })
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg(data.message || "Message sent successfully!");
        setFormData({ name: '', email: '', company: '', message: '' });
        setPhone('');
      } else {
        setSuccessMsg(data.message || "Something went wrong.");
      }
    } catch (err) {
      setSuccessMsg("There was an error sending your message.");
    }
    setLoading(false);
  };

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
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <div className='grid md:grid-cols-2 gap-6'>
              <FormField 
                label="Name"
                id="name"
                name="name"
                placeholder="Jane Doe"
                required
                maxLength={255}
value={formData.phone}
                  onChange={value => setFormData({ ...formData, phone: value || '' })}
              />
              <FormField
                label="Email Address"
                id="email"
                type="email"
                name="email"
                placeholder="jane@example.com"
                required
                maxLength={255}
                value={formData.email}
                onChange={handleChange}
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
                  name='phone'
                  inputMode='tel'
                  maxLength={15}
                  value={formData.phone}
                  onChange={value => setFormData({ ...formData, phone: value || '' })}
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
                value={formData.company}
                onChange={handleChange}
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
              value={formData.phone}
              onChange={value => setFormData({ ...formData, phone: value || '' })}
            />

            <button
              type='submit'
              className='cursor-pointer py-4 font-bold rounded-2xl bg-[#4b5563] w-full hover:scale-105 transition-transform flex items-center justify-center'
              disabled={loading}
            >
              {loading ? (
                <span>
                  <svg className="inline w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#fff" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="#fff" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          {successMsg && (
            <div className="mt-4 text-center text-green-500 font-bold">
              {successMsg}
            </div>
          )}
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
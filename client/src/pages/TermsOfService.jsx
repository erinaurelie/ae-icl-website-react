import { Link } from 'react-router-dom';
 import { Footer } from '../sections';
import { ButtonLink } from '../components';
import { arrowBack } from '../assets/icons';

const TermsOfService = () => {
  return (
    <div className='max-container min-h-screen'>
      <div className="inline-flex border border-[#808080cc] transition delay-200 rounded-lg mb-3 items-center hover:border-white">
        <img src={arrowBack} alt="Go to homepage" />
        <ButtonLink 
          target='/'
          content='Back'
          customStyles='py-4 px-6 gap-1 font-bold'
        />
      </div>

      <h1 className='text-3xl font-inter'>
        Terms of Service (TOS)
      </h1>

      <div className="leading-6 whitespace-pre-line font-roboto mt-6">
        <p>Last Updated: April 2nd, 2025</p>
        <br />
        <p>Welcome to AE-International Consulting &amp; Logistics LTD.</p>
        <br />
        <p>
          By using our website, you agree to these Terms of Service. If you do not agree, please refrain from submitting your information.
        </p>
        <br />
        <p><strong>1. Description of Services</strong></p>
        <p>
          Our consulting services offer expert solutions tailored to your business needs. We provide strategic guidance, process optimization, and actionable insights to drive success.
        </p>
        <br />
        <p><strong>2. Scope of Services</strong></p>
        <p>
          Our website provides a contact form to facilitate communication between you and us. Submitting the form does not establish a contractual agreement or consulting engagement.
        </p>
        <br />
        <p><strong>3. User Responsibilities</strong></p>
        <p>
          When using the contact form, you agree to:<br />
          - Provide accurate and truthful information (e.g., your name, contact details, and message).<br />
          - Refrain from submitting harmful, illegal, or inappropriate content.
        </p>
        <br />
        <p><strong>4. No Guarantee of Response</strong></p>
        <p>
          While we strive to respond to all inquiries promptly, we do not guarantee a response to every submission made via the contact form.
        </p>
        <br />
        <p><strong>5. Data Usage</strong></p>
        <p>
          By submitting your information, you acknowledge that we will use the details provided to contact you regarding your inquiry. For more information, see our{' '}
          <Link to="/privacy-policy" className="text-sky-400 hover:underline">Privacy Policy</Link>.
        </p>
        <br />
        <p><strong>6. Changes to Terms</strong></p>
        <p>
          We may update these Terms at any time. Continued use of the website constitutes acceptance of the revised Terms.
        </p>
        <br />
        <p><strong>7. Contact Information</strong></p>
        <p>
          If you have any questions about these Terms, please email us at{' '}
          <a 
            href="mailto:inconsult_2013logistics@yahoo.fr"
            className='text-sky-400 hover:text-[#808080cc] hover:underline decoration-white'
          >
            inconsult_2013logistics@yahoo.fr
          </a>.
        </p>
        <br />
        <p>Thank you for stopping by AE-ICL! We look forward to connecting with you.</p>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
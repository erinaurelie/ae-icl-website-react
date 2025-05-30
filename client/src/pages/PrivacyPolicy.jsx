import { Footer } from "../sections";
import { ButtonLink } from "../components";
import { arrowBack } from "../assets/icons";

const PrivacyPolicy = () => {
  return (
    <div className="max-container min-h-screen">
      <div className="inline-flex border border-[#808080cc] transition delay-200 rounded-lg mb-3 items-center hover:border-white">
        <img src={arrowBack} alt="Go to homepage" />
        <ButtonLink 
          target='/'
          content='Back'
          customStyles='py-4 px-6 gap-1 font-bold'
        />
      </div>

      <h1 className="text-3xl font-inter">
        Privacy Policy
      </h1>

      <div className="leading-6 whitespace-pre-line font-roboto mt-6">
        <p>Last Updated: April 2nd, 2025</p>
        <br />
        <p>Welcome to AE-International Consulting &amp; Logistics LTD.</p>
        <br />
        <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your information.</p>
        <br />
        <p><strong>1. Information We Collect</strong></p>
        <p>
          <strong>Name:</strong> We collect your name to personalize your experience and communicate with you effectively.<br />
          <strong>Email:</strong> It enables us to respond to your inquiries, send important updates, or provide requested information.<br />
          <strong>Phone Number:</strong> This helps us reach you promptly for follow-ups or clarification regarding your request.<br />
          <strong>Company Name:</strong> This helps us understand the context of your message and tailor our services to meet your business needs.<br />
          <strong>Message:</strong> The details in your message enable us to understand your concerns, questions, or requirements in order to provide you with accurate and relevant responses.
        </p>
        <br />
        <p><strong>2. How We Use Your Data</strong></p>
        <p>
          We use the information you provide solely to:<br />
          - Respond to your inquiries<br />
          - Address your feedback or concerns
        </p>
        <br />
        <p><strong>3. Data Storage</strong></p>
        <p>
          Your information is sent to our private email inbox. We implement security measures to protect your data, but note that no method of transmission over the internet is completely secure.
        </p>
        <br />
        <p><strong>4. Cookies and Tracking</strong></p>
        <p>
          Our website does not use cookies or tracking technologies to collect additional data.
        </p>
        <br />
        <p><strong>5. Policy Updates</strong></p>
        <p>
          We reserve the right to modify this policy at any time. Changes will be posted on this page with an updated "Last Updated" date.
        </p>
        <br />
        <p><strong>6. Your Rights</strong></p>
        <p>
          You have the right to:<br />
          - Access the data we hold about you.<br />
          - Request deletion or correction of your data.
        </p>
        <br />
        <p><strong>7. Contact Information</strong></p>
        <p>
          For privacy concerns, email us at{" "}
          <a
            href="mailto:inconsult_2013logistics@yahoo.fr"
            className="text-sky-400 hover:underline decoration-white"
          >
            inconsult_2013logistics@yahoo.fr
          </a>.
        </p>
        <br />
        <p>
          Thank you for entrusting AE-ICL with your personal information. As a consulting company, we are dedicated to safeguarding your privacy while supporting you in achieving your business goals. Your data's security and confidentiality are at the core of our commitment to provide reliable and tailored consulting services.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
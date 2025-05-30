import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer aria-label="footer" className="mt-5 text-[#ffffffb3] text-[14px] flex justify-between items-center py-4 px-8 border-t border-[#ffffffb3] flex-col md:flex-row">
      <p>&copy; 2025 AE-International Consulting &amp; Logistics LTD. All rights reserved.</p>
      <div>
        <Link to='/terms-of-service' className="mr-10 cursor-pointer hover:underline decoration-white">
          Terms of Service
        </Link>
        <Link to='/privacy-policy' className="mr-10 cursor-pointer hover:underline decoration-white">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer;
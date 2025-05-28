const Footer = () => {
  return (
    <footer aria-label="footer" className="mt-5 text-[#ffffffb3] text-[14px] flex justify-between items-center py-4 px-8 border-t border-[#ffffffb3]">
      <p>&copy; 2025 AE-International Consulting &amp; Logistics LTD. All rights reserved.</p>
      <div>
          <a href="terms-of-service.html" className="mr-10 cursor-pointer hover:underline decoration-white
">Terms of Service</a>
          <a href="privacy-policy.html" className="cursor-pointer hover:underline decoration-white
">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer;

// Todo add Terms of Service and Privacy Policy Page
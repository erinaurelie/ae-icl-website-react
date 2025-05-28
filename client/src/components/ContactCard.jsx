const ContactCard = ({ imgURL, href, label, subtext }) => {
  return (
    <a 
      href={href} 
      target={label === 'Visit Us' && '_blank'}
      className="mt-6 rounded-2xl shadow-cloud flex items-center gap-x-4 break-words p-5 cursor-pointer mb-6"
    >
      <img src={imgURL} alt={label} />
      <div>
        <h4 className="text-white font-semibold">{label}</h4>
        <p className="text-sea-blue break-all">{subtext}</p>
      </div>
    </a>
  )
}

export default ContactCard;
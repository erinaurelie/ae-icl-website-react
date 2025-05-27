import PropTypes from 'prop-types';

const ServiceCard = ({ imgURL, title, description }) => {
  return (
    <div className='shadow-cloud p-8 rounded-2xl'>
      <img 
        src={imgURL} 
        alt={`${title} service illustration`}
        loading="lazy"
      />
      <h3 className='text-[1.3rem] my-4'>{title}</h3>
      <p className='text-slate-400 my-4'>{description}</p>
      <a href="#contact-us" className='text-[#2EC4B6] font-medium mt-2'>
        Learn more ➔
      </a>
    </div>
  )
}

ServiceCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
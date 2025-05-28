const ButtonLink = ({ target, content, imgURL, customStyles }) => {
  return (
    <a 
      href={target} 
      className={`py-[10px] px-5 cursor-pointer rounded font-medium font-roboto text-center
      ${customStyles && customStyles}
      hover:scale-105 transition-transform
    `}>
      {content}
      {imgURL && <img src={imgURL} alt="" />}
    </a>
  )
}

export default ButtonLink
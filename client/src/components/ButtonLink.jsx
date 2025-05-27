const ButtonLink = ({ target, content, imgURL, customStyles }) => {
  return (
    <a href={target} className={`py-[10px] px-5 cursor-pointer rounded font-medium font-roboto text-center
      ${customStyles && customStyles}
    `}>
      {content}
      {imgURL && <img src={imgURL} alt="" />}
    </a>
  )
}

export default ButtonLink
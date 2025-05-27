import SectionLabel from "./SectionLabel"

const SectionHeader = ({ span, h1, p }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-16 font-inter">
      <SectionLabel content={span}/>
      
      <h1 className="text-[2.5rem] mt-4 font-roboto font-extrabold">
        {h1}
      </h1>
      <p className="text-xl text-sea-blue mt-1">
        {p}
      </p>
    </div>
  )
}

export default SectionHeader;
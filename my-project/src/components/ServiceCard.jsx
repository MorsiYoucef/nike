const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="padding rounded-[10px] shadow-3xl  w-[400px] h-[300px]">
      <img
        src={imgURL}
        alt={label}
        width={50}
        height={20}
        className=" bg-coral-red rounded-full p-2 mt-[-40px]"
      />
      <h1 className="font-palanquin text-xl mt-4 mb-4 font-bold">{label}</h1>
      <p className=" text-gray-500">{subtext}</p>
    </div>
  )
}

export default ServiceCard

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="">
      <img src={imgURL} alt={name} width={250} height={250} />
      <div className="flex flex-row relative top-3">
        <img src="src/assets/icons/star.svg" alt="star" />
        <p>(4.5)</p>
      </div>
      <div className=" relative top-10">
        <p className=" text-xl font-bold">{name}</p>
        <p className=" text-coral-red">{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard

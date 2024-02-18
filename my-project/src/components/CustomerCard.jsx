const CustomerCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className=" flex flex-col text-center justify-center items-center gap-6">
      <img
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className=" rounded-full"
      />
      <p className=" w-[300px] text-gray-500">{feedback}</p>
      <div className=" flex gap-3">
        <img src="src/assets/icons/star.svg" alt="star" />
        <p>({rating})</p>
      </div>

      <h1 className=" font-bold text-xl">{customerName}</h1>
    </div>
  )
}

export default CustomerCard

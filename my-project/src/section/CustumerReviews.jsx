import { reviews } from '../constants'
import CustomerCard from '../components/CustomerCard'

const CustumerReviews = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className=" relative bottom-[100px] flex justify-center items-center flex-col">
        <h1 className=" mt-10 font-palanquin text-[60px] font-bold">
          What Our <span className="text-coral-red">Customer</span> Say?
        </h1>
        <p className="text-center w-[620px] text-gray-500 text-xl">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex justify-center items-center gap-[300px]">
        {reviews.map((review) => (
          <CustomerCard key={review.customerName} {...review} />
        ))}
      </div>
    </div>
  )
}

export default CustumerReviews

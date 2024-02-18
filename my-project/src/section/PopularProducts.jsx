import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <div className=" p-10">
      <h1 className="mt-10 font-palanquin pl-[30px] text-[52px] font-bold">
        Our
        <span className=" text-coral-red"> Popular </span>
        Products
      </h1>
      <p className="font-montserrat text-gray-500 text-lg pl-[30px] leading-8 mt-6 mb-10 w-[600px]">
        Experience Top-notch quality and style with our sought after selection.
        Discover a world of comfort, design and value
      </p>
      <div>
        <div className=" grid grid-cols-4 relative left-8 gap-0">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularProducts

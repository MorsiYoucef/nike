import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <div className="grid grid-cols-2 relative p-16">
      <div>
        <h1 className="mt-10 font-palanquin text-8xl max-sm: text-[52px] max-sm:leading-[82] font-bold max-w-[550px]">
          We provide you
          <span className=" text-coral-red"> Super Quality </span>
          Shoes
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg info-text mb-12">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View details" />
      </div>
      <img src="src/assets/images/shoe8.svg" alt="shoe 8" />
    </div>
  )
}

export default SuperQuality

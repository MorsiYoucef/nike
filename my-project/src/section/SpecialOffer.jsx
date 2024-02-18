import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <div className=" grid grid-cols-2 relative left-[60px]">
      <img src="src/assets/images/offer.svg" alt="offer" className=" " />
      <div className=" w-[500px] relative top-[100px]">
        <h1 className="font-palanquin text-8xl max-sm: text-[42px] font-bold">
          <span className=" text-coral-red">Special</span> Offer
        </h1>
        <p className=" text-gray-500 text-xl w-screen]">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className=" text-gray-500 text-xl w-screen] mt-8">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-4 px-10 pt-16">
          <Button
            label="Show now"
            iconURL={'src/assets/icons/arrow-right.svg'}
          />
          <Button
            label="Learn more"
            background="bg-white"
            textColor="text-gray-500"
          />
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer

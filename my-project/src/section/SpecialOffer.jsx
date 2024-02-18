import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <div className=" flex flex-row justify-center items-center gap-10">
      <img src="src/assets/images/offer.svg" alt="offer" />
      <div className=" w-[500px] ">
        <div className=" flex flex-col gap-3">
          <h1 className="font-palanquin text-8xl max-sm: text-[42px] font-bold">
            <span className=" text-coral-red">Special</span> Offer
          </h1>
          <p className=" text-gray-500 text-xl w-screen]">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className=" text-gray-500 text-xl w-screen] ">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </div>

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

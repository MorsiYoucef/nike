import Button from '../components/Button'

const Subscribe = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <h1 className="mt-10 font-palanquin text-[40px] font-bold relative bottom-[100px]">
        Up From <span className=" text-coral-red">Updates</span> & Newsletter
      </h1>
      <div className=" flex flex-row justify-center items-center border-gray-300 border rounded-full gap-[600px] p-2 relative bottom-[50px]">
        <p className=" text-gray-500 pl-6">subscribe@nike.com</p>
        <Button
          label={'Sign Up'}
          background={'bg-coral-red'}
          textColor={'text-white'}
        />
      </div>
    </div>
  )
}

export default Subscribe

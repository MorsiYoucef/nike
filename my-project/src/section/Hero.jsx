import { useState } from 'react'
import Button from '../components/Button'
import { statistics, shoes } from '../constants'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(
    'src/assets/images/big-shoe1.png'
  )
  return (
    <section
      id="home"
      className="w-full flex flex-row justify-center min-h-screen  max-container"
    >
      <div className=" relative x1:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm: text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red inline-block mt-3 mr-6">Nike </span>
          Shoes
        </h1>
        <p className=" font-montserrat text-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL="src/assets/icons/arrow-right.svg" />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-full w-full flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain"
        />
      </div>
      <div className=" flex sm:gap-6 absolute -bottom-[-62%] ml-[750px] ">
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe) => {
                setBigShoeImg(shoe)
              }}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero

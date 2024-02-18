import { socialMedia, footerLinks } from '../constants'

const Footer = () => {
  return (
    <div className="pl-[100px]">
      <div className=" flex gap-8 flex-col ">
        <img
          src="src/assets/images/footer-logo.svg"
          alt="footer logo"
          width={200}
          height={200}
        />
        <p className=" text-white w-[300px]">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className=" flex flex-row gap-5">
          {socialMedia.map((media) => (
            <img
              src={media.src}
              alt={media.alt}
              width={40}
              height={40}
              className=" bg-white rounded-full p-2"
            />
          ))}
        </div>
      </div>
      <div className=" grid grid-cols-3 pt-[60px] ">
        {footerLinks.map((foo) => (
          <div className=" flex flex-col gap-3">
            <h1 className=" text-white font-bold text-xl">{foo.title}</h1>
            {foo.links.map((link) => (
              <p className=" text-white">
                <a href={link.link}> {link.name}</a>
              </p>
            ))}
          </div>
        ))}
      </div>
      <div>
        <h1 className=" text-gray-400 font-palanquin pt-[100px]">
          © Copyright. all right reserved
        </h1>
      </div>
    </div>
  )
}

export default Footer

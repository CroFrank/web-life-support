import pkg from "@material-tailwind/react"
const { Avatar, Typography } = pkg

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-8 md:pb-10 xl:pb-20 justify-center items-center gap-20 md:gap-5 h-1/2 bg-gray-100 w-full">
      <img
        src="/hero.svg"
        alt=""
        className="max-w-xl w-60 sm:w-80 lg:w-96 xl:w-full pt-8"
      />
      <div className="tracking-wider px-8 mb-8 md:mb-0 text-center">
        <p className="mb-5">
          Izrada web stranica za mala i srednja poduzeća ili u privatne svrhe
          kao što su hobby, blog, portfolio...
        </p>
        <p>Jednostavan pristup, brza izrada, pristupačne cijene.</p>
      </div>
    </div>
  )
}
export default Hero

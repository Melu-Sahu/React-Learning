import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics,shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from '../components/ShoeCard'


const Hero = () => {
  return (
    <section id="home"
      className="w-full border-2 border-red-500 p-2 flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container">

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">

        <p className="text-lg font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72] max-sm:leading-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br />
          <span className="text-coral-red inline-block mt-3">Nike </span>   Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Niky arrivals, quality comfort, and innovation for your active life.</p>

        <Button label='Shop Now' iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index)=>(
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}

        </div>

      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-lx:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img src={bigShoe1} alt="shoe collection"  width={610} height={500} className="object-contain relative z-10"/>

        <div>
          {
            shoes.map((shoe,index)=>(
              <div key={shoe}>
                <ShoeCard/>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Hero

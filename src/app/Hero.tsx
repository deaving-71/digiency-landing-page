import ContactButton from "./ContactButton"
import SocialIcons from "./SocialIcons"

export default function Hero() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row justify-between mx-auto px-5 py-4 md:px-10 md:py-8 lg:py-24 lg:px-20">
        <div className="basis-1/2 px-4 py-3 lg:px-8 lg:py-6">
            <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-white font-bold">we are the best <span className="text-Orange-900">Digital Agency</span> For Business</h2>
            <p className="text-white text-sm mt-6 leading-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <ContactButton />
        </div>
        <div className="basis-1/2 p-6">
            <img src='./assets/img/HeroImage.svg' alt="Hero Image" className="w-[1500px]"/>
        </div>
        <SocialIcons className='absoplute right-0 bottom-[40%] hidden md:flex flex-col gap-2 ' />
    </div>
  )
}

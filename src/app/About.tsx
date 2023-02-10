import CardAbout from './CardAbout'
import { AboutCards } from '@/utils/utils'
import ContactButton from './ContactButton'

export default function About() {
  return (
    <div className='px-5 py-8 md:px-10 lg:py-24 lg:px-20'>
        <div className='flex flex-col sm-l:flex-row items-center text-center sm-l:text-left lg:items-end'>
            <div className='basis-1/2'>
                <img src="./assets/img/AboutImage.svg" alt="About Image"/>
            </div>

            <div className='basis-1/2 text-white/80'>
                <h1 className='mt-12 font-light'>About Us</h1>
                <h2 className='text-2xl leading-[1.5] lg:text-5xl lg:leading-[1.5] font-semibold mt-3 lg:mt-6'>We Are <span className='text-Orange-900'>Making Ideas Better</span> For Everyone</h2>
                <p className='text-sm mt-3 lg:mt-3 leading-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.
                </p>
                <p className='text-sm mt-3 lg:mt-3 leading-5'>
                Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </p>
                <ContactButton />
            </div>  
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            {AboutCards?.map((card, idx) => {
                return <CardAbout key={idx} color={card?.color} icon={card?.icon} shadow={card?.shadow} text={card?.text}/>
            })}
        </div>
    </div>
  )
}

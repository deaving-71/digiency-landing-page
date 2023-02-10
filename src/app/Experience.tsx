import CardExperience from './CardExperience'
import ContactButton from './ContactButton'

export default function Experience() {
  return (
    <div className='flex flex-col sm-l:flex-row px-6 pt-8 md:px-6 md:py-16'>
        <div className='basis-1/2 text-white pr-4'>
            <h1>Our Experience</h1>
            <h2 className='text-4xl text-semibold mt-6 leading-[1.3]'>We Have Completed 150+ Projects Succesfully
            </h2>
            <p className='mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.
            </p>
            <p className='mt-6'>
                Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.
            </p>
            <ContactButton />
        </div>
        {/* flex */}
        <div className='basis-1/2 block sm-l:grid grid-rows-[10px,150px,10px,150px,10px] lg:grid-rows-[20px,200px,20px,200px,20px] grid-cols-2 gap-3 md:gap-6'>
            <CardExperience className='row-span-2'/>
            <div />
            <CardExperience className='row-span-2'/>
            <CardExperience className='row-span-2'/>
            <CardExperience className='row-span-2'/>
        </div>
    </div>
  )
}

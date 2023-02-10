import Link from 'next/link'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <div className="text-white">
        <div className="flex flex-col sm:flex-row gap-2 p-4 lg:gap-12 lg:p-12 bg-Black">
            <div className='basis-1/4'>
                <h1 className="text-xl md:text-3xl font-semibold"><span className="text-Orange-900">Digie</span>ncy</h1>
                <p className="text-sm md:text-base font-light mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum.</p>
                <SocialIcons className='flex justify-between mt-4' />
            </div>

            <div className='basis-1/4'> 
                <h1 className="text-xl md:text-3xl font-semibold">Company</h1>
                <ul className='text-sm md:text-base font-light mt-4'>
                    <li><Link className='block p-1' href='#'/>About Us</li>
                    <li><Link className='block p-1' href='#'/>Our Work</li>
                    <li><Link className='block p-1' href='#'/>Client</li>
                    <li><Link className='block p-1' href='#'/>Our Blog</li>
                    <li><Link className='block p-1' href='#'/>Contact Us</li>
                </ul>
            </div>

            <div className='basis-1/4'>
                <h1 className="text-xl md:text-3xl font-semibold">Services</h1>
                <ul className='text-sm md:text-base font-light mt-4'>
                    <li><Link className='block p-1' href='#'/>Graphic Design</li>
                    <li><Link className='block p-1' href='#'/>UI/UX Design</li>
                    <li><Link className='block p-1' href='#'/>Web Development</li>
                    <li><Link className='block p-1' href='#'/>App Development</li>
                    <li><Link className='block p-1' href='#'/>Web Hosting</li>
                </ul>
            </div>

            <div className='basis-1/4'>
                <h1 className="text-xl md:text-3xl font-semibold">Newsletter</h1>
                <p className='text-sm md:text-base mt-6 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.</p>
                <div className='flex w-full mt-6'>
                    <input className='p-4 bg-transparent outline-none border border-Orange-900 placeholder:text-white/60' type="text" placeholder='example@email.com' />
                    <label htmlFor="newsletter" className='relative'>
                        <img className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2' src="/assets/icons/newsletter.svg" alt="" />
                        <input className='bg-Orange-900 grid place-items-center w-full h-full' type="button" value="" id='newsletter' />
                    </label>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-between text-sm sm:text-base py-4 px-8 md:px-12 lg:px-24 bg-Orange-900">
            <div>Copyright 2023. All Right Reserved By DeaViNG</div>
            <img src="/assets/icons/arrow.svg" alt="Arrow Icon" />
        </div>
    </div>
  )
}

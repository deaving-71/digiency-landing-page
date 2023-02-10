import { OurWork } from "@/utils/utils"
import Image from 'next/image'

type Props = {}

export default function Work({}: Props) {
  return (
    <div className='text-white text-center sm-m:p-10 md:p-12 lg:p-20'>
        <div className="flex flex-col justify-center items-center">
            <h1>Our Work</h1>
            <h2 className='text-3xl md:text-4xl font-semibold leading-[1.3] capitalize mt-6'>
                <div>we have some</div>
                <div><span className='text-Orange-900'>Designed & Development</span> Projects</div>
            </h2>
        </div>
        <div className='text-Gray overflow-x-auto'>
            <ul className='flex items-start sm-m:items-center text-lg md:text-xl '>
                <li><button className='text-Orange-900 p-3 sm-m:p-4'>All</button></li>
                <li><button className='p-3 sm-m:p-4'>Graphic Design</button></li>
                <li><button className='p-3 sm-m:p-4'>UI/UX Design</button></li>
                <li><button className='p-3 sm-m:p-4'>Web Development</button></li>
            </ul>
        </div>   
        <div className="relative mb-0 sm-m:mb-52 sm:mb-56 md:mb-80 lg:mb-[400px] ">
            <div className="block sm-m:flex">
                <div><img src="/assets/img/image01.png" alt="project"/></div>
                <div><img src="/assets/img/image02.png" alt="project"/></div>
                <div><img src="/assets/img/image03.png" alt="project"/></div>
            </div>
            <div className="block sm-m:flex items-end sm-m:absolute -bottom-[80%] ">
                <div><img src="/assets/img/image04.png" alt="project"/></div>
                <div><img src="/assets/img/image05.png" alt="project"/></div>
                <div><img src="/assets/img/image06.png" alt="project"/></div>
            </div>
        </div>
    </div>
  )
}
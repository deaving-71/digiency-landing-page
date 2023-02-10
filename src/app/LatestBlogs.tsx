import Image from "next/image"

export default function LatestBlogs() {
  return (
    <div className='flex flex-col p-4  sm:p-8 lg:p-16 text-white text-center'>
        <h1>Our Blog</h1>
        <h2 className='text-4xl font-semibold leading-[1.3] capitalize mt-6'>
            <div>our latest <span className="text-Orange-900">blogs</span></div>
            <div><span className='text-Orange-900'>will keep</span> everyone updated</div>
        </h2>
        <div className="flex gap-4 text-left mt-16 overflow-x-auto sm:overflow-x-visible">
            <div className="flex flex-col justify-between basis-1/2 bg-Dark1 p-2 m-2 md:p-6 md:m-4 min-w-[320px] sm:min-w-0">
                <h3 className="text-Orange-900">Graphic Design</h3>
                <div className="flex justify-between items-center">
                    <p className="text-xl mt-6 mr-6">
                        <div>35 Stellar Graphic</div>
                        <div>Design Blogs to Keep You</div>
                        <div>Educated and Inspired</div>
                    </p>
                    <img className="w-[80px] h-[80px] md:w-[164px] md:h-[164px]  rounded-full" src="/assets/img/Blog01.png" alt="Profile"/>
                </div>
                <div className="flex items-center mt-6">
                    <img className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full mr-2" src="/assets/img/Profile01.png" alt="Profile" width={80} height={80} />
                    <div>
                        <div>Cristofer Westervelt</div>
                        <div className="text-Gray">January 25, 2021 &#8226; 5 min Read</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between basis-1/2 bg-Dark1 p-2 m-2 md:p-6 min-w-[320px] sm:min-w-0">
                <h3 className="text-Orange-900">Graphic Design</h3>
                <div className="flex justify-between items-center">
                    <p className="text-xl mt-6 lg:mr-6">
                        <div>Ridiculously powerful</div>
                        <div>2021 iPad Pro may drop this</div>
                        <div>month</div>
                    </p>
                    <img className="w-[80px] h-[80px] md:w-[164px] md:h-[164px]  rounded-full mr-2" src="/assets/img/Blog02.png" alt="Profile" />
                </div>
                <div className="flex items-center mt-6">
                    <img className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full mr-2" src="/assets/img/Profile02.png" alt="Profile"  />
                    <div>
                        <div>Cristofer Westervelt</div>
                        <div className="text-Gray">January 25, 2021 &#8226; 5 min Read</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8">
            <span className="inline-block w-[10px] h-[10px] rounded-full p-1 mr-1 bg-Orange-900"></span>
            <span className="inline-block w-[40px] h-[10px] rounded-full p-1 mr-1 bg-Dark2"></span>
            <span className="inline-block w-[10px] h-[10px] rounded-full p-1 bg-Gray"></span>
        </div>
    </div>
  )
}

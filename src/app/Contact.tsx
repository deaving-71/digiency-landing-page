import { Mail, Phone, Location } from "@/utils/Icons"

export default function Contact() {
  return (
    <div className='p-6 pt-8 md:p-12 md:pt-16 text-white'>
        <div className="text-center">
            <h1>Contact Us</h1>
            <h2 className='text-4xl font-semibold leading-[1.3] mt-6'>
                <div>Feel <span className="text-Orange-900">Free</span></div>
                <div><span className='text-Orange-900'>to Contact</span> With Us</div>
            </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-12">

            <div className="basis-1/3 bg-Dark1 p-4">
                <div className="flex items-center">
                    <div className="rounded-full bg-Orange-900 mr-2 min-w-[40px] min-h-[40px] md:min-w-[75px] md:min-h-[75px] grid place-items-center"><Mail className="w-[18px] h-[18px] md:w-[36px] md:h-[36px]"/></div>
                    <div>
                        <div className="text-2xl md:text-3xl font-medium text-Orange-900">Drop a line</div>
                        <div className="text-2xl md:text-3xl font-semibold">Mail Us</div>
                    </div>
                </div>
                <div className="text-sm md:text-base mt-4">
                    <div>Support87@gmial.com</div>
                    <div className="mt-4">ijkuiu874@gmial.com</div>
                </div>
            </div>

            <div className="basis-1/3 bg-Dark1 p-4">
                <div className="flex items-center">
                    <div className="rounded-full bg-Orange-900 mr-2 min-w-[40px] min-h-[40px] md:min-w-[75px] md:min-h-[75px] grid place-items-center"><Phone className="w-[18px] h-[18px] md:w-[36px] md:h-[36px]"/></div>
                    <div>
                        <div className="text-2xl md:text-3xl font-medium text-Orange-900">Drop a line</div>
                        <div className="text-2xl md:text-3xl font-semibold">Mail Us</div>
                    </div>
                </div>
                <div className="text-sm md:text-base mt-4">
                    <div>Support87@gmial.com</div>
                    <div className="mt-4">ijkuiu874@gmial.com</div>
                </div>
            </div>
            <div className="basis-1/3 bg-Dark1 p-4">
                <div className="flex items-center">
                    <div className="rounded-full bg-Orange-900 mr-2 min-w-[40px] min-h-[40px] md:min-w-[75px] md:min-h-[75px] grid place-items-center"><Location className="w-[18px] h-[18px] md:w-[36px] md:h-[36px]"/></div>
                    <div>
                        <div className="text-2xl md:text-3xl font-medium text-Orange-900">Drop a line</div>
                        <div className="text-2xl md:text-3xl font-semibold">Mail Us</div>
                    </div>
                </div>
                <div className="text-sm md:text-base mt-4">
                    <div>Support87@gmial.com</div>
                    <div className="mt-4">ijkuiu874@gmial.com</div>
                </div>
            </div>

        </div>
        <div className="flex flex-col sm:flex-row items-end mt-12">
            <div className="w-full sm:basis-5/12">
                <img className="mb-24" src="/assets/img/contact.svg" alt="Contact Image" />
            </div>
            <div className="w-full sm:basis-7/12">
                <div className="text-white text-3xl font-semibold">Send Your <span className="text-Orange-900">Message To Us</span></div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-6">
                    <input className="p-4 placeholder:text-white bg-Dark1 outline-none" type="text" placeholder="Name" autoComplete="off" />
                    <input className="p-4 placeholder:text-white bg-Dark1 outline-none" type="text" placeholder="Email" autoComplete="off" />
                    <input className="p-4 placeholder:text-white bg-Dark1 outline-none" type="text" placeholder="Mobile To" autoComplete="off" />
                    <input className="p-4 placeholder:text-white bg-Dark1 outline-none" type="text" placeholder="Subject" autoComplete="off" />
                </div>
                <textarea className="p-4 bg-Dark1 outline-none w-full min-h-[160px] mt-6 placeholder:text-white" placeholder="Send message"/>
                <button className="px-6 py-2 text-lg bg-Orange-900 text-white rounded-md mt-12 inline-block shadow-[3px_3px_20px_-6px_#FF5300]">Send Message</button>
            </div>
        </div>
    </div>
  )
}

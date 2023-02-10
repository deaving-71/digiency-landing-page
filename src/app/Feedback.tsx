import Image from "next/image"

export default function Feedback() {
  return (
    <div className='flex flex-col py-8 px-4 md:p-16 text-white text-center'>
        <h1>Clients Feedback</h1>
        <h2 className='text-4xl font-semibold leading-[1.3] capitalize mt-6'>
            <div>some <span className="text-Orange-900">great</span></div>
            <div><span className='text-Orange-900'>words</span> from our clients</div>
        </h2>
        <div className="flex justify-between gap-4 text-left mt-16 overflow-x-auto md:overflow-x-visible pl-8 md:pl-0">
            <div className="relative min-w-[300px] bg-Orange-900 py-8 px-6 m-4">
                <Image className="absolute rounded-full top-4 -left-10" src="/assets/img/Profile02.png" alt="Profile" width={80} height={80} />
                <h3 className="text-xl">Justin Septimus</h3>
                <div className="mt-2 text-sm">CEO, word yt</div>
                <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.</p>
            </div>
            <div className="relative min-w-[300px] bg-Orange-900 py-8 px-6 m-4">
                <Image className="absolute rounded-full top-4 -left-10" src="/assets/img/Profile01.png" alt="Profile" width={80} height={80} />
                <h3 className="text-xl">Ashlynn Gouse</h3>
                <div className="mt-2 text-sm">Managing Director</div>
                <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.</p>
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

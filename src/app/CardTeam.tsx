import Image from "next/image"

type Props = {
  id?: Number,
  image: string,
  name?: String,
  work?: String
}

export default function CardTeam({id, image, name, work}: Props) {
  return (
    <div className={`max-w-[270px] ${id == 3 ? "hidden" : 'block'} lg:block`}>   
        <div>
            <img src={`/assets/img/${image}`} alt="Team Member" />
        </div>
        <div className='bg-Dark1 text-white text-lg p-4'>
            <div>{name}</div>
            <div className="text-Gray text-sm mt-2">{work}</div>
        </div>
    </div>
  )
}
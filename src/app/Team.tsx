import CardTeam from "./CardTeam"
import { TeamCards } from "@/utils/utils"

export default function Team() {
  return (
    <div className='p-6 md:p-12 text-center text-white'>
        <h1>Team Members</h1>
        <h2 className="text-4xl font-semibold mt-6">
            <div>We Have</div>
            <div><span className="text-Orange-900">Some Awesome</span> People</div>
        </h2>
        <div className="flex justify-between gap-4 mt-12 overflow-x-auto">
            {TeamCards.map((member, idx) => {
                return <CardTeam key={idx} id={idx} image={member?.image} name={member?.name} work={member?.work} />
            })}
        </div>
    </div>
  )
}


type Props = {
    className?: string,
}

export default function CardExperience({ className }: Props) {
  return (
    <div className={`flex flex-col justify-center items-center text-center text-white text-3xl md:text-5xl bg-Dark2 p-4 md:p-8 my-4 sm-l:m-0 ${className}`}>
        250+
        <span className="text-Gray text-base md:text-xl mt-6">Global Customer</span>
    </div>
  )
}

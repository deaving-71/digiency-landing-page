
type Props = {
    color?: string,
    text?: String,
    shadow?: Boolean,
    icon?: String,
}

export default function CardAbout({color, text, shadow, icon}: Props) {
  const styles = {
    backgroundColor: `${color}`,
    boxShadow: `3px 3px 20px -6px ${shadow ? color : 'black'}`
  }  
  return (
    <div className='bg-Dark1 text-white text-center p-8 sm:p-4 sm:pt-8'>
        <div className={`w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] mx-auto rounded-full grid place-items-center`} style={styles}>
            <img src={`./assets/icons/${icon}`} alt={`Icon`} />
        </div>
        <div className="mt-4 lg:mt-8">{text}</div>
    </div>
  )
}

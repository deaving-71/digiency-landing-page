
type Props = {
    className?: string,
}
export default function SocialIcons({className}: Props) {
  return (
    <div className={`${className}`}>
        <div className="grid place-items-center w-[40px] h-[40px] bg-Orange-900">
            <img src='/assets/icons/facebook.svg' alt="facebook"/>
        </div>
        <div className="grid place-items-center w-[40px] h-[40px] bg-Dark2">
            <img src='/assets/icons/ig.svg' alt="instagram"/>
        </div>
        <div className="grid place-items-center w-[40px] h-[40px] bg-Dark2">
            <img src='/assets/icons/twitter.svg' alt="twitter"/>
        </div>
        <div className="grid place-items-center w-[40px] h-[40px] bg-Dark2">
            <img src='/assets/icons/skype.svg' alt="skype"/>
        </div>
    </div>
  )
}

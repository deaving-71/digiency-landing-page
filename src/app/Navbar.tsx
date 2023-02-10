import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-Dark2 px-4 py-3 lg:px-20 lg:py-6">
            <div>
                <Link href="./" className="text-Orange-900 text-2xl font-semibold">Digi<span className="text-white">ency</span></Link>
            </div>
            <div>
                <ul className="text-white hidden md:flex">
                    <li><Link href='#' className="p-2 lg:p-4">Home</Link></li>
                    <li><Link href='#' className="p-2 lg:p-4">About Us</Link></li>
                    <li><Link href='#' className="p-2 lg:p-4">Our Work</Link></li>
                    <li><Link href='#' className="p-2 lg:p-4">Clients</Link></li>
                    <li><Link href='#' className="p-2 lg:p-4">Our Blog</Link></li>
                    <li><Link href='#' className="p-2 lg:p-4">Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <button type="button"><img src="/assets/icons/darktheme.svg" alt="Icon" /></button>
            </div>
        </nav>
    )
  }
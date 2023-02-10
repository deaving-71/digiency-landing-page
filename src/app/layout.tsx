import './globals.css'
import Navbar from './Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='min-h-screen font-poppins'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}

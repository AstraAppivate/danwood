'use client'
import Link from 'next/link'
// import Image from 'next/image'

export function Header() {
  
  return (
    <header className="z-100 pb-6 pt-2 text-center font-bold text-red-500">
     
        <nav className="relative z-50 flex justify-center">
            <Link href="/" aria-label="Home" className='rotating'>
            </Link>
          <p className="text mt-2 underline">Noughts And Crosses - DevSecOps warfighter </p> 
        </nav>
          <Link className="text-xs mt-2 " href="github.com/danwood1992" aria-label="github"> By Dan Wood</Link>
   
    </header>
  )
}
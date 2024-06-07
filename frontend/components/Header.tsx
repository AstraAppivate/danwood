'use client'
import Link from 'next/link'
// import Image from 'next/image'

export function Header() {
  
  return (
    <header className="z-100 pb-2 pt-2 text-center font-bold text-red-500">
     
        <nav className="relative z-50 flex justify-center border rounded-xl border-black m-2 p-2">
          <Link href="/" aria-label="Home" className='rotating'></Link>
          <Link href="/" aria-label="Game" className='text text-black border border-black p-2 rounded m-2'>Home</Link>
          <Link href="/connect4" aria-label="Game" className='text text-black border border-black p-2 rounded m-2'>Connect 4</Link>
          <Link href="/noughts" aria-label="Game" className='text text-black border border-black p-2 rounded m-2'>Noughts</Link>
        </nav>
  
    </header>
  )
}
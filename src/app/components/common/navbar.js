'use client'

import { Modak } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { Button } from 'flowbite-react';

const modak = Modak({
  subsets: ['latin'],
  weight: '400',
})

export default function NavBar() {
  const router = useRouter()

  return (
    <div className="flex h-auto justify-between">
      <a href="/" className="flex justify-start">
        <div className={`${modak.className} text-5xl text-dark-green`}>PADY</div>
      </a>
      <div className="flex flex-row gap-6 h-10 font-bold">
        <Button color="light" className="rounded-full shadow-md font-semibold focus:ring-0" onClick={() => router.push("/")}>Text search</Button>
        <Button color="light" className="rounded-full shadow-md font-semibold focus:ring-0" onClick={() => router.push("/about")}>About</Button>
      </div>
    </div>
  )
}
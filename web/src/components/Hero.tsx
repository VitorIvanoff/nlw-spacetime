import Image from 'next/image'
import Link from 'next/link'

import nlwLogo from '../assets/nlw-spaceTime-logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight">Sua cápsula do tempo</h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
        </p>
      </div>

      <Link
        className="leading-nome inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase text-black hover:bg-green-600"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}

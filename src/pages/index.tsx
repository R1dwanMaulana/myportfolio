import Nav from '@/components/Nav'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <div className="bg-gray-50">
      <div className="lg:max-w-lg max-w-md mx-auto pb-10 pt-4 h-screen bg-white shadow-lg">
        <p className="mx-4 text-lg font-semibold">Hey, I'am Ridwan Maulana</p>
        <p className="mx-4 text-sm mt-4">I'am a software engineer graduated from Malang Islamic University majoring in electrical engineering concentrating on IT, I like frontend developer, the frameworks that I often use are vuejs and nuxtjs.
        </p>
        <p className="text-md font-semibold mt-4 mx-4">
          Latest Project
        </p>
        <div className="mx-4 rounded-lg mt-3 border py-2 shadow-sm justify-between flex">
          <p className="text-sm mx-4">Quran-id</p>
          <button className="bg-red-400 rounded-md w-8 mx-4 text-xs text-white shadow-md"><Link href="https://quran-id.vercel.app" target="_blank">Link</Link></button>
        </div>
        <div className="mx-4 rounded-lg mt-3 border py-2 shadow-sm justify-between flex">
          <p className="text-sm mx-4">Football league information</p>
          <button className="bg-red-400 rounded-md w-8 mx-4 text-xs text-white shadow-md"><Link href="https://info-liga.web.app" target="_blank">Link</Link></button>
        </div>
        <div className="mx-4 rounded-lg mt-3 border py-2 shadow-sm justify-between flex">
          <p className="text-sm mx-4">Kosbot kit</p>
          <button className="bg-red-400 rounded-md w-8 mx-4 text-xs text-white shadow-md"><Link href="https://kosbot-kit.web.app" target="_blank">Link</Link></button>
        </div>
      </div>
      <Nav />
    </div>
    </>
  )
}

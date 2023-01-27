import Nav from '@/components/Nav'
export default function about() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="lg:max-w-lg max-w-md mx-auto pb-3 pt-4 h-screen bg-white shadow-lg">
            <p className="text-md font-semibold mx-4">Languages</p>
              <ul className='text-sm mx-4'>
                <p>HTML & CSS</p>
                <p>Javascript</p>
              </ul>
            <p className="text-md font-semibold mx-4 mt-4">Frontend</p>
            <ul className="text-sm mx-4">
              <p>Vuejs</p>
              <p>NuxtJs</p>
            </ul>
            <p className="text-md font-semibold mx-4 mt-4">Database</p>
            <ul className="text-sm mx-4">
              <p>Firebase</p>
            </ul>
            <p className="text-md font-semibold mx-4 mt-4">Infrastructure</p>
            <ul className="text-sm mx-4">
              <p>Vercel</p>
              <p>Netlify</p>
            </ul>
            <p className="text-md font-semibold mx-4 mt-4">Contact Me👌🏻</p>
            <p className="text-sm mx-4 mt-1">You can contact via email at <span className='text-red-400'>rdwanf49@gmail.com</span>, or through the social media listed below :</p>
            <p className="text-sm mx-4 mt-1">Github : <a href='https://github.com/r1dwanmaulana' target="_blank"><span className='text-red-400'>r1dwanmaulana</span></a></p>
            <p className="text-sm mx-4 mt-1">Linkedin : <a href="https://linkedin.com/in/ridwanms"><span className="text-red-400">ridwanms</span></a></p>
          </div>
          <Nav />
        </div>
    </>
  )
}
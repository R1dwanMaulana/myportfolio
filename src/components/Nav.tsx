import Link from 'next/link'
export default function Nav() {
  return(
    <>
            <nav className="flex items-center justify-center fixed bottom-0 w-full h-16 bg-white border-t border-gray-300 z-40 text-gray-400 font-rubik">
        <div className="flex items-center justify-center w-full max-w-xl mx-auto">
            <ul className="flex items-center justify-around w-full">
                <li className="relative">
                    <Link href="/" className="inline-flex flex-col items-center justify-center text-center h-12 px-4 rounded-md font-semibold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mb-1 mx-auto">
                      <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                    </svg><span className="font-rubik font-normal text-xs truncate">Home</span></Link>
                </li>
                {/* <li className="relative">
                    <Link href="#" className="inline-flex flex-col items-center justify-center text-center h-12 px-4 rounded-md font-semibold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-6 mb-1 mx-auto">
                    <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                  </svg>
                  <span className="font-rubik font-normal text-xs truncate">Blog</span></Link>
                </li> */}
                <li className="relative">
                    <Link href="/experience" className="inline-flex flex-col items-center justify-center text-center h-12 px-4 rounded-md font-semibold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mb-1 mx-auto">
                      <path fillRule="evenodd" d="M19 5.5a4.5 4.5 0 01-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 11-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 015.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 00-.11.494 3.01 3.01 0 001.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382zM4 17a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span className="font-rubik font-normal text-xs truncate">Experience</span></Link>
                </li>
                <li className="relative">
                    <Link href="/about" className="inline-flex flex-col items-center justify-center text-center h-12 px-4 rounded-md font-semibold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mb-1 mx-auto">
                      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                    <span className="font-rubik font-normal text-xs truncate">About</span></Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}
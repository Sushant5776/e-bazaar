import { XIcon } from '@heroicons/react/solid'
import { NavDrawerAtom } from 'atoms/navAtom'
import { useRouter } from 'next/router'
import { useRecoilState, useSetRecoilState } from 'recoil'

const NavigationDrawer = () => {
  const router = useRouter()
  const [showNav, setShowNav] = useRecoilState(NavDrawerAtom)

  const closeOnClickingOutside = () => {
    console.log('clicked')
    setShowNav(false)
  }

  const routeToPage = (route: string) => {
    router.push(route)
    setShowNav(false)
  }

  return (
    <div
      onClick={() => closeOnClickingOutside()}
      className={`fixed top-0 left-0 z-50 h-screen w-full bg-[#0000001a] ${
        showNav ? 'block' : 'hidden'
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="absolute right-0 top-0 h-full w-max bg-white p-3 shadow-lg"
      >
        <div
          onClick={() => setShowNav(false)}
          className="absolute left-0 top-0 h-10 w-10 rounded-br-full bg-gray-100 pr-2 pb-2 pt-1 pl-1"
        >
          <XIcon className="h-6 w-6 text-red-500" />
        </div>
        <ul className="mt-12 space-y-2.5 children:rounded-lg children:bg-gray-100 children:py-2.5 children:px-4">
          <li onClick={() => routeToPage('/category/mensFashion')}>
            Mens Fashion
          </li>
          <li onClick={() => routeToPage('/category/womensFashion')}>
            Womens Fashion
          </li>
          <li onClick={() => routeToPage('/category/electronics')}>
            Electronics
          </li>
          <li onClick={() => routeToPage('/category/jewelry')}>Jewelry</li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationDrawer

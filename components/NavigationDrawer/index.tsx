import { XIcon } from '@heroicons/react/solid'
import { NavDrawerAtom } from 'atoms/navAtom'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'

const NavigationDrawer = () => {
  const router = useRouter()
  const setShowNav = useSetRecoilState(NavDrawerAtom)

  const closeOnClickingOutside = () => {
    setShowNav(false)
  }

  const routeToPage = (route: string) => {
    router.push(route)
    setShowNav(false)
  }

  return (
    <div
      onClick={() => closeOnClickingOutside()}
      className={`fixed top-0 left-0 z-50 h-screen w-full bg-[#0000001a]`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="absolute right-0 top-0 h-full w-max bg-white p-3 shadow-lg"
      >
        <XIcon
          onClick={() => setShowNav(false)}
          className="absolute left-2 top-2 h-6 w-6 rounded-lg bg-transparent text-red-500"
        />
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

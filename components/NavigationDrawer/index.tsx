import { XIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { NavDrawerAtom } from 'atoms/navAtom'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

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
          className="group absolute left-0 top-0 h-10 w-10 rounded-br-full bg-gray-100 pr-2 pb-2 pt-1 pl-1"
        >
          <XIcon className="h-6 w-6 text-red-500 group-active:underline" />
        </div>
        <ul className="mt-12 space-y-2.5 children:rounded-lg children:bg-gray-100 children:py-2.5 children:px-4">
          <li
            className="active:underline"
            onClick={() => routeToPage('/category/mensFashion')}
          >
            Mens Fashion
          </li>
          <li
            className="active:underline"
            onClick={() => routeToPage('/category/womensFashion')}
          >
            Womens Fashion
          </li>
          <li
            className="active:underline"
            onClick={() => routeToPage('/category/electronics')}
          >
            Electronics
          </li>
          <li
            className="active:underline"
            onClick={() => routeToPage('/category/jewelry')}
          >
            Jewelry
          </li>
        </ul>
        <hr className="my-2.5" />
        <Link href="/cart">
          <button className="group flex w-full items-center justify-center rounded-lg border border-slate-200 bg-gray-100 py-2">
            <ShoppingCartIcon className="mr-2 h-5 w-5 text-slate-700" />
            <p className="text-blue-500 group-active:underline">Your Cart</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavigationDrawer

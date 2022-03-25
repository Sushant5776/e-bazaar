import { ShoppingBagIcon, DotsHorizontalIcon } from '@heroicons/react/outline'
import { NavDrawerAtom } from 'atoms/navAtom'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'

const Header = () => {
  const router = useRouter()
  const setShowNav = useSetRecoilState(NavDrawerAtom)

  return (
    <header className="flex items-center justify-between">
      {/* Left */}
      <div
        onClick={() => router.replace('/')}
        className="flex items-start space-x-2 rounded-tr-[48px] rounded-br-[18px] bg-[#373c370d] py-1 pl-2 pr-5"
      >
        <ShoppingBagIcon className="h-7 w-7" />
        <h1 className="text-2xl font-medium text-[#E9C300]">E-Bazaar</h1>
      </div>

      {/* Right */}
      <div
        onClick={() => setShowNav(true)}
        className="cursor-pointer rounded-tl-[18px] rounded-bl-[48px] bg-[#373c370d] py-[6px] px-4"
      >
        <DotsHorizontalIcon className="relative left-1 h-7 w-7" />
      </div>
    </header>
  )
}

export default Header

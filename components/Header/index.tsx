import { ShoppingBagIcon, DotsHorizontalIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      {/* Left */}
      <div className="flex items-start space-x-2 rounded-tr-[48px] rounded-br-[18px] bg-[#373c370d] py-1 px-5">
        <ShoppingBagIcon className="h-7 w-7" />
        <h1 className="text-2xl font-medium text-[#FFBF4E]">E-Bazaar</h1>
      </div>

      {/* Right */}
      <div className="rounded-tl-[18px] rounded-bl-[48px] bg-[#373c370d] py-[6px] px-4">
        <DotsHorizontalIcon className="relative left-1 h-7 w-7" />
      </div>
    </header>
  )
}

export default Header

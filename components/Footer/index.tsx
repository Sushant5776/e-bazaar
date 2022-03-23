import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer className="mt-5 h-max rounded-t-lg bg-[#51424ee6] py-4">
      <h2 className="inline-block w-full text-center text-lg font-medium text-[#E9C300]">
        e-bazaar.com
      </h2>
      <div className="ml-4 mt-2 space-y-1.5 text-white opacity-80">
        <p className="flex items-center">
          <MailIcon className="inline-block h-6 w-6 pr-2" />
          <a href="mailto:garudkar.sa@gmail.com">gaxxxxxx.xx@gmail.com</a>
        </p>
        <p className="flex items-center">
          <PhoneIcon className="inline-block h-6 w-6 pr-2" />
          <a href="tel:+91xxxxxxxxxx">+91 XXX XXX XX 35</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

import Header from '@/components/Header'
import { MouseEvent } from 'react'

const SignIn = () => {
  const handleSignIn = (event: MouseEvent) => {
    event.preventDefault()
  }
  return (
    <div
      className="h-screen w-full"
      style={{ backgroundImage: "url('/images/background/background.png')" }}
    >
      <div className="h-screen w-full backdrop-blur-xl">
        <Header />
        <form className="absolute top-1/2 left-1/2 block h-max w-3/4 -translate-x-1/2 -translate-y-1/2 space-y-2.5 rounded-lg border border-slate-200 bg-gray-50 p-2.5">
          <h1 className="text-center text-lg font-semibold text-red-500">
            Login
          </h1>
          <hr className="mx-auto w-1/3 bg-red-200" />
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email..."
              className="mx-auto block w-full rounded-lg border-green-200 py-2 px-4 text-slate-900 focus:border focus:bg-green-50 focus:font-medium focus:outline-none"
            />
          </div>
          <div className="space-y-1 pb-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password..."
              className="mx-auto block w-full rounded-lg border-green-200 py-2 px-4 text-slate-900 focus:border focus:bg-green-50 focus:font-medium focus:outline-none"
            />
          </div>
          <button
            onClick={(event) => handleSignIn(event)}
            type="submit"
            className="text-md block w-full rounded-lg bg-green-500 p-2 font-medium text-white active:scale-95"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn

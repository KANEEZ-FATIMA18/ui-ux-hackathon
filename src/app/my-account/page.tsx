import Image from 'next/image'
import Link from 'next/link';
export default function MyAccount() {
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-gray-100 py-14">
          <div className="container mx-auto px-4">
            <h1 className="text-[36px] font-bold font-[JosefinSans] text-blue-900">My Account</h1>
            <p className="text-sm font-bold text-gray-500">
              Home / Pages / <span className="text-pink-500">My Account</span>
            </p>
          </div>
        </header>
  
        {/* Main Section */}
        <main className="container mx-auto px-4 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-lg p-8 mt-12 max-w-md w-full">
            <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
            <p className="text-center text-gray-600 text-sm mb-6">
              Please login using account details below.
            </p>
  
            {/* Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  name='email'
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  name='password'
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div className="text-left">
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-pink-600"
              >
                Sign In
              </button>
            </form>
  
            <p className="text-center text-gray-600 text-sm mt-6">
              Don&apos;t have an account?
              <Link href="#" className="text-pink-500 hover:underline">
                Create account
              </Link>
            </p>
          </div>
  
          {/* Footer Logos */}
          <div className=" justify-center  mt-12">
            <Image 
            src={'/image 1174.png'}
            alt='logo'
            width={900}
            height={1114}
            />
          </div>
        </main>
      </div>
    );
  }
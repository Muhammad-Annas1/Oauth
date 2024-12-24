"use client"

import Image from 'next/image'
import React from 'react'
import SignInComponent from './login/signincomponent'

const Signin = () => {  
  return (
    <div className="sm:grid sm:grid-cols-2 h-screen w-full">
      
      <div className="relative h-full hidden sm:block">
        <Image
          src="/pic_1.avif"
          alt="login"
          fill
          objectFit="cover"
          className="w-full h-full"
        />

        <div className='absolute w-full top-80 items-center text-center text-white text-4xl font-bold'>Muhammad Annas</div>
      </div>

     
      <div className="relative inset-0 bg-gradient-to-r from-slate-600 to-slate-300 h-screen flex flex-col justify-center items-center p-8 space-y-10"> {/* Gradient Background */}
        <div className="content flex flex-col items-center text-center gap-y-2 ">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl font-bold font-sans ml-3 text-[#4C3A6C] md:text-[#6F4F83]">Welcome Fellas❤️</h1>
          <span className="text-lg md:text-xl text-gray-700">Please Login With Your Email Account</span>
        </div>

     
        <form className="lg:space-y-11 space-y-8 w-full max-w-lg">
          <input
            type="email"
            placeholder="Email"
            className="font-serif w-full px-5 py-3 sm:p-3 lg:py-3 md:p-3 sm:py-2 border-b-2 hover:border-2 focus:ring-[#6F4F83] focus:border-b-0 border-b-[#4C3A6C] md:border-b-[#6F4F83] rounded-full focus:outline-none focus:ring-2 border-t-0"
          />
          <input
            type="password"
            name="pass"
            placeholder="Password"
            id="pass"
            className="font-serif w-full px-5 py-3 sm:p-3 lg:py-3 md:p-3 sm:py-2  border-b-2 border-b-[#4C3A6C] md:border-b-[#6F4F83] rounded-full focus:outline-none focus:ring-[#6F4F83] focus:border-b-0 focus:ring-2 border-t-0"
          />
          <button
            type="submit"
            className="text-xl w-full px-5 py-2 sm:p-3 lg:py-3 md:p-3 sm:py-2 bg-gradient-to-r from-[#5B3D6C] to-[#7A5587] text-white rounded-full hover:bg-gradient-to-r hover:from-[#6F4F83] hover:to-[#5B3D6C] transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center max-w-lg w-full gap-2">
          <div className="flex-grow h-0.5 bg-[#5B3D6C] md:bg-[#6F4F83]"></div>
          <div className="text-[#5B3D6C] md:text-[#6F4F83] font-medium px-2">OR</div>
          <div className="flex-grow h-0.5 bg-[#5B3D6C] md:bg-[#6F4F83]"></div>
        </div>

        <SignInComponent/>

        {/* Sign-up Link */}
        <div className="text-center sm:text-gray-600">
          Don&apos;t have an account?{" "}
          <span className="text-[#5B3D6C] md:text-[#6F4F83] font-serif font-bold cursor-pointer">Sign Up</span>
        </div>
      </div>
    </div>
  )
}

export default Signin;

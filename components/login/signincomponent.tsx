'use client';
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function SignInComponent() {
  return (
    <div className="flex gap-8 items-center justify-center text-xl sm:text-2xl md:text-3xl text-gray-800">
  
  <button
  onClick={() => signIn('google')}
  className="cursor-pointer bg-gradient-to-r from-blue-200 to-blue-400 p-4 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>
  <FaGoogle className="lg:text-4xl sm:text-4xl text-white hover:text-yellow-300" />
</button>

      
      <button
  onClick={() => signIn('github')}
  className="cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400 p-4 rounded-full shadow-lg hover:from-gray-500 hover:to-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>
  <FaGithub className="lg:text-5xl sm:text-5xl text-black hover:text-white" />
</button>

    </div>
  );
}

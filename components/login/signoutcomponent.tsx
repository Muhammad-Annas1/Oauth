'use client';
import { signOut } from 'next-auth/react';

export default function SignOutComponent() {
  return (
    <div className="flex items-center justify-center h-28 w-60 bg-gray-100 rounded-lg shadow-md mx-auto mt-15">
      <button
        onClick={() => signOut()}
        className="px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-md shadow hover:from-red-600 hover:to-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Sign Out
      </button>
    </div>
  );
}

"use client"
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { useSession } from 'next-auth/react';
import SignOutComponent from './login/signoutcomponent';



const Navbar = () => {
    const { data: session } = useSession();
  
    const isAuthenticated = !!session?.user;
    const image =session?.user?.image;
    const name = isAuthenticated? session?.user?.name : "Anonymous"
  
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:p-8 text-black  bg-none">
      <h1 className="text-2xl md:text-4xl ml-8 font-bold text-slate-900 ">Front-End Development</h1>
      <div className="text-xl md:text-xl flex items-center justify-between gap-x-1 font-semibold md:gap-x-14">
        <span className='max-w-[60px]'>
          {name}
        </span>
        <div className='z-50'>
<div className="rounded-full w-8 h-8 md:w-12 md:h-12 relative overflow-hidden">
              <DropdownMenu>
  <DropdownMenuTrigger> 
  {isAuthenticated && (<Image
            src={`${image}`}
            alt="My Profile"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full "
          />)}
                 
        </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel className='text-xl'>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <hr />
    <DropdownMenuItem><SignOutComponent/></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>       
       </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar


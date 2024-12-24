import React from "react";
import Navbar from "./navbar";
import { useSession } from "next-auth/react";
import Signin from "./signin";

const Hero = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  return (
    <div  className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/frontend.jpg')" }}>
      {isAuthenticated ? (
        <>
          <Navbar />
          <div className="relative z-10 flex flex-col items-center md:items-start justify-center  text-center md:text-start h-full px-4 md:p-16 ">
            <div className="max-w-lg md:py-6 mt-28">
              
              <h1 className="text-5xl font-bold md:font-extrabold my-4">
               What Is Front-End Development
              </h1>
            </div>

            <p className="text-lg md:text-2xl mb-6 text-gray-700 ">
              Front-end development is like being a magician who makes websites come to life! You get to play with HTML, CSS, and JavaScript, turning boring pages into interactive masterpieces. It’s like painting a picture, but with code except the paint never dries, and you have to constantly refresh it. You’re the hero who makes things look pretty and functional, while secretly crying over browser compatibility issues. But hey, at least you get to brag about making the website “responsive” when it works on all devices unless it doesn’t! 😅
              </p>
            
          </div>
        </>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default Hero;

import React from "react";
import Title from "../assets/title.png";
import Resorte from "../assets/resorte.png";
import Ondulacion from "../assets/ondulacion.png";
import Persona from "../assets/Saly-2.png"
import Doodle from "../assets/doodle.png"
import { RiUser3Line } from "react-icons/ri";
import {CgMail} from 'react-icons/cg'
import {HiOutlineLockOpen} from "react-icons/hi"

const Login = () => {
  return (
    <div className="p-8">
        
      <div className="pt-8 m-0 inline-flex">
        
        <img src={Title} alt="title" className="h-28" />
        <img src={Ondulacion} alt="ondulacion" className="absolute left-32 top-1" />
        <img src={Resorte} alt="Resorte" className="absolute right-8"/>
        <img src={Doodle} alt="doodle" className="hidden sm:flex"/>
        <img src={Persona} alt="persona" className="hidden sm:flex"/>
      </div>
      
{/* ---------------------CONTAINER------------------------------- */}
      <div className="  border-black-tpm mt-6 rounded-40 text-center border-2 border-solid container font-heebo p-4 ">
{/* ------------------------------------------------------------- */}

        <div className="py-2  border-black-tpm border-b-2 border-dotted text-left">
            <h1 className="font-extrabold text-3xl p-3">Sign up</h1>
        </div>

        <div className="m-5  border-black-tpm">
          <button className="border border-solid border-black-tpm p-3 rounded-full container inline-flex space-x-6">
            <RiUser3Line className="bg-white rounded-full 
            w-8 h-8 p-2 m-0 " />
            <h4>username</h4>
          </button>
          
        </div>

        <div className="m-5">
          <button className="border-solid border border-black p-3 rounded-full container inline-flex space-x-6">
            <CgMail className="bg-white rounded-full
            w-8 h-8 p-2 "/>
            <h2>email</h2>
          </button>
          
        </div>

        <div className="m-5">
          <button className="border-solid border border-black p-3 rounded-full container inline-flex space-x-6">
            <HiOutlineLockOpen className="bg-white rounded-full
            w-8 h-8 p-2 "/>
            <h2>password</h2>
          </button>
          
        </div>
{/* ------------------------------------------------------------- */}
      </div>
{/* ------------------------------------------------------------- */}
      <div className="m-5 text-center">
        <button className="p-5  container rounded-40 bg-black-tpm text-white">Sign up</button>
      </div>
    </div>
  );
};

export default Login;

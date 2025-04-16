"use client";
import Image from "next/image";
import Link from "next/link"
import axios from "axios"

export default function signup() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <p>Singup</p>
      <div>
      <input type="text" placeholder="username" className="bg-gray-100 text-black px-2"></input>
      </div>
      <div>
      <input type="text" placeholder="password" className="bg-gray-100 text-black px-2"></input>
      </div>

      <div className="flex gap-4">
        <button className="bg-gray-500 px-4 py-2 active:scale-95 cursor-pointer" onClick={()=>{
        axios.post("/api/v1/auth/signup");
      }}>
          Signup
        </button>
        <Link href="../../">
        <button className="bg-gray-500 px-4 py-2 active:scale-95 cursor-pointer">
          HOME PAGE
        </button>
        </Link>
      </div>
    </div>
  );
}

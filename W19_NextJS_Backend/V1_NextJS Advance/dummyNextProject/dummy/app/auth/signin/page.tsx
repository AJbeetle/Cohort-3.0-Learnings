"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import {useRef} from "react";
import { useRouter } from "next/navigation";

// you donot need to name function, but you can
export default function Signin() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <p>Singin</p>
      <div>
      <input ref={username} type="text" placeholder="username" className="bg-gray-100 text-black px-2"></input>
      </div>
      <div>
      <input ref={password} type="password" placeholder="password" className="bg-gray-100 text-black px-2"></input>
      </div>

      <div className="flex gap-4">
        <button className="bg-gray-500 px-4 py-2 active:scale-95 cursor-pointer" onClick={async()=>{
        await axios.post("/api/v1/auth/signin",{
          username : username.current?.value,
          password : password.current?.value
        });

        router.push("/auth/signup")
      }}>
          Signin
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


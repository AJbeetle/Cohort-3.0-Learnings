// "use client";
import Image from "next/image";
import Link from "next/link";
// when doing following method of hooks, then you have to make this as a cleint component, this is bad way though
// import {useRouter} from "next/navigation"

export default function Home() {
  // const Router = useRouter();
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen border border-white border-solid">
      <div> Hey Buddy Welcome to Dummy NextJs Project</div>
      <div className="flex gap-4">

        {/* One way of doing routing */}
        <Link href="/auth/signin">
          <button type="button" className="bg-gray-500 px-4 py-2 active:scale-95 cursor-pointer">Singin</button>
        </Link>

        <Link href="/auth/signup">
          <button type="button" className="bg-gray-500 px-4 py-2 active:scale-95 cursor-pointer">Singup</button>
        </Link>

        {/* Another way of doing routing */}

        {/* <button type="button" className="bg-gray-500 px-4 py-2 active:scale-95 cursor-pointer" onClick={()=>{
          Router.push("/auth/signin")
        }}>Singin</button>
        <button type="button" className="bg-gray-500 px-4 py-2 active:scale-95 cursor-pointer" onClick={()=>{
          Router.push("/auth/signup")
        }}>Singup</button> */}


        {/* So, basically, whenever you hvae to do, something on onClick, like send something to th backend , then your current component needs to be client component, you can do several optimisations, like keeping one button component separate as client component and keep this button here as server component only [little complicated thinkk about this]*/}


      </div>
    </div>
  );
}

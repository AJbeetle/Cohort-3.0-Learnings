/* "use client";
import Image from "next/image";
import {useSession, SessionProvider, signOut, signIn } from "next-auth/react"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hi there people
      <SessionProvider>
        <RealHome></RealHome>
      </SessionProvider>

    </div>
  );
}


function RealHome(){
  const session = useSession();
  return (
    <div>
      {session.status==="authenticated" && <button className="bg-gray-200 text-black px-2 py-1 rounded-lg active:scale-95" onClick={()=>signOut()}>SignOut</button>}
      {session.status==="unauthenticated" && <button className="bg-gray-200 text-black px-2 py-1 rounded-lg active:scale-95" onClick={()=>signIn()}>SignIn</button>}

      {JSON.stringify(session)}
    </div>
  )
}
 */



// ------------------------------------------------------------------------------------------------


import Image from "next/image";
// import {useSession, SessionProvider, signOut, signIn } from "next-auth/react"
import {getServerSession} from "next-auth"


export default async function Home() {
  const session = await getServerSession();
   
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div>
        Hi there people
      </div>
      <br/>
      <div>
        {JSON.stringify(session)}
      </div>
    </div>
  );
}


/* function RealHome(){ 
  const session = useSession();
  return (
    <div>
      {session.status==="authenticated" && <button className="bg-gray-200 text-black px-2 py-1 rounded-lg active:scale-95" onClick={()=>signOut()}>SignOut</button>}
      {session.status==="unauthenticated" && <button className="bg-gray-200 text-black px-2 py-1 rounded-lg active:scale-95" onClick={()=>signIn()}>SignIn</button>}

      {JSON.stringify(session)}
    </div>
  )
}
 */
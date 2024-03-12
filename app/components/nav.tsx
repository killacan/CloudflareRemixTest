import AuthButton from './AuthButton'
import LinkComponent from './link'
import { Session } from '@supabase/supabase-js';
import { Link } from "@remix-run/react";



export default function Nav({session} : {session: Session | null}) {


  return (
    <nav className="w-full flex flex-col justify-center items-center border-b border-b-foreground/10 h-17">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div className='flex gap-2'>
            <Link className='text-xl' to={"/"}>Share Diffusion</Link>
            {session && <LinkComponent href={"/createpost"}>Post!</LinkComponent>}
          </div>
          <AuthButton session={session}/>
        </div>
        <div className="w-full max-w-4xl flex items-center p-3 text-sm">
          <LinkComponent href={"/models"}>Models</LinkComponent>
          <LinkComponent href={"/photos"}>Photos</LinkComponent>
        </div>
    </nav>
  )
}


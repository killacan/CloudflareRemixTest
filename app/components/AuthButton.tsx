import { Form, Link } from "@remix-run/react";
import { Session } from '@supabase/supabase-js'
import LinkComponent from '~/components/link'

interface AuthButtonProps {
  session: Session | null;
}

export default function AuthButton({session}: AuthButtonProps) {

  // console.log(session, 'session')

  return session ? (
    <div className="flex items-center gap-4">
      <LinkComponent href={`/profiles/${session.user.user_metadata.username}`}>{session.user.user_metadata.username}!</LinkComponent>
      <Form action="/auth/logout" method="post">
        <button
          className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          type="submit"
        >
          Logout
        </button>
      </Form>
    </div>
  ) : (
    <Link
      to="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  )
}

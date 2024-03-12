import { createServerClient, parse, serialize } from '@supabase/ssr'
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Nav from "~/components/nav";
import { Session } from '@supabase/supabase-js';

// Define the type for the loader data
type LoaderData = {
    session: Session | null;
  };

export const loader: LoaderFunction = async ({ request }) => {
    const cookies = parse(request.headers.get('Cookie') ?? '')
    const headers = new Headers()
  
    const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
      cookies: {
        get(key) {
          return cookies[key]
        },
        set(key, value, options) {
          headers.append('Set-Cookie', serialize(key, value, options))
        },
        remove(key, options) {
          headers.append('Set-Cookie', serialize(key, '', options))
        },
      },
    })
    const { data: { session } } = await supabase.auth.getSession();

    console.log(session, 'session')
    return { session };
};

export default function NavRoute() {
    const loaderData = useLoaderData<LoaderData>();

    if (loaderData) {
        return <Nav session={loaderData.session} />;
    } else {
        return <Nav session={null} />;
    }

}
import { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createServerClient, parse, serialize } from '@supabase/ssr'
import { getURL } from "~/components/getauthurl";

export const action: ActionFunction = async ({ request }) => {
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

  await supabase.auth.signInWithOAuth({
    provider: 'github', 
    options: {
      redirectTo: getURL(),
    },
  })

  return redirect("/");
};
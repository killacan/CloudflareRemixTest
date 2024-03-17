import { type ActionFunctionArgs } from '@remix-run/node'
import { createServerClient, parse, serialize } from '@supabase/ssr'
import { signinFormSchema } from '~/components/schemas'

export async function action({ request }: ActionFunctionArgs) {
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

  const formData = await request.formData()
  const { email, password } = Object.fromEntries(formData)

  const parsedData = signinFormSchema.safeParse({
    email,
    password,
  })

  if (!parsedData.success) {
    return new Response(JSON.stringify(parsedData.error), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: parsedData.data.email,
    password: parsedData.data.password,
  })
}
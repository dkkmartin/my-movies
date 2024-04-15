import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('request_token')
  const url = `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.API_KEY}`
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({ request_token: token }),
  }
  try {
    const res = await fetch(url, options)
    if (!res.ok) {
      throw new Error('Failed to fetch data: ' + res.statusText)
    }
    const data = await res.json()
    cookies().set('SID', data.session_id)
    return Response.json(data)
  } catch (err) {
    console.log(err)
    return Response.json({
      status: 404,
      message: err,
    })
  }
}

export async function POST(request: Request) {
  const req = await request.json()
  const url = `https://api.themoviedb.org/3/account/${process.env.USER_ID}/favorite?api_key=${process.env.API_KEY}`
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(req),
    })
    if (res.status === 404 || res.status === 400) {
      throw new Error('Failed to POST data: ' + res.status)
    }
    const data = await res.json()
    return Response.json(data)
  } catch (err) {
    console.log(err)
    return Response.json({
      status: 404,
      message: err,
    })
  }
}

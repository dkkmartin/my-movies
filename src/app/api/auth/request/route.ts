export async function GET(request: Request) {
  const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.API_KEY}`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }
  try {
    const res = await fetch(url, options)
    if (!res.ok) {
      throw new Error('Failed to fetch data: ' + res.statusText)
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

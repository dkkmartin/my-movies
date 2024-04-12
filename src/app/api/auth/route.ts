export async function GET(request: Request) {
  const url = `https://api.themoviedb.org/3/authentication/token/new`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  }
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Failed to fetch data: ' + res.status)
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

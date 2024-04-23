export async function GET(
  request: Request,
  { params }: { params: { query: string } }
) {
  const query = params.query

  const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${process.env.API_KEY}`
  try {
    if (!query) return
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

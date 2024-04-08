export async function GET(
  response: Response,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US&api_key=${process.env.API_KEY}`
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

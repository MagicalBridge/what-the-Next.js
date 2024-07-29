import { NextResponse } from 'next/server'
// app/api/search/route.js
// 访问 /api/search?query=hello
export function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') // query

  return NextResponse.json(query)
}

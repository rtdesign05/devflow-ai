import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const getSecret = () => new TextEncoder().encode(process.env.JWT_SECRET ?? '')

async function isValidToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getSecret())
    return true
  } catch {
    return false
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('session')?.value

  const isProtected =
    pathname.startsWith('/dashboard') ||
    pathname === '/about' ||
    pathname === '/contact'

  const isPublicOnly =
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/'

  const valid = token ? await isValidToken(token) : false

  if (isProtected && !valid) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isPublicOnly && valid) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register', '/', '/about', '/contact'],
}

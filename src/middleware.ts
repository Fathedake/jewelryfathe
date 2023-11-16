import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import configBaseUrlFront from './config/front';

export  function middleware(request: NextRequest) {
 /* if (request.nextUrl.pathname !== '/gestionnaire/login' && request.nextUrl.pathname !== '/gestionnaire/register' && request.nextUrl.pathname !== '/gestionnaire/successInscription') {
    const connect_cookie=request.cookies.has('gestionnaire')
    if(connect_cookie){
      return NextResponse.next();
    }
    else {
      return NextResponse.redirect(new URL('/gestionnaire/login',configBaseUrlFront))
   //  return NextResponse.next();
    }
  }
  return NextResponse.next();
 */
// return  NextResponse.redirect(new URL(request.nextUrl.pathname,configBaseUrlFront))
if(request.nextUrl.pathname=='/'){
  return  NextResponse.redirect(new URL('/home',configBaseUrlFront))
}
return NextResponse.next();
}

/*export const config = {
  matcher: ['/home/:path*',],
}*/

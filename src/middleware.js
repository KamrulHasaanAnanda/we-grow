import { NextResponse } from "next/server";

export function middleware(request) {
  // get the URL from request header
  const requestHeaders = new Headers(request.headers);
  // console.log("request", request.nextUrl.pathname);
  requestHeaders.set("x-url", request.nextUrl.pathname);

  // pass the header to the layout
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

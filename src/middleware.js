import { NextResponse } from "next/server";

export function middleware(request) {
  // get the URL from request header
  const requestHeaders = new Headers(request.headers);
  console.log('object :>> ', request.nextUrl.host);
  const host = request.nextUrl.host;
  const protocol = request.headers['x-forwarded-proto'] || 'http';
  const domain = `${protocol}://${host}`;
  // console.log("request", request.nextUrl.pathname);
  requestHeaders.set("x-url", request.nextUrl.pathname);
  requestHeaders.set("domain", domain);

  request
  // pass the header to the layout
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

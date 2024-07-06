import { NextRequest, NextResponse } from "next/server";

// 特定場所へアクセスさせない例
export function middleware(request: NextRequest) {
  // return next
  //   return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: ["/about/:path*", "/tours/:path*"],
};

// // 特定場所へアクセスさせない例
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }
// export const config = {
//   matcher: ["/about/:path*", "/tours/:path*"],
// };

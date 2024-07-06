import { fetchUsers, saveUser } from "@/actions/user";
import { NextRequest, NextResponse } from "next/server";

// NextRequestはRequestのラッパ export declare class NextRequest extends Request {

// export async function GET(request: Request) {
export async function GET(request: NextRequest) {
  // クエリパラメータ受け取りたい
  //   console.log(new URL(request.url).searchParams.get("id"));
  //   console.log(request.nextUrl.searchParams.get("id"));
  const users = await fetchUsers();

  //   // リダイレクトしたいとき
  //   const rootPage = new URL("/", request.url);
  //   return NextResponse.redirect(rootPage);   // 相対パスだとダメ

  //
  return NextResponse.json({ message: "ok", users });
}

export async function POST(request: NextRequest) {
  const { firstName, lastName } = await request.json();
  const user = { firstName, lastName, id: Date.now().toString() };
  await saveUser(user);

  return NextResponse.json({ message: "created" });
}

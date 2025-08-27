import { NextResponse } from "next/server";

export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASS) {
    // ✅ Don’t expose password client-side
    const res = NextResponse.json({ success: true });

    // Set HttpOnly cookie for session
    res.cookies.set("admin-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    return res;
  } else {
    return NextResponse.json({ success: false, error: "Wrong password" }, { status: 401 });
  }
}

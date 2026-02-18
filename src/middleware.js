import { NextResponse } from "next/server";

export function middleware(request) {
	const token = request.cookies.get("auth_token")?.value;
	const { pathname } = request.nextUrl;

	const publicRoutes = ["/login", "/signup"];

	// If no token and trying to access protected route
	if (!token && !publicRoutes.includes(pathname)) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// If token exists and trying to access login/signup
	if (token && publicRoutes.includes(pathname)) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!_next|favicon.ico).*)"],
};

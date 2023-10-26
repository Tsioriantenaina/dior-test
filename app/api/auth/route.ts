import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json();
	console.log(body);
	const { login, password } = body.data;

	if (login !== "admin" || password !== "admin") {
		return new NextResponse("Please make sur you login and password", { status: 401 });
	}

	return NextResponse.json(body);
}

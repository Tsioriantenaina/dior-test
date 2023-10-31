import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const server = setupServer(
	http.post("/api/login", () => {
		return HttpResponse.json({ login: "admin", password: "admin" }, { status: 200 }); // Mock a successful API response
	})
);

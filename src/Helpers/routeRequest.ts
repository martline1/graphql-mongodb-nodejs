import request, { Test } from "supertest";

// Import Own Modules
import {
	JWT,
	createToken,
} from "~/Helpers";
import app from "../app";

type Token = JWT.Decoded | string;

const routeRequest = (method: "post" | "put" | "delete" | "patch" | "get", url: string) => (token: Token = "") => {
	const route = request(app)[method](url)
		.set("Content-Type", "multipart/form-data");

	if (token) {
		const newToken = typeof token === "string"
			? token
			: createToken(token.reason, token.data);

		route.set("Authorization", `Bearer ${newToken}`);
	}

	return route;
};

export default routeRequest;

import LoginPage from "@/app/page";
import HomePage from "@/app/home/page";
import { act, fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

//Mock useRouter;
jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			route: "/home",
			pathname: "",
			query: "",
			asPath: "",
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
			push: jest.fn(),
		};
	},
}));

jest.mock("next/router", () => ({
	useRouter: () => ({
		push: jest.fn(),
	}),
}));

describe("Login Page", () => {
	describe("LOGIN INPUT/LABEL", () => {
		it("Login input should be renderd", () => {
			render(<LoginPage />);
			const logingInput = screen.getByTestId("login");
			expect(logingInput).toBeInTheDocument();
		});

		it("login label should be render", () => {
			render(<LoginPage />);
			const inputLabel = screen.getByTestId("login-label");
			expect(inputLabel).toBeInTheDocument();
		});

		it("Login input should be empty", () => {
			render(<LoginPage />);
			const logingInput = screen.getByTestId("login");
			expect(logingInput.value).toBe("");
		});

		it("Login input should change", () => {
			render(<LoginPage />);
			const logingInput = screen.getByTestId("login");
			const inputValue = "admin";
			fireEvent.change(logingInput, { target: { value: inputValue } });
			expect(logingInput.value).toBe(inputValue);
		});
	});

	describe("PASSWORD INPUT/LABEL", () => {
		it("Password input should be render", () => {
			render(<LoginPage />);
			const passwordInput = screen.getByTestId("password");
			expect(passwordInput).toBeInTheDocument();
		});

		it("password label should be render", () => {
			render(<LoginPage />);
			const inputLabel = screen.getByTestId("password-label");
			expect(inputLabel).toBeInTheDocument();
		});

		it("password input should be empty", () => {
			render(<LoginPage />);
			const passwordInput = screen.getByTestId("password");
			expect(passwordInput.value).toBe("");
		});
	});

	describe("BUTTON LOGIN", () => {
		it("Button LOGIN should be render", () => {
			render(<LoginPage />);
			const loginBtn = screen.getByRole("button");
			expect(loginBtn).toBeInTheDocument();
			expect(loginBtn).toHaveTextContent(/login/i);
		});
	});

	describe("ERROR MESSAGE", () => {
		beforeEach(() => {
			fetchMock.resetMocks();
		});

		it("Error message should not be in the DOM", () => {
			const { queryByTestId } = render(<LoginPage />);
			const errorMessage = queryByTestId("error-message");
			expect(errorMessage).toBeNull();
		});

		it("Error message should in the DOM when Login Button is clicked and all field are empty", async () => {
			render(<LoginPage />);
			const logingInput = screen.getByTestId("login");
			const passwordInput = screen.getByTestId("password");
			const loginBtn = screen.getByTestId("loginBtn");
			fireEvent.change(logingInput, { target: { value: "" } });
			fireEvent.change(passwordInput, { target: { value: "" } });
			loginBtn.click();
			const errorMessage = screen.findByTestId("error-message");
			expect(errorMessage).toBeTruthy();
		});

		it("Error message should in the DOM when 1 filed is empty", () => {
			render(<LoginPage />);
			const logingInput = screen.getByTestId("login");
			const passwordInput = screen.getByTestId("password");
			const loginBtn = screen.getByTestId("loginBtn");
			fireEvent.change(logingInput, { target: { value: "test" } });
			fireEvent.change(passwordInput, { target: { value: "" } });
			loginBtn.click();
			const errorMessage = screen.findByTestId("error-message");
			expect(errorMessage).toBeTruthy();
		});
	});
});

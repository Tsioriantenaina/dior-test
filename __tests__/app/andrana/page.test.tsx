import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AndranaPage from "@/app/andrana/page";

describe("LoginPage", () => {
	it("Should render properly", () => {
		render(<AndranaPage />);

		const header = screen.getByRole("heading");
		const headerText = "AndranaPage";

		expect(header).toHaveTextContent(headerText);
	});

	it("should have a disable button", () => {
		render(<AndranaPage />);

		const buttonElement = screen.getByRole("button");

		expect(buttonElement).toBeDisabled();
	});

	it("Should have a <p> tag with className of blue", () => {
		render(<AndranaPage />);

		const pElement = screen.getByTestId("paragrah-blue");
		// const pElement = screen.getByRole("paragraph");

		expect(pElement).toHaveClass("blue");
		expect(pElement).toHaveTextContent("This is our paragraph");
	});
});

require("jest-fetch-mock").enableMocks();
import "@testing-library/jest-dom/jest-globals";

window.matchMedia = jest.fn().mockImplementation((query) => {
	return {
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
	};
});

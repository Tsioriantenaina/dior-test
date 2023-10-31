import { createRouter } from "next/router";

export const { Router, useRouter, withRouter, wrapper } = createRouter({
	// You can configure the router as needed
	initialEntries: ["/"],
	initialIndex: 0,
});

// Mock the router's push method
Router.prototype.push = jest.fn();

// Export the router for use in your tests
export { Router };

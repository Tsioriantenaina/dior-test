export const formatPrice = (price: string): number => {
	return Number(price.replace(/\s/g, ""));
};

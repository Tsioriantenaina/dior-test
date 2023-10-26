import toast from "react-hot-toast";
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

import { ProductType } from "@/types";
import { formatPrice } from "@/utility/utility";
interface CartStore {
	items: ProductType[];
	addItem: (data: ProductType) => void;
	removeItem: (id: number) => void;
	removeAll: () => void;
	incrementQuantity: (data: ProductType, unitPrice: number) => void;
	decrementQuantity: (data: ProductType, price: number) => void;
}

const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem: (data: ProductType) => {
				const currentItems = get().items;
				const existingItem = currentItems.find((item) => item.id === data.id);

				if (existingItem) {
					return toast.error("This product is already in cart.");
				}

				set({ items: [...get().items, data] });
				toast.success("Product addd to cart");
			},
			removeItem: (id: number) => {
				set({ items: [...get().items.filter((item) => item.id !== id)] });
				toast.success("Product remove from cart");
			},
			removeAll: () => set({ items: [] }),
			incrementQuantity: (data: ProductType, price: number) => {
				const currentItems = get().items;
				const newItems = currentItems.map((currentItem) => {
					if (currentItem.id === data.id) {
						return {
							...currentItem,
							quantity: data.quantity + 1,
							price: (formatPrice(data.price) + price).toString(),
						};
					}

					return currentItem;
				});

				set({ items: newItems });
			},
			decrementQuantity: (data: ProductType, price: number) => {
				const currentItems = get().items;
				const newItems = currentItems.map((currentItem) => {
					if (currentItem.id === data.id) {
						return {
							...currentItem,
							quantity: data.quantity - 1,
							price: (formatPrice(data.price) - price).toString(),
						};
					}

					return currentItem;
				});

				set({ items: newItems });
			},
		}),
		{
			name: "cart-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default useCart;

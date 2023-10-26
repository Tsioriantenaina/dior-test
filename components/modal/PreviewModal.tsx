import usePreviewModal from "@/hooks/usePreviewModal";
import React from "react";
import Modal from "./Modal";
import CartList from "../cart/CartList";

const PreviewModal = () => {
	const previewModal = usePreviewModal();
	const products = usePreviewModal((state) => state.data);

	if (products?.length === 0) {
		return null;
	}

	return (
		<Modal
			open={previewModal.isOpen}
			onClose={previewModal.onClose}
		>
			<CartList />
		</Modal>
	);
};

export default PreviewModal;

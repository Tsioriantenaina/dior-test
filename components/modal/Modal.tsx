"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

import closeBtn from "@/public/closeBtn.png";
import cart from "@/public/cart.png";

import Item from "../navbar/Item";
import useCart from "@/hooks/useCart";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
	const cartItem = useCart();
	return (
		<Transition
			show={open}
			appear
			as={Fragment}
			enter="transition-opacity duration-150"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<Dialog
				as="div"
				className="relative z-20"
				onClose={onClose}
			>
				<div className="fixed inset-0 bg-black bg-opacity-60" />
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-start justify-end text-right ">
						<Dialog.Panel className="w-full  max-w-3xl text-right align-middle modal_container">
							<div className="relative flex w-full h-screen items-start justify-end bg-white pt-[60px] sm:pt-[54px] md:pt-[98px] lg:pr-[38px] lg:pt-[135px] modal_content">
								<div className="absolute left-4 top-[19px] sm:top-[19px] md:top-[46px] lg:top-[51px] w-[35px] h-[35px] ">
									<Image
										alt="close button"
										onClick={onClose}
										src={closeBtn}
										fill
										className="cursor-pointer"
									/>
								</div>
								<div className="absolute right-[38px] top-[19px] sm:top-[19px] md:top-[46px] lg:top-[51px] w-[35px] h-[35px] ">
									<Item
										icon={cart}
										onClick={() => {}}
										iconWidth="51px"
										iconHeight="42px"
										className="cart cursor-pointer"
										cartCount={cartItem.items.length}
									/>
								</div>
								{children}
							</div>
						</Dialog.Panel>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;

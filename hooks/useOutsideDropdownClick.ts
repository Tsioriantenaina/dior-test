import React, { useEffect } from "react";
import useFilterDropdown from "./useFilterDropdown";
import useSortDropdown from "./useSortDropdown";

const useOutsideDropdownClick = (ref: React.RefObject<HTMLDivElement>) => {
	const dropDown = useFilterDropdown();
	const dropSort = useSortDropdown();
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				const filterTarget = e.target.closest(".filter");
				const sortTarget = e.target.closest(".sort");
				if (filterTarget) {
					dropSort.toggleOpen();
					return;
				}

				if (sortTarget) {
					dropDown.toggleOpen();
					return;
				}
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.addEventListener("mousedown", handleClickOutside);
		};
	}, [ref, dropDown, dropSort]);
};

export default useOutsideDropdownClick;

import Item from "./Item";
import key from "../../public/key.png";

const CenterNav = () => {
	return (
		<div className="navbar_center">
			<Item
				label="The secret collection"
				icon={key}
				onClick={() => {}}
				column
			/>
		</div>
	);
};

export default CenterNav;

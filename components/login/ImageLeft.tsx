import Image from "next/image";

import tourEiffel from "../../public/pngwing.png";
import tourEiffelM from "../../public/mpngwing.png";

const ImageLeft = () => {
	return (
		<div className="md:shrink-0 absolute bottom-0 right-0 login_right">
			<Image
				alt="tour eifel"
				src={tourEiffel}
				className="tourEifel"
			/>
			<Image
				alt="tour eifel"
				src={tourEiffelM}
				className="tourEifel mobileOnly"
			/>
		</div>
	);
};

export default ImageLeft;

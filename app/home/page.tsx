import Button from "@/components/Button";
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import Navbar from "@/components/navbar/Navbar";
import ProductSlide from "@/components/slider/ProductSlide";

const HomePage = () => {
	return (
		<ClientOnly>
			<Container>
				<Navbar />
				<ProductSlide />
			</Container>
		</ClientOnly>
	);
};

export default HomePage;

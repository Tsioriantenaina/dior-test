import ClientOnly from "@/components/ClientOnly";
import Logout from "@/components/logout/Logout";

const LogoutPage = () => {
	return (
		<ClientOnly>
			<Logout />
		</ClientOnly>
	);
};

export default LogoutPage;

import { APP_NAME } from "@/lib/constants";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t">
			<div className="p-5 flex-center bg-slate-200">
				{currentYear} {APP_NAME}. All Rights Reserved
			</div>
		</footer>
	);
};

export default Footer;

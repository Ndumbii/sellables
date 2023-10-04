/** @format */

import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	page: string;
    selectedPage: SelectedPage;
    setselectedPage: (value: SelectedPage) => void;
};

const Links = ({ page, selectedPage, setselectedPage }: Props) => {
	const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
	return (
		<AnchorLink
			className={`${selectedPage === lowerCasePage ? "text-text" : ""}
                transition duration-500 hover:text-pink-bg `}
			href={`#${lowerCasePage}`}
			onClick={() => setselectedPage(lowerCasePage)}>
			{page}
		</AnchorLink>
	);
};

export default Links;

/** @format */

import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import GetStarted from "@/shared/GetStarted";
import Links from "./Links";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/UseMediaQuery";

type Props = {
	isTopofpage: boolean;
	selectedPage: SelectedPage;
	setselectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopofpage,selectedPage, setselectedPage }: Props) => {
	
const flexBetween = "flex items-center justify-between";

const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
const isAboveMediiumScreens = useMediaQuery("(min-width: 1060px)");
const navbarbg = isTopofpage ? "" : "bg-home-bg shadom-md";

	return (
		<nav
			className={`md:shadow-sm md:bg-nav-bg  md:w-1/2 w-full rounded mt-2 
     ${flexBetween} fixed md:ml-[20em] ml-0 z-[1] ${navbarbg} `}>
			<div
				className={`${flexBetween} w-full px-[3em]
    font-semibold `}>
				<div className={` ${flexBetween}`}>
					<a href='#' className='md:text-[1.2em] text-[1.5em]'>
						ZEEY<small><sup>TM</sup></small>
					</a>
				</div>
				{isAboveMediiumScreens ? (
					<div
						className='md:flex hidden justify-center
           items-center'>
						<div className='md:flex gap-6 mr-[4em] p-4'>
							<Links
								page='Service'
								selectedPage={selectedPage}
								setselectedPage={setselectedPage}
							/>
							<Links
								page='Pricing'
								selectedPage={selectedPage}
								setselectedPage={setselectedPage}
							/>
							<Links
								page='Resources'
								selectedPage={selectedPage}
								setselectedPage={setselectedPage}
							/>
						</div>
						<GetStarted />
					</div>
				) : (
					// on mobile screens
					<button
						className=''
						onClick={() => setIsMenuToggled(!isMenuToggled)}>
						<Bars3BottomRightIcon className='h-6 w-6 text-text' />
					</button>
				)}
			</div>
			{/* mobile menu */}
			{!isAboveMediiumScreens && isMenuToggled &&  (
				<div className="fixed right-0 top-[-1em] z-40 h-5/6 
				 w-[300px] drop-shadow-xl bg-home-bg">
					{/* close icon */}
					<div className="flex justify-end p-10">
					<button
						className=''
						onClick={() => setIsMenuToggled(!isMenuToggled)}>
						<XMarkIcon className='h-6 w-6 text-text font-bold' />
					</button>
					</div>
					{/* menu items */}
					<div
						className='ml-[33%] flex flex-col gap-10 '>
							<Links
								page='Service'
								selectedPage={selectedPage}
								setselectedPage={setselectedPage}
							/>
							<Links
								page='Pricing'
								selectedPage={selectedPage}
								setselectedPage={setselectedPage}
							/>
							<Links
								page='Resources'
								selectedPage={selectedPage}
								setselectedPage={setselectedPage}
							/>
						</div>
						<div className="ml-[21%] mt-10">
						<GetStarted/>
						</div>
					</div>

			)}
		</nav>
	);
};

export default Navbar;

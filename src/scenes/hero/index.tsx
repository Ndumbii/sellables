/** @format */

import hero from "../../assets/bg.png";

type Props = {};

const index = (props: Props) => {
	return (
		<section className='bg-home-bg h-[100vh] p-[5rem]'>
			<div className='flex flex-col'>
                <div className='absolute z-[0] w-[40%] h-[35%] 
                md:top-[18rem] top-[26rem] md:ml-[4rem] ml-[-4rem] '>
                <img
						src={hero}
						alt='hero-image'
						className='
                     rounded-full'
					/>
                </div>
                
				<div className='md:mt-[10em] mt-[3em] justify-center items-center text-center'>
					<h1
						className='md:text-6xl text-[2.5rem]
                         font-grotesque font-bold mb-[2rem] '>
						Giving you and me <br className='md:block hidden' />a platform.
					</h1>
					{/* round small circle */}
					<div className='' />
					<p className='font-normal font-montserrat'>
						Creating a can-do culture with a
						<span className='font-bold text-pink-bg'> Gen-Z</span> aspect to{" "}
						<br />
						monetise and build growth.
					</p>
					
				</div>
			</div>
		</section>
	);
};

export default index;

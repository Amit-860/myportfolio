import profile_img_light from "../assets/profile_pic_light_desktop.png";
import { FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import HireMe from "./hireMe";
import bulb from "../assets/bulb.svg";
import AnimatedText from "./animationText.component";

import Resume from "../assets/Amit_Resume.pdf";

const Body = () => {
	return (
		<>
			<div
				className="md:relative lg:my-auto lg:-mt-3 flex flex-col h-10/12 lg:flex-row md:justify-center
			 md:items-center mx-6 md:mx-28 lg:mx-32 pb-20 lg:pl-8 lg:pr-32  md:pb-28 lg:pb-0"
			>
				<div className="lg:w-6/12 my-auto">
					<img
						className="z-0 pt-10 md:pt-0 md:mt-0"
						src={profile_img_light}
						alt="profile_image_light"
					/>
				</div>
				<div className="lg:w-6/12 md:pt-10 flex flex-col justify-center md:items-center lg:items-start mt-10 md:mt-0 md:gap-2 gap-10">
					<AnimatedText
						text="Turning Vision into Reality with Code."
						optStyle="text-5xl text-center lg:text-left lg:text-6xl md:justify-center lg:justify-start"
					/>
					<p className="md:mt-4 md:text-lg text-xl text-center lg:text-left">
						As a full-stack developer, I am dedicated to turing ideas into
						innovative web applications. Explore my latest projects showcasing
						my React.js and web development skills.
					</p>
					<div className="flex items-center justify-center md:justify-normal gap-2 mt-4 md:mt-10 lg:mt-4">
						<div
							className="px-8 py-4 cursor-pointer shadow-black shadow-md rounded-lg
							bg-black text-slate-50 flex items-center justify-center border-black border-2
							hover:bg-slate-100 hover:text-gray-800 hover:shadow-gray-400
							hover:border-gray-300 hover:border-2"
						>
							<Link to={Resume} target="_blank" className="text-xl md:text-xl">
								Resume
							</Link>
							<FiShare className="ml-3 text-2xl md:text-base" />
						</div>
					</div>
				</div>
				<div className="hidden lg:block md:absolute w-1/12 h-auto -right-8 bottom-2">
					<img src={bulb} alt="bulb" />
				</div>
				<HireMe />
			</div>
		</>
	);
};

export default Body;

import profile_img_light from "../assets/profile_pic_light.jpg";
import { FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Resume from "../assets/Amit_Resume.pdf";

const Body = () => {
	return (
		<>
			<div className="flex flex-col lg:flex-row lg:h-5/6 sm:mx-20 lg:mx-40 mt-4 sm:mt-auto sm:mb-28 lg:mb-0">
				<div className="flex-1">
					<img
						className="z-0 sm:pt-14 lg:pt-0 lg:mt-0"
						src={profile_img_light}
						alt="profile_image_light"
					/>
				</div>
				<div className="lg:flex-1 flex flex-col justify-center sm:mt-10 lg:mt-0 lg:gap-2 sm:gap-10">
					<h1 className="sm:text-8xl sm:text-center lg:text-left lg:text-7xl">
						Turning Vision Into Reality With Code.
					</h1>
					<p className="mt-4 lg:text-lg sm:text-3xl sm:text-center lg:text-left">
						As a full-stack developer, I am dedicated to turing ideas into
						innovative web applications. Explore my latest projects showcasing
						my React.js and web development skills.
					</p>
					<div className="flex items-center sm:justify-center lg:justify-normal gap-2 mt-4">
						<div
							className="sm:w-96 sm:h-36 lg:w-36 lg:h-10 bg-black text-slate-50 flex items-center justify-center lg:rounded-md sm:rounded-2xl
							cursor-pointer shadow-black shadow-md hover:bg-slate-100 hover:text-gray-800 hover:shadow-gray-400
							hover:border-gray-200 hover:border-2"
						>
							<Link
								to={Resume}
								target="_blank"
								className="sm:text-5xl lg:text-base"
							>
								Resume
							</Link>
							<FiShare className="ml-3 sm:text-5xl lg:text-base" />
							<div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
						</div>
						<span className="underline underline-offset-2 cursor-pointer ml-3 sm:text-4xl lg:text-base">
							Contact
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Body;

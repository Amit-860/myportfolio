import profile_img_light from "../assets/profile_pic_light.jpg";
import { FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Resume from "../assets/Amit_Resume.pdf";

const Body = () => {
	return (
		<>
			<div className="flex flex-col h-fit md:flex-row md:h-5/6 mx-6 md:mx-40 mt-auto md:mt-4 mb-16 md:mb-0">
				<div className="flex-1 my-auto">
					<img
						className="z-0 pt-14 md:pt-0 md:mt-0"
						src={profile_img_light}
						alt="profile_image_light"
					/>
				</div>
				<div className="md:flex-1 flex flex-col justify-center mt-10 md:mt-0 md:gap-2 gap-10">
					<h1 className="text-5xl text-center md:text-left md:text-7xl">
						Turning Vision Into Reality With Code.
					</h1>
					<p className="md:mt-4 md:text-lg text-xl text-center md:text-left">
						As a full-stack developer, I am dedicated to turing ideas into
						innovative web applications. Explore my latest projects showcasing
						my React.js and web development skills.
					</p>
					<div className="flex items-center justify-center md:justify-normal gap-2 mt-4">
						<div
							className="px-10 py-4 cursor-pointer shadow-black shadow-md rounded-lg
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
			</div>
		</>
	);
};

export default Body;

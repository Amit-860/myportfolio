import React from "react";
import AnimatedText from "../components/animationText.component";
import Skills from "../components/skills.component";
import photo_pd from "../assets/Photo_pd.png";

const About = () => {
	return (
		<>
			<main className="container mx-auto lg:px-28 flex w-full flex-col items-center pb-20 md:pb-0 justify-center lg:pb-8">
				<AnimatedText
					text="Passion Fuels Purpose!"
					optStyle="text-5xl md:text-7xl lg:text-8xl justify-center font-semibold"
				/>
				<div className="flex flex-col-reverse md:flex-row md:pt-14 items-center justify-center gap-4 lg:gap-20 px-10 lg:px-0">
					<div className="w-full lg:w-6/12 text-lg text-center md:text-left md:text-sm lg:text-lg">
						<h3 className="text-2xl font-bold pb-3 pt-10 md:pt-0">BIOGRAPHY</h3>
						<p>
							Hi, I'm <span className="font-bold">Amit Bhagat</span>, a web
							developer and a python programmer with a passion for creating
							beautiful, functional, and user-centered digital experiences. I am
							always looking for new and innovative ways to bring my clients'
							visions to life.
						</p>
						<br />
						<p>
							I believe that design is about more than just making things work -
							it's about solving problems and creating intuitive, enjoyable
							experiences for users.
						</p>
						<br />
						<p>
							Whether I'm working on a website, mobile app, or other digital
							product, I bring my commitment to design excellence and
							user-centered thinking to every project I work on. I look forward
							to the opportunity to bring my skills and passion to your next
							project.
						</p>
					</div>
					<div className="lg:w-4/12 flex justify-center items-center">
						<img src={photo_pd} alt="" className="" />
					</div>
				</div>
				<div className="">
					<Skills />
				</div>
			</main>
		</>
	);
};

export default About;

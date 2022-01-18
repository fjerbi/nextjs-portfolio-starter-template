import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logojohndoe.png";

function Loading() {
	return (
		<div className="z-50 fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-60 flex items-center justify-center overflow-hidden backdrop-filter backdrop-blur-2xl">
			<motion.img
				animate={{ rotate: 360 }}
				transition={{
					repeat: Infinity,
					type: "spring",
					repeatType: "reverse",
					repeatDelay: 0.5,
					duration: 2,
				}}
				src={logo}
				alt="John Doe"
				className="w-1/4 shadow-xl rounded-full"
			/>
		</div>
	);
}

export default Loading;

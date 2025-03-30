"use client";
import { staggerContainer } from "@/app/utils/motion";
import { motion } from "framer-motion";
import { ComponentType } from "react";

const SectionWrapper = (Component: ComponentType, idName: string) => {
	function HOC(props: any) {
		return (
			<motion.div
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				exit="hidden"
				viewport={{ once: true, amount: 0.25 }}
				className="padding max-w-7xl mx-auto relative z-0"
			>
				<span className="hash-span" id={idName}>
					{" "}
					&nbsp;{" "}
				</span>
				<Component {...props} />
			</motion.div>
		);
	}
	
	// Preserve the display name for debugging
	HOC.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`;
	
	return HOC;
};

export default SectionWrapper;

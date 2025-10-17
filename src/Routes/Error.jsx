import Lottie from "lottie-react";
import noData from "../assets/lotties/noData.json";
import { motion } from "motion/react";
function Error() {
    return(
        <motion.div
            initial={{ opacity: 0, y: 50 }}  // start invisible, slightly lower
            animate={{ opacity: 1, y: 0 }}   // animate to fully visible and original position
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }} // 1 second smooth fade-in
        >
            <Lottie animationData={noData} loop={true} className="h-[500px]" />
        </motion.div>
    )
}

export default Error;
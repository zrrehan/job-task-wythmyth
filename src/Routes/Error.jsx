import Lottie from "lottie-react";
import noData from "../assets/lotties/noData.json"
function Error() {
    return(
        <div>
            <Lottie animationData={noData} loop={true} className="h-[500px]" />
        </div>
    )
}

export default Error;
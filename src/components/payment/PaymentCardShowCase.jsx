import { use } from "react";
import SinglePaymentCard from "./SinglePaymentCard";

function PaymentCardShowCase({dataPromise}) {
    const data = use(dataPromise);
    return(
        <div className="space-y-3">
            {
                data.map((singleData) => {
                    return <SinglePaymentCard data = {singleData}></SinglePaymentCard>
                })
            }
        </div>
    )
}

export default PaymentCardShowCase;
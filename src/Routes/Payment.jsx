import { createContext, Suspense, use, useState } from "react";
import MembershipType from "../components/membership/membershipType";
import PaymentCardShowCase from "../components/payment/PaymentCardShowCase";
import Summary from "../components/summary/Summary";
import { motion } from "motion/react";

export const DataContext = createContext(null);
const paymentMethodDataPromise = fetch("/payment-method.json").then(res => res.json());
function Payment({ dataPromise }) {
    const data = use(dataPromise);
    const [chosen, setChosen] = useState(null);
    const [processingFee, setProcessingFee] = useState(0);
    const [titlePayment, setTitlePayment] = useState(null);
    const [insertedData, setInsertedData] = useState(null);

    const value = {
        chosen, setChosen, processingFee, setProcessingFee, titlePayment, setTitlePayment, insertedData, setInsertedData
    }
    return(
        <DataContext value={value}>
            <h1 className="bg-white py-10 px-20 mx-auto max-w-[1372px] rounded-2xl  mb-10 text-3xl font-semibold">Complete Payment</h1>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}  // start invisible, slightly lower
                animate={{ opacity: 1, y: 0 }}   // animate to fully visible and original position
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }} // 1 second smooth fade-in
                className="flex flex-col lg:flex-row justify-center gap-10 mb-10">
                <div className="bg-white lg:px-20 rounded-2xl py-10">
                    <h1 className="text-3xl font-semibold">1. Select Your Membership</h1>
                    <div className="divider"></div>
                    {
                        data.map(membershipType => {
                            return <MembershipType type={membershipType}></MembershipType>
                        })
                    }
                </div>

                <div className="bg-white lg:px-20 rounded-2xl py-10">
                    <h1 className="text-3xl font-semibold">2. Payment Method</h1>
                    <div className="divider"></div>

                    <Suspense>
                        <PaymentCardShowCase dataPromise={paymentMethodDataPromise}></PaymentCardShowCase>
                    </Suspense>
                </div>
            </motion.div>

            <Summary></Summary>
        </DataContext>
    )
}

export default Payment;
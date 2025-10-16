import { createContext, Suspense, use, useState } from "react";
import MembershipType from "../components/membership/membershipType";
import PaymentCardShowCase from "../components/payment/PaymentCardShowCase";


export const DataContext = createContext(null);
const paymentMethodDataPromise = fetch("/payment-method.json").then(res => res.json());
function Payment({ dataPromise }) {
    const data = use(dataPromise);
    const [chosen, setChosen] = useState(null);

    const value = {
        chosen, setChosen
    }
    return(
        <DataContext value={value}>
            <div className="flex justify-center gap-30">
                <div>
                    <h1 className="text-3xl font-semibold">1. Select Your Membership</h1>
                    <div className="divider"></div>
                    {
                        data.map(membershipType => {
                            return <MembershipType type={membershipType}></MembershipType>
                        })
                    }
                </div>

                <div>
                    <h1 className="text-3xl font-semibold">2. Payment Method</h1>
                    <div className="divider"></div>

                    <Suspense>
                        <PaymentCardShowCase dataPromise={paymentMethodDataPromise}></PaymentCardShowCase>
                    </Suspense>
                </div>
            </div>
        </DataContext>
    )
}

export default Payment;
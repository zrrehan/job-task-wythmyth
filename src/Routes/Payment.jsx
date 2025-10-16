import { use } from "react";
import MembershipType from "../components/membership/membershipType";

function Payment({ dataPromise }) {
    const data = use(dataPromise);

    return(
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
            </div>
        </div>
    )
}

export default Payment;
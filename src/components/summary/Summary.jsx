import { useContext } from "react";
import { DataContext } from "../../Routes/Payment";
import InstallMentBreakDown from "./component/InstallMentBreakDown";
import { insertOnePayment } from "../../dummyBackend/dbConnect";
import Swal from "sweetalert2";

function Summary({modal}) {
    const { chosen, processingFee, insertedData } = useContext(DataContext);
    console.log(insertedData);
    if(!chosen) return null
    function paymentPress() {
        const response = insertOnePayment(chosen)
        console.log(response);
        Swal.fire({
            title: "Payment Successful",
            text: response.message,
            icon: response.status
        });
    }

    return(
        <div className="text-xl max-w-[1130px] bg-white mx-auto px-15 py-10 rounded-2xl">
            <h1 className="text-3xl font-semibold">3. Payment Summary</h1>
            <div className="divider"></div>

            <h1 className="flex justify-between">
                <p>Selected Plan</p>
                <p>{chosen.paymentType}</p>
            </h1>
            {
                chosen.installments && 
                <h1 className="flex justify-between">
                    <p>Installments</p>
                    <p>{chosen.installments} * {chosen.amount}.00$ </p>
                </h1>
            }
            {
                chosen.installments && 
                <InstallMentBreakDown chosen = {chosen}></InstallMentBreakDown>
            }

            <div className="flex justify-between">
                <p className="font-semibold text-md">Membership Fee</p>
                <p>{chosen.amount.toFixed(2)}$</p>
            </div>
            <div className="flex justify-between">
                <p className="font-semibold text-md">Processing Fee</p>
                <p>{processingFee.toFixed(2)}$</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between">
                <p className="font-semibold text-md">Total Payable Amount</p>
                <p>{(chosen.amount+processingFee).toFixed(2)}$</p>
            </div>

            {
                !modal && <button onClick={paymentPress} className="btn w-full mt-5 bg-[#002077] text-white rounded-2xl">Pay Now</button>
            }
        </div>
    )
}

export default Summary;
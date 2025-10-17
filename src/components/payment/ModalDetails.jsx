import Summary from "../summary/Summary";
import scanMe from "../../assets/qrcode.png"
import { useContext } from "react";
import { DataContext } from "../../Routes/Payment";
function ModalDetails() {
    const { chosen } = useContext(DataContext)
    return(
        <div className="space-y-10">
            <div>
                <img src={scanMe}  className="h-[200px] mx-auto"/>
            </div>
            <div className="border border-red-800 p-2 px-5 rounded-2xl bg-[#f690905f]">
                <h1 className="text-2xl  text-red-800 font-semibold">How to complete the payment:</h1>
                <ol className="">
                    <li>1. Scan the QR code with your payment app.</li>
                    <li>2. Complete the payment for ${chosen?.amount?.toFixed(2)}</li>
                    <li>3. Take a screenshot of payment confirmation.</li>
                    <li>4. Upload the receipt below.</li>
                </ol>
            </div>
            <Summary modal={true}></Summary>

            <fieldset className="fieldset">
                <legend className="fieldset-legend "><span className="font-semibold">Upload Payment Receipt*</span> (JPG, PNG, PDF, Max 10 MB file)</legend>
                <input type="file" className="file-input w-full" placeholder="Type here" />
            </fieldset>

            <fieldset className="fieldset">
                <legend className="fieldset-legend ">Additional Notes (Optional)</legend>
                <textarea className="textarea w-full" placeholder="Write here..."></textarea>
            </fieldset>
        </div>
    )
}

export default ModalDetails;
import { useContext } from "react";
import { DataContext } from "../../Routes/Payment";
import ModalDetails from "./ModalDetails";

function SinglePaymentCard({data}) {
    const { setProcessingFee, titlePayment, setTitlePayment } = useContext(DataContext); 
    function buttonClickedDetected() {
        if(data.scan_to_pay) {
            document.getElementById(`my_modal_${data.title}`).showModal();
        }
        
        setProcessingFee(data.processing_fee || 0)
        setTitlePayment(data.title)
    }
    console.log(titlePayment)
    return(
        <div>
            <div
                onClick={buttonClickedDetected}
                className={`payment-btn btn flex px-5 rounded-2xl justify-between h-[60px] items-center w-[500px] bg-white py-3 ${titlePayment === data.title && "border border-[#002077] shadow-2xl"}`}>
                <h1 className="text-lg">{data.title}</h1>
                <div className="h-[30px]">
                    <img src={data.Image} className="h-full rounded-xl" />
                </div>
            </div>
            {
                data.scan_to_pay &&
                <dialog id={`my_modal_${data.title}`} className="modal">
                        <div className="modal-box h-[500px] py-10">
                        <ModalDetails></ModalDetails>
                        <div className="modal-action flex justify-center">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                    <button className="btn bg-[#002077] rounded-xl text-white">Submit Payment Proof</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
        </div>
    )
}

export default SinglePaymentCard;
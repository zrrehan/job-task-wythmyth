import Lottie from "lottie-react";
import paymentAnimation from "../assets/lotties/Payments.json"
import Swal from "sweetalert2";
import { useState } from "react";

function MyPayments() {
    const [payments, setPayments] = useState(JSON.parse(localStorage.getItem("payment")) || []);
    console.log(payments)
    function buttonClicked() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete all!"
        }).then((result) => {
            localStorage.setItem("payment", null);
            setPayments([]);
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return(
        <div className="flex justify-around">
            <Lottie animationData={paymentAnimation} loop={true} className="h-[500px]"/>
            <div className="w-[800px]">
                <button onClick={buttonClicked} className="btn w-full mb-10 bg-[#002077] text-white">Remove All Payment</button>
                {
                    payments.length !== 0 ? 
                        <div className="grid grid-cols-2 gap-10">
                            {
                                payments.map((singlePayment) => {
                                    return <div className="card card-border bg-base-100 w-96 shadow-2xl">
                                        <div className="card-body">
                                            <h2 className="card-title">{singlePayment.name}</h2>
                                            <p><span className="font-bold">Payment type: </span>{singlePayment.paymentType}</p>
                                            {
                                                singlePayment.installments &&
                                                <p><span className="font-bold">Installments: </span>{singlePayment.installmentProgress} / {singlePayment.installments}</p>
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        : <h1 className="text-4xl text-center font-bold">There is no Payment in record</h1>
                }
            </div>
        </div>
    )
}

export default MyPayments
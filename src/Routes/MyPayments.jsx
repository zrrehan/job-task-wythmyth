import Lottie from "lottie-react";
import paymentAnimation from "../assets/lotties/Payments.json"
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
function MyPayments() {
    const [payments, setPayments] = useState(JSON.parse(localStorage.getItem("payment")) || []);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });   
    }, [])
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
            if (result.isConfirmed) {
                localStorage.setItem("payment", null);
                setPayments([]);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return(
        <motion.div 
            initial={{ opacity: 0, y: 50 }}  // start invisible, slightly lower
            animate={{ opacity: 1, y: 0 }}   // animate to fully visible and original position
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }} // 1 second smooth fade-in
            className="flex justify-around">
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
        </motion.div>
    )
}

export default MyPayments
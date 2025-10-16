function SinglePaymentCard({data}) {
    function buttonClickedDetected() {
        document.getElementById(`my_modal_${data.title}`).showModal()
    }
    return(
        <div>
            <div
                onClick={buttonClickedDetected}
                className="payment-btn btn flex px-5 rounded-2xl justify-between h-[60px] items-center w-[500px] bg-white py-3">
                <h1 className="text-lg">{data.title}</h1>
                <div className="h-[30px]">
                    <img src={data.Image} className="h-full rounded-xl" />
                </div>
            </div>
            {
                data.scan_to_pay &&
                <dialog id={`my_modal_${data.title}`} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
        </div>
    )
}

export default SinglePaymentCard;
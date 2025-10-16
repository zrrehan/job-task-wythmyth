import { findOnePayment } from "../../../dummyBackend/dbConnect"

function InstallMentBreakDown({ chosen }) {
    // console.log(chosen)
    let prevPayment = null;
    if(chosen?.installments) {
        prevPayment = findOnePayment(chosen.name);
    }

    const insertData = {
        ...chosen, 
        installmentProgress: prevPayment?.installmentProgress +1 || 1
    }

    console.log(insertData)

    return(
        <div className="">
            <h1 className="font-semibold">Installment Breakdown</h1>
            <p>Installment {chosen.installments} </p>
            <p>Per Insallment: {chosen.amount}.00$</p>

            <div className="border border-primary bg-[#18d29750] p-2  rounded-2xl">
                <p>Progress: {insertData.installmentProgress - 1}/{chosen.installments}</p>
                <p>Next Installment {insertData.installmentProgress} of {chosen.installments}</p>
            </div>
        </div>
    )
}

export default InstallMentBreakDown
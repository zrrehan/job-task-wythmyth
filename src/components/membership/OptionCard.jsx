import { useContext } from "react";
import { DataContext } from "../../Routes/Payment";

function OptionCard({ data }) {
    const {chosen, setChosen} = useContext(DataContext);
    return(
        <div className="flex px-5 rounded-2xl justify-between items-center w-[500px] bg-white">
            <div className="flex items-center gap-4 h-[70px]">
                <input onClick={() => setChosen(data)} type="radio" name="membership" className="radio text-[#002077]" />
                <h1 className="text-xl">Membership Fee</h1>
                <div className="badge bg-[#002077] text-white">{data.paymentType}</div>
            </div>
            <p className="text-xl font-semibold">{data.amount}.00 $</p>
        </div>
    )
}

export default OptionCard;
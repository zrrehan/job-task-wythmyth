import OptionCard from "./OptionCard";

function MembershipType({ type }) {
    const options = type.options;
    return(
        <div className="mb-3 ">
            <h1 className="font-semibold text-2xl">{type.type}</h1>
            <div className="space-y-3">
                {
                    options.map(singleOption => {
                        return <OptionCard data={singleOption}></OptionCard>
                    })
                }
            </div>
        </div>
    )
}

export default MembershipType
function findOnePayment(name) {
    let allItem = localStorage.getItem("payment");
    allItem = JSON.parse(allItem);   
    let singleItem = null;
    console.log(allItem)
    if(allItem){
        for (let i of allItem) {
            if (i.name === name) {
                singleItem = i
            }
        }
        return singleItem;
    }
    return allItem
}

function insertOnePayment(body) {
    // let stringifyBody = JSON.stringify(body);
    // localStorage.setItem("payment", stringifyBody);
    let oldData = localStorage.getItem("payment");
    if(!oldData) {
        let stringifyBody = JSON.stringify([{ ...body, installmentProgress: 0}]);
        localStorage.setItem("payment", stringifyBody);
        return {message: "Payment Successful", status: "success"}
    }
    oldData = JSON.parse(oldData)
    if(!findOnePayment(body.name)) {
        oldData.push(body);
        localStorage.setItem("payment", JSON.stringify(oldData));
        return { message: "Payment Successful", status: "success" }
    }

    

    for (let i of oldData) {
        console.log(i.name, body.name, "SIUUU" )
        if (i.name === body.name && i.installments ===  null) {
            return { message: "Already paid!", status: "question" }
        }
        console.log(i )
        if(i.name === body.name && i.installments !== null ) {
            // console.log(i.installmentProgress == i.installments)
            if (i.installmentProgress == i.installments) {
                return { message: "Full Installment Completed", status: "success" }
            } else {
                i.installmentProgress += 1
                localStorage.setItem("payment", JSON.stringify(oldData))
                return { message: `${i.installmentProgress} of ${i.installments} installment Complete`, status: "success" }
            }
        }
    }

    
}

export {insertOnePayment, findOnePayment}
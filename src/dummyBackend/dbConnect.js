function findOnePayment(name) {
    let allItem = localStorage.getItem("payment");
    allItem = JSON.parse(allItem);   
    const singleItem = null;
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
    const stringifyBody = JSON.stringify(body);
    localStorage.setItem("payment", stringifyBody);
}

export {insertOnePayment, findOnePayment}
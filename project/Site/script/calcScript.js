// Selects
let selects = {
    "cmdtyInp": document.getElementById("commodity"),
    "originInp": document.getElementById("origin"),
    "destInp": document.getElementById("destination"),
    "shipInp": document.getElementById("ship")
};

// Inputs
let inputs = {
    "prchsPrcInp": document.getElementById("purchasePrice"),
    "sellPrcInp": document.getElementById("sellPrice"),
    "qtyInp": document.getElementById("quantity"),
    "expnss": document.getElementById("expnss"),
    "flgtTime": document.getElementById("flightTime")
};

// Outputs
let outputs = {
    "invOutp": document.getElementById("investment"),
    "trnovrOutp": document.getElementById("turnover"),
    "grsPrft": document.getElementById("grossProfit"),
    "ntPrft": document.getElementById("netProfit"),
    "mrgn": document.getElementById("margin"),
    "ntPrftPH": document.getElementById("netProfitPerHour")
};

function calc() {
    let inputValues = {
        "prchsPrc": null,
        "sellPrc": null,
        "qty": null,
        "expnss": null,
        "flgtTime": null
    }

    if (selects.cmdtyInp.value != null && selects.originInp.value != 0) {
        
    }
}
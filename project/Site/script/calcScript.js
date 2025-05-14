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


let selectValues = {
    "commodity": null,
    "origin": null,
    "destination": null,
    "ship": null
};

let inputValues = {
    "prchsPrc": null,
    "sellPrc": null,
    "qty": null,
    "expnss": null,
    "flgtTime": null
};


loadCalc();

if (selectValues.commodity != null) {
    selectValues.origin = selectValues.commodity.buyableAt[parseInt(selects.originInp.value)];
    selectValues.destination = selectValues.commodity.sellableAt[parseInt(selects.destInp.value)];
    selectValues.ship = ships[parseInt(selects.shipInp.value)];
}



function calc() {

    if (selectValues.commodity != null && selectValues.origin != null && selectValues.destination != null && selectValues.ship != null) {

    }
}

function loadCalc() {
    let output = "";

    selectValues.commodity = commodities[parseInt(selects.cmdtyInp.value)];

    if (selects.cmdtyInp.value != '') {
        output += `<option value="" disabled selected>Origin</option>`
        for (let i = 0; i < selectValues.commodity.buyableAt.length; i++) {
            output += `<option value="${i}">${selectValues.commodity.buyableAt[i].name}</option>`;
        }
        selects.originInp.innerHTML = output;
        output = "";


        output += `<option value="" disabled selected>Destination</option>`;
        for (let i = 0; i < selectValues.commodity.sellableAt.length; i++) {
            output += `<option value="${i}">${selectValues.commodity.sellableAt[i].name}</option>`;
        }
        selects.destInp.innerHTML = output;
        output = "";

        /* output += `<option value="" disabled selected>Ship</option>`;
        for (let i = 0; i < selectValues.ships.length; i++) {
            output += `<option value="${i}">${selectValues.ships[i].name}</option>`;
        }
        selects.shipInp.innerHTML = output;
        output = ""; */
    } else {
        output = "";

        output += `<option value="" disabled selected>Commodity</option>`;
        for (let i = 0; i < commodities.length; i++) {
            output += `<option value="${i}">${commodities[i].name}</option>`;
        }
        selects.cmdtyInp.innerHTML = output;
        output = "";
    }

    if (selectValues.origin != null) {
        inputValues.prchsPrc = selectValues.origin.price;
        inputs.prchsPrcInp.value = inputValues.prchsPrc;
    }
    if (selectValues.destination != null) {
        inputValues.sellPrc = selectValues.destination.price;
        inputs.sellPrcInp.value = inputValues.sellPrc;
    }
    if (selectValues.ship != null) {
        inputValues.qty = parseInt(selects.qtyInp.value);
        inputs.qtyInp.value = inputValues.qty;
    }
}
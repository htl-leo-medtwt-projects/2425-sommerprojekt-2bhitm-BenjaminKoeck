// Calculator

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
    "expnss": document.getElementById("expenses"),
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

// Selected values
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


// Initiation Function
loadCalc();

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
    } else {
        output = "";

        output += `<option value="" disabled selected>Commodity</option>`;
        for (let i = 0; i < commodities.length; i++) {
            output += `<option value="${i}">${commodities[i].name}</option>`;
        }
        selects.cmdtyInp.innerHTML = output;
        output = "";

        output += `<option value="" disabled selected>Ship</option>`;
        for (let i = 0; i < ships.length; i++) {
            output += `<option value="${i}">${ships[i].name}</option>`;
        }
        selects.shipInp.innerHTML = output;
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


// Event listeners
selects.cmdtyInp.addEventListener("change", handleCommodityChange);
selects.originInp.addEventListener("change", handleOriginChange);
selects.destInp.addEventListener("change", handleDestinationChange);
selects.shipInp.addEventListener("change", handleShipChange);
inputs.prchsPrcInp.addEventListener("input", calc);
inputs.sellPrcInp.addEventListener("input", calc);
inputs.qtyInp.addEventListener("input", calc);
inputs.expnss.addEventListener("input", calc);
inputs.flgtTime.addEventListener("input", calc);


// Event handler functions
function handleCommodityChange() {
    const commoditySelected = selects.cmdtyInp.value !== "";
    selects.originInp.disabled = !commoditySelected;
    selects.destInp.disabled = !commoditySelected;

    if (commoditySelected) {
        loadCalc();
    } else {
        selects.originInp.innerHTML = `<option value="" disabled selected>Origin</option>`;
        selects.destInp.innerHTML = `<option value="" disabled selected>Destination</option>`;
    }
    calc();
}

function handleOriginChange() {
    const originIndex = parseInt(selects.originInp.value);
    if (!isNaN(originIndex)) {
        selectValues.origin = selectValues.commodity.buyableAt[originIndex];
        inputs.prchsPrcInp.value = selectValues.origin.price;
        calc();
    }
}

function handleDestinationChange() {
    const destinationIndex = parseInt(selects.destInp.value);
    if (!isNaN(destinationIndex)) {
        selectValues.destination = selectValues.commodity.sellableAt[destinationIndex];
        inputs.sellPrcInp.value = selectValues.destination.price;
        calc();
    }
}

function handleShipChange() {
    const shipIndex = parseInt(selects.shipInp.value);
    if (!isNaN(shipIndex)) {
        selectValues.ship = ships[shipIndex];
        inputs.qtyInp.value = selectValues.ship.cargo;
        calc();
    }
}


// Calculation function
function calc() {
    inputValues.prchsPrc = parseFloat(inputs.prchsPrcInp.value) || 0;
    inputValues.sellPrc = parseFloat(inputs.sellPrcInp.value) || 0;
    inputValues.qty = parseFloat(inputs.qtyInp.value) || 0;
    inputValues.expenses = parseFloat(inputs.expnss.value) || 0;
    inputValues.flightTime = parseFloat(inputs.flgtTime.value) || 0;

    if (inputValues.prchsPrc > 0 && inputValues.sellPrc > 0 && inputValues.qty > 0) {
        const investment = inputValues.prchsPrc * inputValues.qty;
        const turnover = inputValues.sellPrc * inputValues.qty;
        const grossProfit = turnover - investment;
        const netProfit = grossProfit - inputValues.expenses;
        const margin = (grossProfit / turnover) * 100 || 0;
        const netProfitPerHour = inputValues.flightTime > 0 ? netProfit / (inputValues.flightTime/60) : 0;

        outputs.invOutp.textContent = investment.toFixed(2) + " aUEC";
        outputs.trnovrOutp.textContent = turnover.toFixed(2) + " aUEC";
        outputs.grsPrft.textContent = grossProfit.toFixed(2) + " aUEC";
        outputs.ntPrft.textContent = netProfit.toFixed(2) + " aUEC";
        outputs.mrgn.textContent = margin.toFixed(2) + " %";
        outputs.ntPrftPH.textContent = netProfitPerHour.toFixed(2) + " aUEC";
    } else {
        outputs.invOutp.textContent = "-- aUEC";
        outputs.trnovrOutp.textContent = "-- aUEC";
        outputs.grsPrft.textContent = "-- aUEC";
        outputs.ntPrft.textContent = "-- aUEC";
        outputs.mrgn.textContent = "-- %";
        outputs.ntPrftPH.textContent = "-- aUEC";
    }
}




/* Route menu
let routesDiv = document.getElementById("routes");
let addRouteBtn = document.getElementById("addRouteBtn");

let routes = [
    {
        "name": "Route 1",
        "id": 0,
        "commodity": commodities[0],
        "origin": commodities[0].buyableAt[0],
        "destination": commodities[0].sellableAt[0],
        "ship": ships[0],
        "expenses": 0,
        "flightTime": 0
    }
];

function loadRoutes() {
    let output = ``;
    for (let i = 0; i < routes.length; i++) {
        output += `<div class="routes" id="route-${i}">${routes[i].name}</div>`;
    }
    routesDiv.innerHTML = output;
}
loadRoutes();
addRouteBtn.addEventListener("click", addRoute);*/



function showHowTo() {
    document.getElementById("howTo").style.display = "flex";
}

function hideHowTo() {
    document.getElementById("howTo").style.display = "none";
}


function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menuBtn");
    menu.style.animation = menu.style.transform == "translateX(0px)" ? "menuSlideReverse 0.5s linear 1" : "menuSlide 0.5s linear 1";
    menu.style.transform = menu.style.transform == "translateX(0px)" ? "translateX(-100%)" : "translateX(0px)";
    menuBtn.style.animation = menuBtn.style.transform == "rotate(0deg)" ? "menuBtnAnimation 0.5s linear 1" : "menuBtnAnimationReverse 0.5s linear 1"
    menuBtn.style.transform = menuBtn.style.transform == "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
}
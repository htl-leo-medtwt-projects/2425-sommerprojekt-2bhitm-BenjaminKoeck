let routeList = document.getElementById("routeList");

let routes = [];

calcRoutes();
displayRoutes();

function calcRoutes() {
    commodities.forEach(element => {
        element.buyableAt.forEach(origin => {
            element.sellableAt.forEach(destination => {
                if (origin !== destination) {
                    routes.push({
                        commodity: element,
                        origin: origin,
                        purchasePrice: origin.price,
                        destination: destination,
                        sellPrice: destination.price,
                        profit: destination.price - origin.price,
                        margin: ((destination.price - origin.price) / origin.price) * 100,
                        profitPerHourInSixteenMins: ((destination.price - origin.price) / 16) * 60
                    });
                }
            });
        });
    });
}

function sortRoutesByOrigin() {
    routes.sort((a, b) => {
        if (a.origin.name < b.origin.name) return -1;
        if (a.origin.name > b.origin.name) return 1;
        return 0;
    });

    displayRoutes();
}

function sortRoutesByDestination() {
    routes.sort((a, b) => {
        if (a.destination.name < b.destination.name) return -1;
        if (a.destination.name > b.destination.name) return 1;
        return 0;
    });

    displayRoutes();
}

function sortRoutesByPurchasePrice() {
    routes.sort((a, b) => a.purchasePrice - b.purchasePrice);
    displayRoutes();
}

function sortRoutesBySellPrice() {
    routes.sort((a, b) => a.sellPrice - b.sellPrice);
    displayRoutes();
}

function sortRoutesByProfit() {
    routes.sort((a, b) => a.profit - b.profit);
    displayRoutes();
}

function sortRoutesByMargin() {
    routes.sort((a, b) => a.margin - b.margin);
    displayRoutes();
}

function sortRoutesByProfitPerHour() {
    routes.sort((a, b) => a.profitPerHourInSixteenMins - b.profitPerHourInSixteenMins);
    displayRoutes();
}

function displayRoutes() {
    output = "";

    routes.forEach((route) => {
        output += `
            <div class="routeItem">
                <p style="font-weight: bold; width: ">${route.commodity.name} (${route.commodity.symbol})</p>
                <p>${route.origin.name} (${route.origin.location})</p>
                <p>${route.destination.name} (${route.destination.location})</p>
                <p style="text-align: right;">${route.purchasePrice.toFixed(2)} aUEC</p>
                <p style="text-align: right;">${route.sellPrice.toFixed(2)} aUEC</p>
                <p style="text-align: right;">${route.profit.toFixed(2)} aUEC</p>
                <p style="text-align: right;">${route.margin.toFixed(2)}%</p>
                <p style="text-align: right;">${route.profitPerHourInSixteenMins.toFixed(2)} aUEC</p>
            </div>`;
    });
    routeList.innerHTML = output;
}


function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menuBtn");
    menu.style.animation = menu.style.transform == "translateX(0px)" ? "menuSlideReverse 0.5s linear 1" : "menuSlide 0.5s linear 1";
    menu.style.transform = menu.style.transform == "translateX(0px)" ? "translateX(-100%)" : "translateX(0px)";
    menuBtn.style.animation = menuBtn.style.transform == "rotate(0deg)" ? "menuBtnAnimation 0.5s linear 1" : "menuBtnAnimationReverse 0.5s linear 1"
    menuBtn.style.transform = menuBtn.style.transform == "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
}
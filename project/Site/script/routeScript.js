let routeList = document.getElementById("routeList");
let sortOptions = document.getElementsByClassName("sortOption");

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

function sortRoutesByCommodity(element) {
    routes.sort((a, b) => {
        if (a.commodity.name < b.commodity.name) return -1;
        if (a.commodity.name > b.commodity.name) return 1;
        return 0;
    });

    for (let i = 0; i < sortOptions.length; i++) {
        sortOptions[i].classList.remove("active");
    }
    element.classList.add("active");

    displayRoutes();
}

function sortRoutesByOrigin(element) {
    routes.sort((a, b) => {
        if (a.origin.name < b.origin.name) return -1;
        if (a.origin.name > b.origin.name) return 1;
        return 0;
    });

    for (let i = 0; i < sortOptions.length; i++) {
        sortOptions[i].classList.remove("active");
    }
    element.classList.add("active");

    displayRoutes();
}

function sortRoutesByDestination(element) {
    routes.sort((a, b) => {
        if (a.destination.name < b.destination.name) return -1;
        if (a.destination.name > b.destination.name) return 1;
        return 0;
    });

    for (let i = 0; i < sortOptions.length; i++) {
        sortOptions[i].classList.remove("active");
    }
    element.classList.add("active");

    displayRoutes();
}

function sortRoutesByPurchasePrice(element) {
    routes.sort((a, b) => b.purchasePrice - a.purchasePrice);
    
    for (let i = 0; i < sortOptions.length; i++) {
        sortOptions[i].classList.remove("active");
    }
    element.classList.add("active");

    displayRoutes();
}

function sortRoutesBySellPrice(element) {
    routes.sort((a, b) => b.sellPrice - a.sellPrice);

    for (let i = 0; i < sortOptions.length; i++) {
        sortOptions[i].classList.remove("active");
    }
    element.classList.add("active");

    displayRoutes();
}

function sortRoutesByProfit(element) {
    routes.sort((a, b) => b.profit - a.profit);

    for (let i = 0; i < sortOptions.length; i++) {
        sortOptions[i].classList.remove("active");
    }
    element.classList.add("active");

    displayRoutes();
}

function sortRoutesByMargin(element) {
    routes.sort((a, b) => b.margin - a.margin);

    for (let i = 0; i < sortOptions.length; i++) {
        sortOptions[i].classList.remove("active");
    }
    element.classList.add("active");

    displayRoutes();
}

function sortRoutesByProfitPerHour(element) {
    routes.sort((a, b) => b.profitPerHourInSixteenMins - a.profitPerHourInSixteenMins);

    for (let i = 0; i < sortOptions.length; i++) {
        sortOptions[i].classList.remove("active");
    }
    element.classList.add("active");

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
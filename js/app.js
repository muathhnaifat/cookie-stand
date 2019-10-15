'use strict';

var Hours = [' 6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var ShopLocations = [];
var SalesTable = document.getElementById('salmonTable');


function HeaderRow() {
    var RowTable = document.createElement('tr');
    for (var i = 0; i <= Hours.length; i++) {
        var TheElement = document.createElement('th');
        TheElement.textContent = Hours[i - 1];
        RowTable.appendChild(TheElement);
    }

    TheElement = document.createElement('th');
    TheElement.textContent = 'Daily Location Total';
    RowTable.appendChild(TheElement);
    SalesTable.appendChild(RowTable);
};


function Shop(Name, MinCus, MaxCus, AvCookies) {

    this.Name = Name;
    this.MinCus = MinCus;
    this.maxCust = MaxCus;
    this.avgCookie = AvCookies;
    this.avgCustArray = [];
    this.HourlySales = [];
    this.CookiesTotal = 0;
    ShopLocations.push(this);
}


Shop.prototype.cookiesPerCustomer = function () {
    this.numCustHourly();
    for (var i = 0; i < Hours.length; i++) {
        var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
        this.HourlySales.push(singleHourCookies);
        this.CookiesTotal += singleHourCookies;
    }
};

Shop.prototype.numCustHourly = function () {
    for (var i = 0; i <= Hours.length; i++) {
        var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.MinCus)) + this.MinCus;
        this.avgCustArray.push(singleHourCust);
    }

};

Shop.prototype.render = function () {
    this.cookiesPerCustomer();
    var trRowName = document.createElement('tr');
    var tdShop = document.createElement('td');
    tdShop.textContent = this.Name;
    trRowName.appendChild(tdShop);
    for (var i = 0; i < this.HourlySales.length; i++) {
        var tdCell = document.createElement('td');
        tdCell.textContent = this.HourlySales[i];
        trRowName.appendChild(tdCell);
    };

    var tdTotal = document.createElement('td');
    tdTotal.textContent = this.CookiesTotal;
    trRowName.appendChild(tdTotal);
    SalesTable.appendChild(trRowName);
};

var Seattle = new Shop('Seattle', 23, 65, 6.3);
var Tokyo = new Shop('Tokyo', 3, 24, 1.2);
var Dubai = new Shop('Dubai', 11, 38, 3.7);
var Paris = new Shop('Paris', 20, 38, 2.3);
var Lima = new Shop('Lima', 2, 16, 4.6);

function renderAllShops() {
    for (var i = 0; i < ShopLocations.length; i++) {
        ShopLocations[i].render();
    }
};


function makeFooterRow() {
    var RowTable = document.createElement('tr');
    RowTable.textContent = 'Total';
    SalesTable.appendChild(RowTable);
    var bigStupidTotal = 0;
    for (var i = 0; i < Hours.length; i++) {
        var hourlyTotal = 0;
        for (var j = 0; j < ShopLocations.length; j++) {
            hourlyTotal = hourlyTotal + ShopLocations[j].HourlySales[i];
            bigStupidTotal += ShopLocations[j].HourlySales[i];
            console.log(bigStupidTotal);
        }

        var tdElement = document.createElement('td');
        tdElement.textContent = hourlyTotal;
        RowTable.appendChild(tdElement);
    }

    tdElement = document.createElement('td');
    tdElement.textContent = bigStupidTotal;
    RowTable.appendChild(tdElement);
};

HeaderRow();
renderAllShops();
makeFooterRow();

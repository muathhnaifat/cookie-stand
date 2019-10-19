var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var Seattle = {
    TheMin: 23,
    TheMax: 65,
    TheAv: 6.3,
    TheArrayOfCookies: [],
    Random: function () {
        var range = this.TheMax - this.TheMin;
        var rand = Math.floor(Math.random() * range) + this.TheMin;
        return rand;
    },
    amountPerHour: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
            this.TheArrayOfCookies.push(this.amountOfCookiesCeil);
        }
        return this.TheArrayOfCookies;
    },
}
Seattle.amountPerHour();

var Tokyo = {
    TheMin: 3,
    TheMax: 24,
    TheAv: 1.2,
    TheArrayOfCookies: [],
    Random: function () {
        var range = this.TheMax - this.TheMin;
        var rand = Math.floor(Math.random() * range) + this.TheMin;
        return rand;
    },
    amountPerHour: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
            this.TheArrayOfCookies.push(this.amountOfCookiesCeil);
        }
        return this.TheArrayOfCookies;
    },
}
Tokyo.amountPerHour();

var Dubai = {
    TheMin: 11,
    TheMax: 38,
    TheAv: 3.7,
    TheArrayOfCookies: [],
    Random: function () {
        var range = this.TheMax - this.TheMin;
        var rand = Math.floor(Math.random() * range) + this.TheMin;
        return rand;
    },
    amountPerHour: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
            this.TheArrayOfCookies.push(this.amountOfCookiesCeil);
        }
        return this.TheArrayOfCookies;
    },
}
Dubai.amountPerHour();

var Paris = {
    TheMin: 20,
    TheMax: 38,
    TheAv: 2.3,
    TheArrayOfCookies: [],
    Random: function () {
        var range = this.TheMax - this.TheMin;
        var rand = Math.floor(Math.random() * range) + this.TheMin;
        return rand;
    },
    amountPerHour: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
            this.TheArrayOfCookies.push(this.amountOfCookiesCeil);
        }
        return this.TheArrayOfCookies;
    },
}
Paris.amountPerHour();

var Lima = {
    TheMin: 2,
    TheMax: 16,
    TheAv: 4.6,
    TheArrayOfCookies: [],
    Random: function () {
        var range = this.TheMax - this.TheMin;
        var rand = Math.floor(Math.random() * range) + this.TheMin;
        return rand;
    },
    amountPerHour: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
            this.TheArrayOfCookies.push(this.amountOfCookiesCeil);
        }
        return this.TheArrayOfCookies;
    },
}
Lima.amountPerHour();




arrayall = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];
arrayall1 = [Seattle, Tokyo, Dubai, Paris, Lima];
for (let j = 0; j < arrayall.length; j++) {
    var count = 0;
    document.write("<h2>", "- ", arrayall[j], "</h2>");
    document.write("<ul>");
    for (i = 0; i < 15; i++) {
        count += arrayall1[j].TheArrayOfCookies[i];
        document.write("<li>");
        document.write(Hours[i], ": ", arrayall1[j].TheArrayOfCookies[i], " Cookies.");
        document.write("<br>");
        document.write("</li>");
    }
    document.write("<li>", "Total : ", count, " Cookies.");
    document.write("</ul>");
}
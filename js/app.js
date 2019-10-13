var hours = ["6am: ","7am: ","8am: ","8am: ","9am: ","10am: ","11am: ","12pm: "," 1pm: "," 2pm: ","3pm: ","4pm: "," 5pm: ","6pm: "," 7pm: ","Total: "];
let Seattle = {
    Min: 23,
    Max: 65,
    Av: 6.3,
    arrSeattle: [],
    forEachHour: function (Min, Max) {
        var range = Max - Min;
        var rand = (Math.random() * range) + Min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var HourSum = 0;
        for (i = 0; i < 15; i++) {
           
            var cookiesPerHour = this.forEachHour(Seattle.Min, Seattle.Max) / Seattle.Av;
            hours[i][1] = Math.ceil(cookiesPerHour);
            HourSum = HourSum + hours[i][1];
            hours[15][1] = HourSum;
        }
        
        return hours;
    }
}


let Tokyo = {
    Min: 3,
    Max: 24,
    Av: 1.2,
    arrSeattle: [],
    forEachHour: function (Min, Max) {
        var range = Max - Min;
        var rand = (Math.random() * range) + Min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var HourSum = 0;
        for (i = 0; i < 15; i++) {
         

            var cookiesPerHour = this.forEachHour(Seattle.Min, Seattle.Max) / Seattle.Av;
            hours[i][1] = Math.ceil(cookiesPerHour);
            HourSum = HourSum + hours[i][1];
            hours[15][1] = HourSum;
        }
        
        return hours;
    }
}

let Dubai = {
    Min: 11,
    Max: 38,
    Av: 3.7,
    arrSeattle: [],
    forEachHour: function (Min, Max) {
        var range = Max - Min;
        var rand = (Math.random() * range) + Min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var HourSum = 0;
        for (i = 0; i < 15; i++) {
        

            var cookiesPerHour = this.forEachHour(Seattle.Min, Seattle.Max) / Seattle.Av;
            hours[i][1] = Math.ceil(cookiesPerHour);
            HourSum = HourSum + hours[i][1];
            hours[15][1] = HourSum;
        }
        
        return hours;
    }
}


let Paris = {
    Min: 20,
    Max: 38,
    Av: 2.3,
    arrSeattle: [],
    forEachHour: function (Min, Max) {
        var range = Max - Min;
        var rand = (Math.random() * range) + Min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var HourSum = 0;
        for (i = 0; i < 15; i++) {
          

            var cookiesPerHour = this.forEachHour(Seattle.Min, Seattle.Max) / Seattle.Av;
            hours[i][1] = Math.ceil(cookiesPerHour);
            HourSum = HourSum + hours[i][1];
            hours[15][1] = HourSum;
        }
        
        return hours;
    }
}



let Lima = {
    Min: 2,
    Max: 16,
    Av: 4.6,
    arrSeattle: [],
    forEachHour: function (Min, Max) {
        var range = Max - Min;
        var rand = (Math.random() * range) + Min;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var HourSum = 0;
        for (i = 0; i < 15; i++) {
           

            var cookiesPerHour = this.forEachHour(Seattle.Min, Seattle.Max) / Seattle.Av;
            hours[i][1] = Math.ceil(cookiesPerHour);
            HourSum = HourSum + hours[i][1];
            hours[15][1] = HourSum;
        }
        
        return hours;
    }
}
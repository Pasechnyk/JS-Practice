// Task 2

let car = {
    model: "X",
    manufacturer: "Motorola",
    averageSpeed: 100,
    year: 2018,
    showInfo: function ()
    {
        console.log("Car info:" + this.model + "\n" + this.manufacturer + "\n" + this.averageSpeed + "km/h\n" + this.year + ".");
    },
    calculateTravelTime : function (distance)
    {
        var totalTravelTime = distance / averageSpeed;
    
        var numberOfBreaks = Math.floor(totalTravelTime / 4);
    
        var totalBreakTime = numberOfBreaks;
    
        var totalTimeWithBreaks = totalTravelTime + totalBreakTime;
    
        return totalTimeWithBreaks;
    }
};

car.showInfo();
car.calculateTravelTime(400);
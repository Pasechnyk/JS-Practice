//Task 1

let clock = {
    hours: 21,
    minutes: 25,
    seconds: 59,

    getTimeString: function() {
        var formattedHours = this.hours < 10 ? '0' + this.hours : this.hours;
        var formattedMinutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        var formattedSeconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
        return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
    },
    addSecond: function() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours >= 24) {
                    this.hours = 0;
                }
            }
        }
    },
    removeSecond: function() {
        this.seconds--;
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--;
            if (this.minutes < 0) {
                this.minutes = 59;
                this.hours--;
                if (this.hours < 0) {
                    this.hours = 23;
                }
            }
        }
    },
    displayCurrentTime: function() {
        console.log("Current Time: " + this.getTimeString() + ".");
    }
};

clock.displayCurrentTime();
clock.addSecond();
clock.displayCurrentTime();
clock.removeSecond();
clock.displayCurrentTime();


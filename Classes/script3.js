// Task 3 - Inherited Date class

class ExtendedDate extends Date {
    constructor(...args) {
        super(...args);
    }

    formatDate() {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = months[this.getMonth()];
        const day = this.getDate();
        return `${day} ${month}`;
    }

    isFutureOrPresent() {
        const now = new Date();
        return this.getTime() >= now.getTime();
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const nextDay = new Date(this);
        nextDay.setDate(this.getDate() + 1);
        return nextDay;
    }
}

const extendedDate = new ExtendedDate(2023, 10, 21);

console.log("Date:", extendedDate.formatDate());
console.log("Is future or present date:", extendedDate.isFutureOrPresent());
console.log("Is leap year:", extendedDate.isLeapYear()); 
console.log("Next date:", extendedDate.getNextDate());

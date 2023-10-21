// Task 1 - Cass class

class CssClass {
    constructor(name) {
        this.name = name;
        this.styles = {};
    }

    addStyle(property, value) {
        this.styles[property] = value;
    }

    removeStyle(property) {
        if (this.styles.hasOwnProperty(property)) {
            delete this.styles[property];
        }
    }

    getCSS() {
        let cssString = `.${this.name} { `;
        for (let property in this.styles) {
            if (this.styles.hasOwnProperty(property)) {
                cssString += `${property}: ${this.styles[property]}; `;
            }
        }
        cssString += `}`;
        return cssString;
    }
}

const myClass = new CssClass('exampleClass');
myClass.addStyle('color', 'blue');
myClass.addStyle('font-size', '20px');
console.log(myClass.getCSS()); 

myClass.removeStyle('color');
console.log(myClass.getCSS());

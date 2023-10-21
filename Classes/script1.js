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

myClass.addStyle('font-size', '20px');
myClass.addStyle('font-sstyle', 'italic');
myClass.addStyle('color', 'baby-blue');

console.log(myClass.getCSS()); 

myClass.removeStyle('font-style');
console.log(myClass.getCSS());

// Task 2 - Button class

class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px;">${this.text}</button><br>`);
    }
}

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.color};">${this.text}</button><br>`);
    }
}

const normalButton = new Button(100, 50, 'Normal Button');
const bootstrapButton = new BootstrapButton(120, 60, 'Bootstrap Button', 'blue');

normalButton.showBtn();
bootstrapButton.showBtn();

// Class Options

class Options {

    constructor(height = '100px', width = '100px', bg = '#000', fontSize = '18px', textAlign = 'left') {
        this.height    = height,
        this.width     = width,
        this.bg        = bg,
        this.fontSize  = fontSize,
        this.textAlign = textAlign
    }

    createElement() {
        let newElement = document.createElement('div');
        // add new class
        newElement.classList.add('new-element-created-by-class');

        // add some text inner
        newElement.innerHTML = 'Some text inside';

        // set attributes to new element 
        newElement.style.cssText = `
            height:${this.height}; 
            width: ${this.width};
            background-color: ${this.bg};
            font-size: ${this.fontSize};
            text-align: ${this.textAlign};
            `;
        
        // return new element 
        document.body.appendChild(newElement);
    }
}

let newElement = new Options('200px', '200px', '#ff0000', '18px', 'center');
    newElement.createElement();
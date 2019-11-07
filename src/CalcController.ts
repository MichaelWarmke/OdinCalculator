const gridElements = [
    [{rowSize: '4', content: '0'}],
    [{rowSize: '1', content: 'C'},{rowSize: '1', content: '('},{rowSize: '1', content: ')'},{rowSize: '1', content: '='}],
    [{rowSize: '1', content: '*'},{rowSize: '1', content: '7'},{rowSize: '1', content: '8'},{rowSize: '1', content: '9'}],
    [{rowSize: '1', content: '/'},{rowSize: '1', content: '4'},{rowSize: '1', content: '5'},{rowSize: '1', content: '6'}],
    [{rowSize: '1', content: '+'},{rowSize: '1', content: '1'},{rowSize: '1', content: '2'},{rowSize: '1', content: '3'}],
    [{rowSize: '1', content: '-'},{rowSize: '1', content: '.'},{rowSize: '2', content: '0'}],
];


function renderGrid() {

    let grid = document.querySelector('.grid');

    gridElements.forEach((row) => {
        row.forEach((elementConfig) => {
            grid.appendChild(createElement(elementConfig));
        });
    });
}

function createElement(object) {
    let element = document.createElement('div');
    element.classList.add(...getClassNames(object.rowSize));
    element.textContent = object.content;
    addButtonEL(element);
    return element;
}

function getClassNames(size) {
    console.log(size);
    switch(size) {
        case '4':
            return ['OneByFour','gridItem','numberDisplay'];
        case '2':
            return ['OneByTwo','gridItem', 'button'];
        case '1':
            return ['gridItem', 'button'];        
    }
}

function refreshDisplay() {
    let display = document.querySelector('.OneByFour');
    display.textContent = getDisplayNumbers();
}

function addButtonEL(element) {
    if (element.classList.contains('button')) {
        element.addEventListener('mousedown', mouseDown);
        element.addEventListener('mouseup', mouseUp);
        element.addEventListener('mouseenter', mouseEnter);
        element.addEventListener('mouseleave', mouseLeave);
    }
}

function mouseDown(event) {
    mouseLeave(event);
    event.target.classList.add('buttonPress');
}

function mouseUp(event) {
    mouseEnter(event);
    event.target.classList.remove('buttonPress');
    submitOption(event.target.textContent);
    refreshDisplay();
}

function mouseEnter(event) {
    event.target.classList.add('buttonHover');
}

function mouseLeave(event) {
    event.target.classList.remove('buttonHover');
}

renderGrid();
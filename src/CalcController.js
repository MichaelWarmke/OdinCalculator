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
    return element;
}

function getClassNames(size) {
    console.log(size);
    switch(size) {
        case '4':
            return ['OneByFour','gridItem'];
        case '2':
            return ['OneByTwo','gridItem'];
        case '1':
            return ['gridItem'];        
    }
}

renderGrid();
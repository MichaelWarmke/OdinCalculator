var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var gridElements = [
    [{ rowSize: '4', content: '0' }],
    [{ rowSize: '1', content: 'C' }, { rowSize: '1', content: '(' }, { rowSize: '1', content: ')' }, { rowSize: '1', content: '=' }],
    [{ rowSize: '1', content: '*' }, { rowSize: '1', content: '7' }, { rowSize: '1', content: '8' }, { rowSize: '1', content: '9' }],
    [{ rowSize: '1', content: '/' }, { rowSize: '1', content: '4' }, { rowSize: '1', content: '5' }, { rowSize: '1', content: '6' }],
    [{ rowSize: '1', content: '+' }, { rowSize: '1', content: '1' }, { rowSize: '1', content: '2' }, { rowSize: '1', content: '3' }],
    [{ rowSize: '1', content: '-' }, { rowSize: '1', content: '.' }, { rowSize: '2', content: '0' }],
];
function renderGrid() {
    var grid = document.querySelector('.grid');
    gridElements.forEach(function (row) {
        row.forEach(function (elementConfig) {
            grid.appendChild(createElement(elementConfig));
        });
    });
}
function createElement(object) {
    var _a;
    var element = document.createElement('div');
    (_a = element.classList).add.apply(_a, __spread(getClassNames(object.rowSize)));
    element.textContent = object.content;
    addButtonEL(element);
    return element;
}
function getClassNames(size) {
    console.log(size);
    switch (size) {
        case '4':
            return ['OneByFour', 'gridItem', 'numberDisplay'];
        case '2':
            return ['OneByTwo', 'gridItem', 'button'];
        case '1':
            return ['gridItem', 'button'];
    }
}
function refreshDisplay() {
    var display = document.querySelector('.OneByFour');
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

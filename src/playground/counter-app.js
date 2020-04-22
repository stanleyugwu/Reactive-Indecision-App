let count = 0;
const addOne = () => {
    count++;
    rerender()
}
const minusOne = () => {
    count > 0 && count--;
    rerender()
}
const reset = () => {
    count = 0;
    rerender()
}

function rerender() {
    const templateTwo = ( <
        div >
        <
        h1 > Count: { count } < /h1> <
        button onClick = { addOne } > +1 < /button> <
        button onClick = { minusOne } > -1 < /button> <
        button onClick = { reset } > reset < /button> < /
        div >
    );
    ReactDOM.render(templateTwo, appRoot);
}
rerender();
const appRoot = document.getElementById('app');

let visible = false;
function render() {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={()=>{visible = !visible;render()}}>{(!visible)?'Show Details':'Hide Details'}</button>
            {visible && <p>Hello You can Now see Me!!</p>}
        </div>
    );

    ReactDOM.render(template,appRoot);

}

render();
console.log("App in Playground is running")
const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Let The Computer Decide For You!',
    options: []
}

const addOption = (ev) => {
    ev.preventDefault();

    const option = ev.target.elements.option.value;
    option && app.options.push(option);
    ev.target.elements.option.value = '';
    render();
}
function render() {
    const template = (
        <div>
            <h1>{app.title || 'My App'}</h1>
            {app.subtitle && <h4>{app.subtitle}</h4>}
            <p>{(app.options.length)?'Here Are Your Options' : 'No Options'}</p>
            <button onClick={()=>{app.options = [];render()}}>Remove All</button>
            <ol>
                {app.options.map((item,index)=>{
                    return <li>{item} <button onClick={()=>{
                        app.options.splice(app.options[index],1);
                        render();
                    }}>Remove</button></li>
                })}
            </ol>
            <form onSubmit={addOption}>
                <input type="text" name='option' minLength='2'/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot);
}

render();
console.log("App is Running");

//JSX = javascript Extension For Declaring html tags as js variables

const app = {
    title: "Indecision App",
    subtitle: 'Let The Computer Decide For You!!',
    options: []
}

const onFormSubmit = (ev) => {
  ev.preventDefault();
  const newOption = ev.target.elements.option.value;
  newOption && app.options.push(newOption);
  ev.target.elements.option.value = '';
  rerender();
}

const choose = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  alert(app.options[randomNum]);
}
const appRoot = document.getElementById('app');

const rerender = () => {
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options.length > 0)? `Here Are Your Option${(app.options.length > 1)?'s' : ''}` :'No Options'}</p>
        <button onClick={()=>{app.options = [];rerender()}}>Remove All</button>
        <ol>
          {
            app.options.map((item)=>{
              return <li key={item}>{item}</li>
            })
          }
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
        <button onClick={choose} disabled={app.options.length < 1}>What Should I Do</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
}
rerender();
console.log("App is Running");

//JSX = javascript Extension For Declaring html tags as js variables

const app = {
    title: "Indecision App",
    subtitle: 'Let The Computer Decide For You!!',
    options: []
}

const onFormSubmit = (ev) => {
    ev.preventDefault();
    const newOption = ev.target.elements.option.value;
    newOption && app.options.push(newOption);
    ev.target.elements.option.value = '';
    rerender();
}

const choose = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    alert(app.options[randomNum]);
}
const appRoot = document.getElementById('app');

const rerender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? `Here Are Your Option${(app.options.length > 1) ? 's' : ''}` : 'No Options'}</p>
            <button onClick={() => { app.options = []; rerender() }}>Remove All</button>
            <ol>
                {
                    app.options.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <button onClick={choose} disabled={app.options.length < 1}>What Should I Do</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
rerender();

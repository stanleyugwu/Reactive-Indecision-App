console.log('Counter-component is Running...')

const appRoot = document.getElementById('app');

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0,
            stat: ''
        }
    }

    componentDidMount() {
        this.setState(() => ({count: parseInt(localStorage.getItem('counterApp')) || 0}))
    }
    componentDidUpdate(prev) {
        if(prev.count !== this.state.count) {
            localStorage.setItem('counterApp',this.state.count)
        }
    }
    addOne() {
        this.setState((prev)=>{
            return {
                count: prev.count + 1,
                stat: 'Incremented'
            }
        })
    }

    minusOne(){
        this.setState((prev) => {
            return {
                count: prev.count == 0 ? 0 : prev.count - 1,
                stat: 'Decremented'
            }
        })
    }
    reset(){
        this.setState(()=>{
            return {
                count: 0,
                stat: 'Reset'
            }
        })
    }
    render(){
        return (
            <div>
                <h1>{'My Counter App'}</h1>
                <h2>Counter: {this.state.count}</h2>
                {this.state.stat && <p>{this.state.stat}</p>}
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>       
            </div>
        )
    }
}

ReactDOM.render(<Counter />,appRoot);
const appRoot = document.getElementById('app');

class Visibility extends React.Component{
    constructor(props) {
        super(props);
        this.toggleState = this.toggleState.bind(this);
        this.state = {
            title:'Visibility Toggle',
            visible:false,
            options: ['dgg',543,'ffg',678,'ssssss']
        }
    }
    toggleState() {
        this.setState((prev)=>{
            return {
                visible: !prev.visible
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.title || 'My App'}</h1>
                <button onClick={this.toggleState}>{(!this.state.visible)?'Show Details':'Hide Details'}</button>
                {this.state.visible && <h3>This Is My Text</h3>}
                <Options options={this.state.options} />
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this)
        this.state = {
            option:this.props.options
        }
    }
    removeItem(index) {
        this.state.option.splice(index,1)
    }
    render() {
        return (
            <ul>
                {this.state.option.map((item,ind) => {
                    return <li key = {item}>{item} <button onClick={this.removeItem(ind)}>Delete</button></li>
                })}
            </ul>
        )
    }
}
ReactDOM.render(<Visibility />,appRoot)
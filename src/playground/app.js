console.log('App is Running!!')

const appRoot = document.getElementById('app');

class IndecisionApp extends React.Component {
        constructor(props) {
            super(props);
            this.handleRemoveAll = this.handleRemoveAll.bind(this);
            this.handlePick = this.handlePick.bind(this);
            this.handleAdd = this.handleAdd.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
            this.state = {
                options: this.props.options
            }
        }
        componentDidMount() {
            try {
                const json = localStorage.getItem('options')
                this.setState(() => ({ options: JSON.parse(json) }))
            } catch (e) {}
        }
        componentDidUpdate(state, props) {
            if (state.options.length !== this.state.options.length) {
                localStorage.setItem('options', JSON.stringify(this.state.options))
            }
        }
        handleRemoveAll() {
            this.setState(() => {
                return {
                    options: []
                }
            })
        }
        handleAdd(opt) {
            if (!opt) return "Enter A valid Input Option..."
            else if (this.state.options.indexOf(opt) > -1) return `Option: ${opt} Already Exists...`
            this.setState((prev) => ({ options: prev.options.concat(opt) }))
        }
        handleDelete(option) {
            this.setState((prev) => ({
                options: prev.options.filter((opt) => option !== opt)
            }))
        }
        handlePick() {
            alert(this.state.options[(Math.floor(Math.random() * this.state.options.length))])
        }
        render() {
            const title = "Indecision App";
            const subtitle = "Let The Computer Decide For You";
            return ( 
                <div>
                <h1> { title || 'My App' } </h1> 
                {subtitle && <h3> { subtitle } </h3>} 
                <Action options = { this.state.options } optionLength = { this.state.options.length } handlePick = { this.handlePick }/>
                <Options options = { this.state.options } handleRemoveAll = { this.handleRemoveAll } optionLength = { this.state.options.length } handleDelete = { this.handleDelete }/>
                <AddOption handleAdd = { this.handleAdd }/>
                </div>
                )
            }
}

        //export {IndecisionApp as default}
        ReactDOM.render( < IndecisionApp / > , appRoot);
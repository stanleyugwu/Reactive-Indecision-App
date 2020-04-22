import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined
  }
  handleAdd = (ev) => {
    ev.preventDefault();
    const option = ev.target.elements.option.value.trim().toLowerCase();
    const error = this.props.handleAdd(option);

    this.setState(() => ({ error }));

    if (!error) {
      ev.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <form className="addForm" onSubmit={this.handleAdd}>
      {!!this.props.options.length && <h4>Use The Form Below To Add Options...</h4>}
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Enter text here..."
          name="option"
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}
export default AddOption;
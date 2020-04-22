import React from 'react';

class Option extends React.Component {
  
  handleDelete = () => {
    this.props.handleDelete(this.props.optiontext)
  }
  render() {
    return (
      <li><span>{this.props.optiontext}</span> <button className="button" onClick={this.handleDelete}>Remove</button></li>
    )
  }
}
export default Option;
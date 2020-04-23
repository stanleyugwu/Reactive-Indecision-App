import React from 'react';
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";
import OptionModal from './OptionModal';
import Modal from 'react-modal';

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };
  handleRemoveAll = () => {
    this.setState(() => ({options: []}));
  }
  handleAdd = (opt) => {
    if (!opt) return "Enter A valid Input Option...";
    else if (this.state.options.indexOf(opt) > -1)
      return `The Option: ${opt} Already Exists...`;
    this.setState(prev => ({ options: prev.options.concat(opt) }));
  }
  handleDelete = (option) => {
    this.setState(prev => ({
      options: prev.options.filter(opt => option !== opt)
    }));
  }
  handlePick = () => {
    const option = this.state.options[Math.floor(Math.random() * this.state.options.length)]
    this.setState(() => ({selectedOption: option}))
  }
  clearModal = () => {
    this.setState(()=> {
      return {selectedOption: undefined}
    })
  }


  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      if (json) {
        this.setState(() => ({ options: JSON.parse(json) }));
      }
    } catch (e) {}
  }
  componentDidUpdate(props, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Let The Computer Decide For You";
    return (
      <div className="container page">
        <header className="header">
          <div className="container">
          <h1 className="header__title"><span>&#128553;</span>{title || "My App"} </h1>
          {subtitle && <h3 className="header__subtitle"> {subtitle} </h3>}
          </div>
        </header>
        <main className="main">
            <Action
              options={this.state.options}
              optionLength={this.state.options.length}
              handlePick={this.handlePick}
            />
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              optionLength={this.state.options.length}
              handleDelete={this.handleDelete}
            />
            <AddOption handleAdd={this.handleAdd} options={this.state.options} />
        </main>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearModal={this.clearModal}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;

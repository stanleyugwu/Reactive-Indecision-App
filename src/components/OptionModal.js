import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal isOpen={!!props.selectedOption} 
          closeTimeoutMS={300} 
          contentLabel='selected Option' 
          onRequestClose={props.clearModal}
          className="modal"
        >
            <h2>Selected Option</h2>
            {props.selectedOption && <h3>{props.selectedOption}</h3>}
            <button onClick={props.clearModal}>Okay</button>
        </Modal>
    )
}
export default OptionModal;
import React from 'react';

const Action = (props) => (
        <div className="big-btn">
            <button className="big-button" onClick={props.handlePick}
                disabled={props.optionLength > 1 ? false : true}
            > What Should I Do </button>
        </div>
    )
    
export default Action;
import React from 'react';

function Button(props) {
    return (
        <div>
            <button type="button" className="btn btn-danger mt-4"
            onClick={(params) => props.onClick(params)}>
                {props.mensagem }
            </button>
        </div>
    )
}

function PageTitle(props) {
    return (
        <h1 className="display-5 mt-5 mb-5">{props.title}</h1>
    )
}

export default Button;
export {PageTitle, Button};
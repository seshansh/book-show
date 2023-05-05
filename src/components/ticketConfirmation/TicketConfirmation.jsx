import React from "react";
import './TicketConfirmation.css';

const TicketConfirmation = (props) =>{
    return <div className="backdrop" onClick={props.onConfirm}>
        <div className="modal">
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="actions">
            <button onClick={props.onConfirm}>Okay</button>
        </footer>
    </div> 
    </div>
}

export default TicketConfirmation;
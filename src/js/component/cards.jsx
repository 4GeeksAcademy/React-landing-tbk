import React from "react";

export const Card = (props) => {
    return (
            <div className="col-md">
                <div className="card">
                    <img src={props.cardimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {props.cardtitle} </h5>
                        <p className="card-text">{props.cardtext}</p>
                        <a href="#" className="btn btn-primary">{props.cardbutton}</a>
                    </div>
                </div>
            </div>
    );
};

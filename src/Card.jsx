import React from "react";

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="Picture" className="card__img" />
                    <div className="card__info">
                        <span className="card__category">{props.category}</span>
                        <h3 className="card__title">{props.title}</h3>
                        <div className="button">
                            <a href={props.link} target="_blank">
                                <button>Watch Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
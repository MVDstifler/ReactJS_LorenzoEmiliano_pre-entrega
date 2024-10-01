import React from "react";

export default function Cart(props) {
    return (
        <div className="header__container--cart">
            <i className="fa-solid fa-cart-plus">
                <span id="counter-cart-item">{props.count}</span>
            </i>
        </div>
    );
}

export default function Cart(props) {
    return (
        <>
        <div class="header__container--cart">
            <i class="fa-solid fa-cart-plus">
                <span id="counter-cart-item">{props.count}</span>
            </i>
        </div>
        </>
    )
}
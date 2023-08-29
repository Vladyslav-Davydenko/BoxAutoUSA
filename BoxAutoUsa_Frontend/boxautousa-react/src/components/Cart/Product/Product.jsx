export default function Product(props) {
    const {description, price, image} = props
    return (
        <div className="cart-product">
            <img src={image} alt="" className="cart-product-image"/>
            <div className="cart-product-description">
                <p>{description}</p>
            </div>
            <div className="cart-product-price">
                <div id="cart-product-quantity-price">
                    <span id="cart-single-product-price">{price}</span>
                    <input type="humber" />
                </div>
            </div>
        </div>
    )
}
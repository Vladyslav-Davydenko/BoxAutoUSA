export default function Cart(){
    return (
        <div className="cart-cover">
            <div className="cart-container">
                <div className="cart-products">
                    <div className="cart-product">
                        <img src="src/assets/car2.jpeg" alt="" className="cart-product-image"/>
                        <div className="cart-product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b</p>
                        </div>
                        <div className="cart-product-price">
                            <input type="humber" />
                        </div>
                    </div>
                    <div className="cart-product">
                        <img src="src/assets/car3.jpeg" alt="" className="cart-product-image"/>
                        <div className="cart-product-description">
                            <p>Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b</p>
                        </div>
                        <div className="cart-product-price">
                            <input type="humber" />
                        </div>
                    </div>
                </div>
                <div className="cart-total-price">

                </div>
            </div>
        </div>
    )
}
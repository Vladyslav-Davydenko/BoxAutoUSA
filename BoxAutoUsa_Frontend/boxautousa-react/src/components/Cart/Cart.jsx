import Product from "./Product/Product"

export default function Cart({onCartClose}){

    return (
        <div className="cart-cover" onClick={onCartClose}>
            <div className="cart-container">
                <div className="cart-products">
                    <Product 
                    description="Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b"
                    price="1000000$"
                    image="src/assets/car4.jpeg"
                    />
                    <Product 
                    description="Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b"
                    price="1000000$"
                    image="src/assets/car3.jpeg"
                    />
                    <Product 
                    description="Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b"
                    price="1000000$"
                    image="src/assets/car3.jpeg"
                    />
                    <Product 
                    description="Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b"
                    price="1000000$"
                    image="src/assets/car3.jpeg"
                    />
                    <Product 
                    description="Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b"
                    price="1000000$"
                    image="src/assets/car3.jpeg"
                    />
                    <Product 
                    description="Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b"
                    price="1000000$"
                    image="src/assets/car3.jpeg"
                    />
                </div>
                <div className="cart-total-price">
                    <div className="cart-submit">
                        <span id="cart-number-price" className="text--lg">1000000$</span>
                        <input type="submit" value="Buy" className={"btn btn--raised"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { useDispatch } from "react-redux"
import { addProduct, removeProduct, substractProduct } from "../../../helper/StoreRedux/cartSlice/cartSlice";

export default function Product(props) {
    const {product} = props

    const dispatch = useDispatch()

    const onProductAdd = () => {dispatch(addProduct(product))};
    const onProductDelete = () => {dispatch(removeProduct(product))};
    const onProductSubstract = () => {dispatch(substractProduct(product))};

    return (
        <div className="cart-product">
            <button className="btn product-delete" onClick={onProductDelete}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="var(--dark-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <img src={product.image} alt="" className="cart-product-image"/>
            <div className="cart-product-description">
                <p>{product.name}</p>
            </div>
            <div className="cart-product-price">
                <div className="cart-product-quantity-price">
                    <div className="cart-price-input">
                        <input type="button" value="+" className="btn btn--add" onClick={onProductAdd}/>
                        <input type="humber" className="cart-quantity-input" value={product.quantity} disabled={true}/>
                        <input type="button" value="-" className="btn btn--subtract" onClick={onProductSubstract}/>
                    </div>
                    <span className="cart-single-product-price">{product.price * product.quantity}$</span>
                </div>
            </div>
        </div>
    )
}
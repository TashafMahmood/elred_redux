import React from 'react'
import './cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice'

const Cart = () => {
    const cartItems = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 className='text-center mt-4'>My Cart</h1>

            <div className="cart_div">
                {
                    cartItems && cartItems?.map((item, id) => (
                        <div className="single_product">
                            <div className="left_cart">
                                <img src={item?.image} alt="" />
                                <div className="name">{item?.title}</div>
                            </div>
                            <div className="right_cart">
                                <button className='btn btn-danger' onClick={() => dispatch(removeFromCart(item?.id))}>
                                    remove
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart

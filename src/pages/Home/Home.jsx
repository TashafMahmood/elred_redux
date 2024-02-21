import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/productSlice'
import './home.scss'
import { addToCart } from '../../redux/cartSlice'

const Home = () => {
    const products = useSelector(state => state.Products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (products.isLoading) {
        return <div className="loader_state">
            <div class="spinner-border text-dark" role="status">
            </div>
        </div>
    }

    return (
        <div className='Home p-4 bg-warning'>
            <h1 className='text-center pb-3'>All Products</h1>
            <div className="row g-4">
                {
                    products?.data?.map((item, id) => (
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={id}>
                            <div className="p-3 border bg-light h-100 product_div text-center">
                                <img src={item?.image} alt="" />
                                <div className="productName mt-2 text-center">{item?.title}</div>
                                <h6 className='text-center mt-3'>Price : ${item?.price}</h6>
                                <button className='btn btn-primary w-100 mt-2' onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home

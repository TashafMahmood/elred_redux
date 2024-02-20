import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/productSlice'

const Home = () => {
    const products = useSelector(state => state.Products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (products.isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='Home p-4 bg-warning'>
            <div class="row g-2">
                {
                    products?.data?.map((item, id) => (
                        <div class="col-6 col-sm-4 col-md-3 col-lg-2" key={id}>
                            <div class="p-3 border bg-light h-100">
                                <img src={item?.image} alt="" className='w-100' style={{ height: '100px' }} />
                                <div className="productName mt-2 text-center">{item?.title}</div>
                                <h5 className='text-center mt-3'>Price : ${item?.price}</h5>
                                <button className='btn btn-primary w-100 mt-2'>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home

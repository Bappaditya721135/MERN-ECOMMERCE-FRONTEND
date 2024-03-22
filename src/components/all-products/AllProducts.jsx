import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../product/ProductCard';
import { asyncProductAction } from '../../redux/product/productAction';

const AllProducts = () => {
    const {loading, products, error}= useSelector(state => state.product);
    const dispatch = useDispatch();


    useEffect(() => {
        // const url = `/api/v1/product${location.search}`
        dispatch(asyncProductAction())
    }, [])

    
    if(error) {
        return <h2>error...</h2>
    }
  return (
    <div className="all__products--container">
      <div className="title__section">
        <h2 className="all__products-title">all products</h2>
      </div>
      {loading && <div className="U-loading U-pos-fixed-center"></div>}
      {products && 
        <div className="all__products">
            {products.map((product, i) => {
                return <ProductCard key={i} product={product}/>
            })}
        </div>}
    </div>
  )
}

export default AllProducts

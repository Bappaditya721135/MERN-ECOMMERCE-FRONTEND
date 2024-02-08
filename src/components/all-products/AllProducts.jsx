import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../product/ProductCard';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { asyncProductAction } from '../../redux/product/productAction';

const AllProducts = () => {
    const {loading, products, error}= useSelector(state => state.product);
    const dispatch = useDispatch();
    const location = useLocation();


    useEffect(() => {
      if(location.search) {
        const url = `/api/v1/product${location.search}`
        dispatch(asyncProductAction(url))
      }
    }, [])

    if(loading) {
        return <h2>loading...</h2>
    }
    
    if(error) {
        return <h2>loading...</h2>
    }
  return (
    <div className="all__products--container">
      <div className="title__section">
        <h2 className="all__products-title">all products</h2>
      </div>
      {products ? 
        <div className="all__products">
            {products.map((product, i) => {
                return <ProductCard key={i} product={product}/>
            })}
        </div>
      : <h2>products not avaliable</h2>}
    </div>
  )
}

export default AllProducts

import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { asyncCurrentProductFetch } from '../../redux/current-product/currentProductAction';

const CurrentProduct = () => {
    const {loading, product: currentProduct, err}= useSelector(state => state.currentProduct);
    const dispatch = useDispatch();
    const {id} = useParams();



    useEffect(() => {
        dispatch(asyncCurrentProductFetch(id))
    }, [])

    if(loading) {
        return <h2>loading...</h2>
    }

    if(err) {
        return <h2>err...</h2>
    }
    if(currentProduct) {
        // DESTRUCTURE ALL THE PROPERTIES 
        const {name, images, price, discription, numOfReviews, ratings, stocks} = currentProduct.product;
        return (
            <div className="current__product--container">
                <Link to="/" className="go-back__link">
                    <button>Go back</button>
                </Link>
                <div className="current__product">
                    <div className="product__img--container">
                        <img src={images[0].url} alt={name} />
                    </div>
                    <div className="product__details">
                        <h4 className="product__name">{name}</h4>
                        <div className="product__ratings">{ratings} num of reviews{numOfReviews}</div>
                        <p className="product__price">₹{price}</p>
                        <p className="product__discription">{discription}</p>
                    </div>
                </div>
                <div className="product__buy-section">
                    <button className="btn__addToCart">add to cart</button>
                    <button className="btn__buyNow">buy now</button>
                </div>
            </div>
          )
    }
}

export default CurrentProduct

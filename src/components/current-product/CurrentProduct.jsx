import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { asyncCurrentProductFetch } from '../../redux/current-product/currentProductAction';
import ReactStars from "react-rating-stars-component"


const CurrentProduct = () => {
    // QUANTITY 
    const [quantity, setQuantity] = useState(1);

    const {loading, product: currentProduct, err}= useSelector(state => state.currentProduct);
    const dispatch = useDispatch();
    const {id} = useParams();

    const onChangeHandler = (e) => {
        setQuantity(e.target.value);
    }



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
        console.log(stocks)

        // OPTIONS FOR REACT RATING STARS 
        const options = {
            value: ratings,
            edit: false,
            isHalf: true,
            color: "rgba(20, 20, 20, 0.5)",
            activeColor: "tomato",
            size: window.innerWidth < 600 ? 20 : 25,
        }

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
                        <div className="product__ratings">
                            <ReactStars {...options} />
                            <span>({numOfReviews} reviews)</span>
                        </div>
                        <p className="product__price">₹{price}</p>
                        <div className="product__addToCart-section">
                            <div className="quantity__section">
                                <button>de</button>
                                <input type="number" name="quantity" id="quantity" onChange={onChangeHandler} value={quantity} />
                                <button>in</button>
                            </div>
                            <button className="btn__addToCart">add to cart</button>
                        </div>
                        <p className="product__status">status: {stocks > 0 ? <span className="stocks-in">InStocks</span> : <span className="stocks-out">OutOfStocks</span>}</p>
                        <div className="product__discription-section">
                            <span className="discription__title">Discription</span>
                            <p className="product__discription">{discription}</p>
                        </div>
                        <button className="btn__add-review">add review</button>
                    </div>
                </div>
            </div>
          )
    }
}

export default CurrentProduct

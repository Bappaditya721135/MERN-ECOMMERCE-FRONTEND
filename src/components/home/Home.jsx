import { FaMouse } from "react-icons/fa";
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import Product from "../product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { asyncProductAction } from "../../redux/product/productAction";

export default function Home() {

    const state = useSelector(state => state.product);
    const dispatch = useDispatch();

    // GET ALL THE PRODUCTS 
    useEffect(() => {
        dispatch(asyncProductAction())
    }, [])


    if(state.loading) {
        return <h2>loading...</h2>
    }

    if(state.error) {
        return <h2>error ocured</h2>
    }

    return (
        <div className="app">
            <Header />
            <div className="banner">
                <p>Wellcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <a href="#products">
                    <button>scrool
                        <FaMouse />
                    </button>
                </a>
            </div>
            {/* {state.products && <Product products={state.products} />} */}
            <Footer />
        </div>
    )
}
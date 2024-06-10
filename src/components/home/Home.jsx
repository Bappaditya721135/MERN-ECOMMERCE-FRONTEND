import { FaMouse } from "react-icons/fa";
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import Product from "../product/Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { asyncProductAction } from "../../redux/product/productAction";
import { Outlet, useLocation } from "react-router-dom";
import { asyncLoadUser } from "../../redux/authentication/LoadUserAction";
import { toast, Toaster } from "sonner";

export default function Home() {

    const dispatch = useDispatch();
    

    // GET ALL THE PRODUCTS 
    useEffect(() => {
        dispatch(asyncProductAction())
    }, [])



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
            {/* {loading && <p>loading</p>} */}
            {<Product />}
            <Outlet />
            <Footer />
            <Toaster richColors position="top-center" expand={true} visibleToasts={1} toastOptions={{style: {padding: "10px", fontSize: "1.3rem"}}} />
        </div>
    )
}
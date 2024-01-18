import { FaMouse } from "react-icons/fa";
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";

export default function Home() {
    return (
        <div className="app">
            <Header />
            <div className="banner">
                <p>Wellcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <a href="#">
                    <button>scrool
                        <FaMouse />
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    )
}
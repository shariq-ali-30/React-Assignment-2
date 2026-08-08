import './App.css'
import logo from './assets/logo.png'
import heroImage from './assets/hero-banner.png'

function App() {
    return (
        <>
            <div className="navbar">

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="nav-links">
                    <a href="">Home</a>
                    <a href="">Plants</a>
                    <a href="">Categories</a>
                    <a href="">About Us</a>
                    <a href="">Contact</a>
                </div>

                <div className="icons">
                    <div>
                        <i className="ph ph-magnifying-glass"></i>
                    </div>
                    <div>
                        <i className="ph ph-user"></i>
                    </div>
                    <div>
                        <i className="ph ph-shopping-cart-simple"></i>
                        <span>2</span>
                    </div>
                </div>

            </div>

            <section className="hero-section">
                <img src={heroImage} alt="hero image" />
            </section>
        </>
    )
}

export default App

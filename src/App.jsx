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

                <div className="search-bar">
                    <input type="text" placeholder="Search your favourite food..." />
                </div>

            </div>

            <div className="continer">

                <section className="hero-section">
                    <img src={heroImage} alt="hero image" />
                </section>
                
            </div>
        </>
    )
}

export default App

import './App.css'
import logo from './assets/logo.png'
import heroImage from './assets/hero-banner.png'

function App() {
    return (
        <>
            <div className="continer">

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

                <section className="hero-section">
                    <img src={heroImage} alt="hero image" />
                </section>

                <section className="cards-section">

                    <div className="section-title">
                        <p>Popular Foods</p>
                        <h2>Most Loved dishes</h2>
                        <span></span>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <div className="image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQ89CA9ka1UCO7Jj2yPGeCfcWBnGzae5Q-SdGV1E1_A&s=10" alt="" />
                            </div>
                            <div className="details">
                                <h3>Cheezy Margherita pizza</h3>
                                <p><i class="ph-fill ph-star"></i> 4.6</p>
                                <div>
                                    <p>Rs. 180</p>
                                    <span><i class="ph-bold ph-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </>
    )
}

export default App

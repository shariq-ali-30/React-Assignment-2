import './App.css'
import { useState } from "react";
import logo from './assets/logo.png'
import heroImage from './assets/hero-banner.png'
import newsletterImage from './assets/newsletter-image.png'
import footerLogo from './assets/footer-logo.png'
import CardsParent from './components/CardsParent.jsx';
import menu from './data.js'

function App() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredMenu = menu.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )

    return (
        <>
            <div className="continer">

                <div className="navbar">

                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="nav-links">
                        <div><a href="#home">Home</a></div>
                        <div><a href="#menu">Menu</a></div>
                        <div><a href="#about">About Us</a></div>
                        <div><a href="#contact">Contact</a></div>
                    </div>

                    <div className="search-bar">
                        <i className="ph-bold ph-magnifying-glass"></i>
                        <input onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} type="text" placeholder="Search your favourite food..." />
                    </div>

                </div>

                <section className="hero-section" id="home">
                    <img src={heroImage} alt="hero image" />
                </section>

                <section className="cards-section" id="menu">

                    <div className="section-title">
                        <p>Popular Foods</p>
                        <h2>Most Loved dishes</h2>
                        <span></span>
                    </div>

                    <CardsParent menuItems={filteredMenu} />

                </section>

                <section className="wcu-section" id="about">

                    <div className="section-title">
                        <p>Why Choose Us</p>
                        <h2>We Make It Easy</h2>
                        <span></span>
                    </div>

                    <div className="cards">

                        <div className="card">
                            <div className="icon">
                                <i className="fa-solid fa-motorcycle"></i>
                            </div>
                            <div>
                                <h3>Fast Delivery</h3>
                                <p>Get your fvourite food delivered hot & fresh.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <i className="ph-fill ph-seal-percent"></i>
                            </div>
                            <div>
                                <h3>Fast Delivery</h3>
                                <p>Get your fvourite food delivered hot & fresh.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="icon">
                                <i className="fa-solid fa-headset"></i>
                            </div>
                            <div>
                                <h3>Fast Delivery</h3>
                                <p>Get your fvourite food delivered hot & fresh.</p>
                            </div>
                        </div>

                    </div>

                </section>

                <section className="newsletter-section" id="contact">
                    <div className="left">
                        <img src={newsletterImage} />
                        <div>
                            <h3>Hungry? We've got you!</h3>
                            <p>Subscribe now and get updates on exclusive offers and new arrivals.</p>
                        </div>
                    </div>
                    <div className="right">
                        <input type="text" placeholder="Enter yoyr email" />
                        <button>Subscribe <i className="ph ph-paper-plane-tilt"></i></button>
                    </div>
                </section>

                <footer>
                    <div className='footer-content'>
                        <div className='column'>
                            <img src={footerLogo} />
                            <span>Good food at your doorstep. Every time!</span>
                            <div className="links">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        <div className='column'>
                            <p>Quick Links</p>
                            <a href="">Home</a>
                            <a href="">Menu</a>
                            <a href="">About Us</a>
                            <a href="">Contact</a>
                        </div>
                        <div className='column'>
                            <p>Company</p>
                            <a href="">About Us</a>
                            <a href="">Career</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms & Conditions</a>
                            <a href="">FAQ</a>
                        </div>
                        <div className='column'>
                            <p>Contact Us</p>
                            <a href=""><i className="ph ph-phone"></i> +92 3706831894</a>
                            <a href=""><i className="ph ph-envelope"></i> foodiefast@gmial.com</a>
                            <a href=""><i className="ph ph-map-pin"></i> Street 12, Gulshan-e-Iqbal, Karachi, Pakistan</a>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default App

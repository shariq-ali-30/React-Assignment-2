import React from 'react'
import Card from './Card'

const CardsParent = ({ menuItems }) => {
    
    if (menuItems.length === 0) {
        return (
            <div className="no-results">
                <i className="ph-bold ph-magnifying-glass"></i>
                <h3>No dishes found!</h3>
                <p>Try searching for something else like Pizza, Burger, or Biryani.</p>
            </div>
        )
    }

    return (
        <div className="cards">
            {menuItems.map((item) =>
                <Card image={item.image} name={item.title} price={item.price} rating={item.rating} key={item.id} />
            )}
        </div>
    )
}

export default CardsParent
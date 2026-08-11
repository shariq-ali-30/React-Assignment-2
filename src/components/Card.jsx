function Card({image, name, price, rating}) {

    return (
        <div className="card">
            <div className="image">
                <img src={image} />
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p><i className="ph-fill ph-star"></i> {rating}</p>
                <div>
                    <p>Rs. {price}</p>
                    <span><i className="ph-bold ph-plus"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Card
function Card() {
    return (
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
    )
}

export default Card
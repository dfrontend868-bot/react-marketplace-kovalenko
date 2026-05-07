import { useState } from 'react';

function Scooter ({ brand, model, price, isSold: initialIsSold, img}) {
  const [isSold, setIsSold] = useState(initialIsSold);
  const toggleIsSold = (e) => {
    e.stopPropagation();
   setIsSold(!isSold);
  };
   const handleBuy = () => {
    if (!isSold) {
      alert(`Ти вибрав ${brand} ${model} за ${price.toLocaleString()} $`);
      setIsSold(true);
    } else {
        alert(`Цього скутера немає в наявності`)
    }
}; 
return (
    <div className={`shop-card ${isSold ? 'sold' : 'available'}`} onClick={handleBuy}>
        <div className="card-image">
            <img src={img} alt={brand} />
            {isSold && <div className="sold-badge">ПРОДАНО</div>}
        </div>
        <div className="card-content">
            <h2>{brand} {model}</h2>
            <p className="price">{price.toLocaleString()} $</p>
            <p className="status-text">{isSold ? "❌ Немає в наявності" : "✅ В наявності"}</p>
            <button className="status-btn" onClick={toggleIsSold}>Змінити статус</button>
        </div>
    </div>
  );
}
export default Scooter;
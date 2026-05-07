import { useState } from 'react';

function Card({ brand, model, title, price, img, address, isSold, isAvailable, type, onBuy }) {
  const [active, setActive] = useState(type === 'house' ? isAvailable : !isSold);

  const toggleStatus = (e) => {
    e.stopPropagation();
    setActive(!active);
  };

  const handleBuy = () => {
    if (active) {
      const name = title || `${brand} ${model}`;
      alert(`Вітаємо! Ви обрали ${name} за ${price.toLocaleString()} $`);
      setActive(false);
      onBuy();
    } else {
      alert("На жаль, товар уже продано.");
    }
  };

  const displayTitle = title || `${brand} ${model}`;

  return (
    <div className={`shop-card ${!active ? 'sold' : 'available'}`}>
      <div className="card-image">
        <img src={img} alt={displayTitle} />
        {!active && <div className="sold-badge">ПРОДАНО</div>}
      </div>
      <div className="card-content">
        <h2>{displayTitle}</h2>
        {address && <p className="address">📍 {address}</p>}
        <p className="price">{price.toLocaleString()} $</p>
        <button
        className="buy-btn"
        onClick={handleBuy}
        disabled={!active}
        >
          {active ? "Купити" : "Немає в наявності"}
        </button>
        <p className="status-text">{active ? "✅ В наявності" : "❌ Продано"}</p>
        <button className="status-btn" onClick={toggleStatus}>
          Адмін: Змінити статус
        </button>
      </div>
    </div>
  );
}
export default Card;
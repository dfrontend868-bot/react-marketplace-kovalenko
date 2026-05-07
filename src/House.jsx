import { useState } from 'react';

function House({ title, address, price, isAvailable: initialIsAvailable, img }) {
  const [isAvailable, setIsAvailable] = useState(initialIsAvailable);

  const toggleAvailability = (e) => {
    e.stopPropagation(); 
    setIsAvailable(!isAvailable);
  };

 
  const handleBuy = () => {
    if (isAvailable) {
      alert(`Вітаємо! Ви обрали ${title} за ${price.toLocaleString()} $`);
      setIsAvailable(false);
    } else {
      alert("Цей об'єкт уже продано!");
    }
  };

  return (
    
    <div 
      className={`house-card ${!isAvailable ? 'house-sold-out' : ''}`} 
      onClick={handleBuy}
    >
      <div className="house-img-container">
        <img src={img} alt={title} />
        
        <div className={`house-badge ${isAvailable ? 'badge-available' : 'badge-sold'}`}>
          {isAvailable ? 'В наявності' : 'Продано'}
        </div>
      </div>

      <div className='house-info'>
        <h2>{title}</h2>
        <span className='house-address'>📍 {address}</span>
        <p className='house-price'>{price.toLocaleString()} $</p>
        
        <button className='btn-view' onClick={toggleAvailability}>
          {isAvailable ? 'Змінити статус' : 'Повернути в продаж'}
        </button>
      </div>
    </div>
  );
}

export default House;
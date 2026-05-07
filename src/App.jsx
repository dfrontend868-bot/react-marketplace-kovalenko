import { Routes, Route, Link } from "react-router-dom";
import Card from "./Card";
import "./App.css";
import { useState } from "react";

function App() {
  const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      price: 25000,
      isSold: false,
      img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=400",
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      price: 22000,
      isSold: true,
      img: "https://cdn3.focus.bg/autodata/i/honda/civic/civic-x/large/72244f64e79ba879d499b67acd2f8ec5.jpg",
    },
    {
      id: 3,
      brand: "Ford",
      model: "Mustang",
      price: 35000,
      isSold: false,
      img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=400",
    },
  ];

  const houses = [
    {
      id: 1,
      title: "Будинок на березі",
      address: "вул. Морська, 12",
      price: 150000,
      isAvailable: true,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
    },
    {
      id: 2,
      title: "Сучасний котедж",
      address: "вул. Сучасна, 45",
      price: 200000,
      isAvailable: false,
      img: "https://plans.com.ua/sites/default/files/styles/project_full/public/d35e33acb10ccb2019f850cec8a0691c.jpg?itok=_C8Y-Ggg",
    },
    {
      id: 3,
      title: "Затишна дача",
      address: "вул. Дачна, 78",
      price: 120000,
      isAvailable: true,
      img: "https://kor.ill.in.ua/m/610x385/1484903.jpg",
    },
  ];

  const scooters = [
    {
      id: 1,
      brand: "Suzuki",
      model: "Address V50",
      price: 800,
      isSold: false,
      img: "https://motokv.com.ua/image/cache/catalog/image/data/скутера/skuter-suzuki-address-v50-640x480.jpg",
    },
    {
      id: 2,
      brand: "Honda",
      model: "Dio 34",
      price: 650,
      isSold: true,
      img: "https://motokv.com.ua/image/cache/catalog/image/data/скутера/skuter-honda-dio-af34-640x480.jpg",
    },
    {
      id: 3,
      brand: "Yamaha",
      model: "Jog 36",
      price: 750,
      isSold: false,
      img: "https://dvako.com.ua/image/cache/data/products/scooters/yamaha/sa36j/main-800x800ad.jpg",
    },
  ];

  const [cartCount, setCartCount] = useState(0);
  const addToCard = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <div className="app-wrapper">
        <nav className="nav-menu">
          <Link to="/">Головна</Link>
          <Link to="/cars">Автосалон</Link>
          <Link to="/houses">Нерухомість</Link>
          <Link to="/scooters">Скутери</Link>
          <div className="cart-badge">Кошик: {cartCount}</div>
        </nav>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-center">
                  <h1>
                    <span className="surname">KOVALENKO</span> Marketplace
                  </h1>
                  <h2>Вітаємо на нашому маркетплейсі!</h2>
                </div>
              }
            />

            <Route
              path="/cars"
              element={cars.map((car) => (
                <Card key={car.id} {...car} onBuy={addToCard} />
              ))}
            />

            <Route
              path="/houses"
              element={houses.map((house) => (
                <Card key={house.id} {...house} type="house" onBuy={addToCard} />
              ))}
            />

            <Route
              path="/scooters"
              element={scooters.map((scooter) => (
                <Card key={scooter.id} {...scooter} onBuy={addToCard} />
              ))}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;

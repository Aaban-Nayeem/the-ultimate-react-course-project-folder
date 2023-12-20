import React from "react";
import ReactDOM from "react-dom/client";
import Spinaci from "./assets/pizzas/spinaci.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <>
      <div className="">
        <Header />
        <Footer />
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="">
        <h1>Fast React Pizza Co.</h1>
      </div>
    </>
  );
};

const Menu = () => {
  return (
    <>
      <div className=""></div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="">
        <footer>We're currently open</footer>
      </div>
    </>
  );
};

const Pizza = () => {
  return (
    <>
      <div className="">
        <img src={Spinaci} alt="" />
        <h2>Pizza Spianci</h2>
        <p>Tomato, mozarella, mushrooms, and onion</p>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

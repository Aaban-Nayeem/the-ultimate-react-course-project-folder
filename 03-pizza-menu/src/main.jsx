import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <div className="">
        <h3>Hello App</h3>
        <Pizza/>
      </div>
    </>
  );
};

const Pizza = () => {
  return (
    <>
      <div className="">
        <h3>Pizza</h3>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

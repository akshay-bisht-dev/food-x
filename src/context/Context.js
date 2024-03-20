import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Cart = createContext();

const API = "https://www.themealdb.com/api/json/v1/1";

const Context = ({ children }) => {
  const [dishList, setDishList] = useState([]);
  const [dish, setDish] = useState([]);

  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => {
        setDishList(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(`${API}/search.php?s`);
  }, []);

  return (
    <Cart.Provider value={{ API, dishList, dish, setDish, setDishList }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

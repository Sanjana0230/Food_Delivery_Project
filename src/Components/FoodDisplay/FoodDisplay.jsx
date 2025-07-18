import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FoodDisplay.css"; // Assuming you have a CSS file for styling
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {
  //here i remove category from the parameters as it is not used in this component

  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if(category === "All" || category === item.category){
            // Check if the category matches or if it is "All"

          
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            ></FoodItem>
          
          )};
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

import { useState } from "react";
import './style/Action.css'

export const Action = ({item,setCartCount}) => {
    
 const[status,setstatus]=useState(true)
  const cardAdd = () => {
    setstatus(false)
    setCartCount((prevCount) => prevCount + 1);
  };

  const cardRemove = () => {
    setstatus(true)
    setCartCount((prevCount) => prevCount - 1);
  };
  

  return (
    
   
      <div className="card shadow-sm">
        <div className="card-body">
         <img
            src={item.image}
            className="card-img-top"
            alt="image"
            style={{ position: "relative" }}
          />
          {item.ProductName === "Special item" && (
            <span
              className="badge bg-warning text-dark"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: "1",
                borderRadius: "5px",
                padding: "5px"
              }}
            >
              Sale
            </span>
          )}
            {item.ProductName === "Sale item" && (
            <span
              className="badge bg-warning text-dark"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: "1",
                borderRadius: "5px",
                padding: "5px"
              }}
            >
              Sale
            </span>
          )}
          
        
         
          <h5 className="card-title">{item.ProductName}</h5>
          {item.ProductName === "Popular item" && (
            <div className="stars">
            <span style={{ color: "gold" }} >&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          )}
          {item.ProductName === "Special item" && (
            <div className="stars">
            <span style={{ color: "gold" }} >&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          )}
          
          <p className="card-text">{item.Rupees}</p>
          {status ? (
            <button
              type="button"
              className= "btn btn-success"
              onClick={cardAdd}
            >
              Add to cart
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger"
              onClick={cardRemove}
              
            >
              Remove from the cart
            </button>
          )}
        </div>
      </div>
    
    
    
  );
};




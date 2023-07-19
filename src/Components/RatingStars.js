
import React, { useState } from "react";
import axios from "axios"; 
import style from '../modules/style.module.css';
function RatingStars() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingClick = (value) => {
    setRating(value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://formspree.io/f/mrgvjdab", { rating, comment })
      .then( () => {
         if(rating === 5)
          alert( "Prima:), super danke!" );
         if(rating === 4 || rating === 3)
          alert( "sehr gut:), danke schön bitte deine Idee in dem Nachrichtfield! lassen" );
         if(rating === 1 || rating === 2 )
          alert( "Entschulding:(, bitte deinen Grund in dem Nachrichtfield lassen " );
        setRating(0);
        setComment("");
      })
      .catch((error) => {
        alert("There was an error submitting your feedback: " + error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style['container-rating']}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`${value <= rating ? `${style.starfilled}`: `${style.star}`}`}
            onClick={() => handleRatingClick(value)}
          >
            &#9733;
          </span>
        ))}
        <input type="submit" value= "Ok" className={style.btn}/>
      </div>
     
    </form>
  );
}

export default RatingStars;
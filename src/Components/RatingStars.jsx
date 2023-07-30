
import React, { useState } from "react";
import axios from "axios"; 
import style from '../modules/style.module.css';
import ModalCheck from './modals/ModalCheck';





function RatingStars() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState( "" );
    const [showModal, setShowModal] = useState( false);


  const handleRatingClick = (value) => {
    setRating(value);
  };

  const cancelAction = (event) => {
    event.preventDefault();
    setShowModal( false );
     setRating(0);
     setComment("");
  }
   
  

  const handleSubmit = async (event) => {
     setShowModal( false );
    event.preventDefault();
   await axios.post("https://formspree.io/f/mrgvjdab", { rating, comment })
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
    console.log( 'submitted' );
  };

    const actionBar = <span className="text-red-600">Bitte bestätigen Sie deine Bewertung!</span>;

  let modal = <ModalCheck
    onClose={
      handleSubmit
    } actionBar={actionBar} cancelAction={cancelAction}></ModalCheck>
    
  return (
    <form onSubmit={()=> setShowModal(true)}>
      <div className={style['container-rating']}>
       <h4>Wie zufrieden sind Sie von meinen Projekten?</h4>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`${value <= rating ? `${style.starfilled}`: `${style.star}`}`}
            onClick={() => handleRatingClick(value)}
          >
            &#9733;
          </span>
        ))}
        <a href="###" className={style.btn} onClick={()=> setShowModal(true)}>Go</a>
      </div>
     
        {showModal&&modal}
    </form>
  );
}

export default RatingStars;

  // <input type="submit" value= "Go" className={style.btn}/>

  
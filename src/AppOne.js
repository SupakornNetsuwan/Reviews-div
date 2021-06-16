import React , { useState , useEffect} from "react";
import { RiArrowLeftSLine , RiArrowRightSLine } from "react-icons/ri";
import "./app.css";
import { peopleReviews } from "./people.js";

function App() {

  let [page , setPage] = useState(0);
  let [review , setReview] = useState({});

  let fetchReview = (page) =>{
    if(page > peopleReviews.length - 1){
      setReview(peopleReviews[peopleReviews.length - 1])
      setPage(peopleReviews.length - 1)
    }else if(page < 0){
      setReview(peopleReviews[0])
      setPage(0)
    }else{
      setReview(peopleReviews[page])
    }
  }

  let randomHandle = () =>{
    let pageRandom = Math.floor(Math.random() * peopleReviews.length)
    if(pageRandom === page){ //pageRandom must not same as page
      randomHandle()
    }else{
      setPage(pageRandom) //set a page that we got from random
      fetchReview(pageRandom)
    }
  }

  useEffect(()=>{
    fetchReview(page);
  },[page])
  

  return (
    <>
      <nav>
        <p>Reviews me. 1</p>
      </nav>
      
      <div className="content">
       <h2>What's your review</h2>

      <div className="review-box">
        <img src={review.image} alt={review.name+"_img"}/>
        <h3>{review.name}</h3>
        <p>{review.job}</p>
        <article>{review.text}</article>
        
        <div className="navigate">
          <div onClick={(e)=> setPage((prevPage)=> prevPage - 1)}><RiArrowLeftSLine/></div>
          <button onClick={randomHandle}>Random</button>
          <div onClick={(e)=> setPage((prevPage)=> prevPage + 1)}><RiArrowRightSLine/></div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

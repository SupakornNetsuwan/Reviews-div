import React , { useReducer , useEffect} from "react";
import { RiArrowLeftSLine , RiArrowRightSLine } from "react-icons/ri";
import "./app.css";
import { peopleReviews } from "./people.js";

function App() {

  let fetchReview = (page) =>{
    if(page === state.page + 1 && page < peopleReviews.length){
      clippatch({type:"INCREASE_PAGE" , payload:peopleReviews[page]})
    }
    
    if(page === state.page - 1 && page >= 0){
      clippatch({type:"DECREASE_PAGE" , payload:peopleReviews[page]})
    }
    
    if(page - state.page > 1 || state.page - page > 1){
      clippatch({type:"RANDOM" , payload:{pageNumber:page,review:peopleReviews[page]}})
    }
  }

  let randomHandle = () =>{
    let randomPage = Math.floor(Math.random() * peopleReviews.length);
    // console.log(randomPage , state.page)
    if(randomPage === state.page){
      console.log("Yes")
      randomHandle();
    }else{
      fetchReview(randomPage)
    }
  }

  let reducer = (state,action) =>{
    if(action.type === "INCREASE_PAGE"){
      return{
        ...state,
        page: state.page + 1,
        review:action.payload
      }
    }

    if(action.type === "DECREASE_PAGE"){
      return{
        ...state,
        page: state.page - 1,
        review:action.payload
      }
    }

    if(action.type === "RANDOM"){
      return{
        ...state,
        page: action.payload.pageNumber,
        review: action.payload.review
      }
    }
  }

  let defaultState = {
    page:0,
    review:peopleReviews[0]
  }

  let [state , clippatch] = useReducer(reducer , defaultState);

  useEffect(()=>{
    console.log(state)
  },[state])

  let {name , image , job , text} = state.review;

  return (
    <>
      <nav>
        <p>Reviews me. 2</p>
      </nav>
      
      <div className="content">
       <h2>What's your review</h2>

      <div className="review-box">
        <img src={image} alt={image + "_img"}/>
        <h3>{name}</h3>
        <p>{job}</p>
        <article>{text}</article>
        
        <div className="navigate">
          <div onClick={()=> fetchReview(state.page - 1)}><RiArrowLeftSLine/></div>
          <button onClick={randomHandle}>Random</button>
          <div onClick={()=> fetchReview(state.page + 1)}><RiArrowRightSLine/></div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

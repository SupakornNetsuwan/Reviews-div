import React , {useState,useEffect} from "react";
import "./lorem.css";

let para = [
    "1Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "2Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "3Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "4Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "5Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "6Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "7Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "8Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "9Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "10Lorem Ipsum is simply dummy text of the printing and typesetting industry."
]

export const LoremGen = () =>{
    let [rows , setRows] = useState(0);
    let [showLorem , setShowLorem] = useState("")

    let sliceLorem = (rows) =>{
        let duplicateTime = Math.floor(rows/para.length);
        let exess = rows % para.length;
        let totalLorem = ""

       for(let i=0; i<duplicateTime; i++){
            totalLorem += para.join("") + " ";
        }
        

        for(let i=0; i<exess; i++){
            totalLorem += para[i]
        }

        setShowLorem(totalLorem)
    }

    let clickHandle = () =>{
        if(isNaN(rows) || rows < 1){
            sliceLorem(1)
            setRows(1)
        }else{
            let matchCheck = rows.toString().match(/[1-9][0-9]*/g)
            setRows(matchCheck[0])
            sliceLorem(matchCheck[0])
        }
    }

    useEffect(()=>{
        console.log(rows)
    },[rows])

    return(
        <div className="wrapper">
            <h3>Boring of Lorem?</h3>

            <div className="input">
                <p>Paragraphs:</p>
                <input type="number" value={rows} onChange={(e)=> setRows(e.target.value)}/>
                <button onClick={clickHandle}>Click</button>
            </div>

            {showLorem.length > 0 && <Content showLorem={showLorem}/>}
        </div>
    )
}

let Content = ({showLorem}) =>{
    return(
        <div className="paragraphs">
                {showLorem}
        </div>
    )
}


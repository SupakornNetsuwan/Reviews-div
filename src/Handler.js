import React , {useState , useEffect} from 'react'
import { useParams } from "react-router-dom";
import {people} from "./morePeople.js";

const Handler = () => {
    const {id} = useParams();
    let [person , setPerson] = useState({id:0,name:"Unknown"});

    useEffect(()=>{
        let findPerson = people.filter((person)=> person.id.toString() === id )
        if(findPerson.length > 0){
            setPerson(...findPerson)
        }
    },[id])

    return (
        <div>
            <p style={{textAlign:"center",color:"red"}}>This is handler for router</p>
            <p style={{textAlign:"center",color:"black"}}>Param ID is {id} and the person is {person.name}</p>
        </div>
    )
}

export default Handler;

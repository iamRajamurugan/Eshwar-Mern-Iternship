import React,{useState,useEffect} from 'react';
import axios from 'axios';//make sure axios is installed

const DataComponent=()=>{
    const[data,setData]=useState('');
    useEffect(()=>{
        axios.get('http://localhost:3000/api/data').then(response=>
            setData(response.data.message))
            .catch(error=>console.error('Error fetching data:',error));
    },[]);
    return(
        <div>
            <h1>data from server</h1>
            <p>{data}</p>
        </div>
    );
};
export default DataComponent;
import React,{useState,useEffect} from 'react';
import axios from 'axios';//make sure axios is installed

const DataComponent=()=>{
    const[data,setData]=useState('');
    const [inputMessage,setInputmessage]=useState('');
    const [responseMessage,setResponsemessage]=useState('');

    useEffect(()=>{
        axios.get('http://localhost:3000/api/data').then(response=>{
            setData(response.data.message);
          }).catch(error=>console.error('Error fetching data:',error));
    },[]);

    const handleClick=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/api/data',{message:inputMessage
    })
    .then(response=>setResponsemessage(response.data.message))
    .catch(error=>console.error('Error Sending data:',error));
    };




    return(
        <div>
            <h1>data from server</h1>
            <p>{data}</p>
            <form onSubmit={handleClick}>
              <label>
                Message:
              </label>
              <input  type="text" value={inputMessage} onChange={(e)=>setInputmessage(e.target.value)}/>
              <button type="submit" >Submit</button>
            </form>
            <p>{responseMessage}</p>
        </div>
    ); 
};
export default DataComponent;
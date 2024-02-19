import { useState } from "react"
import { useDispatch } from "react-redux";
import { format } from 'date-fns';

export default function Form(){
    const dispatch= useDispatch();

const [title, setTitle] = useState('');
const [start, setStart] = useState('');
const [end, setEnd]= useState('');
const [day, setDay]= useState('');

let currentDate = format(new Date(), 'MMMM do yyyy, h:mm:ss a');

const handleClick = () => {
    event.preventDefault();

    const newEvent = {
      title: title,
      start: start + 'T' + day,
      end: end + 'T' + day
    };
   console.log(`this is what im sending`, newEvent);

    const action = {
      type: "ADD_EVENT",
      payload: newEvent
    };
    dispatch(action);

    setTitle("");
    setStart("");
  };


//sample obj { title: 'Meeting', start: new Date(), groupId: 2 }

    return(
        <>
        <form>
          <label>Event title: </label>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} /><br/>
            <label>Day: </label>
            <input type="date" placeholder="time" onChange={(e) => setDay(e.target.value)} /><br/>
            <label>Start Time: </label>
            <input type="time" placeholder="time" onChange={(e) => setStart(e.target.value)} /><br/>
            <label>End Time: </label>
            <input type="time" placeholder="time" onChange={(e) => setEnd(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </form>
        </>
    )
}
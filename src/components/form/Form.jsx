import { useState } from "react"
import { useDispatch } from "react-redux";
import { format } from 'date-fns';

export default function Form(){
    const dispatch= useDispatch();

const [title, setTitle] = useState('');
const [start, setStart] = useState('');
const [end, setEnd]= useState('');
const [day, setDay]= useState('');
const [color, setColor]=useState('');

let currentDate = format(new Date(), 'MMMM do yyyy, h:mm:ss a');

const handleClick = () => {
    event.preventDefault();

    const newEvent = {
      title: title,
      start: day + 'T' + start,
      end: day + 'T' + end,
      color: color
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
            <input type="time" placeholder="time" onChange={(e) => setStart(e.target.value)} />
            <label>End Time: </label>
            <input type="time" placeholder="time" onChange={(e) => setEnd(e.target.value)} />
            <label>Select Color:</label>
            <select onChange={(e) => setColor(e.target.value)} name="color" id="color">
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="pink">pink</option>
            </select>
            <button onClick={handleClick}>Submit</button>
        </form>
        </>
    )
}
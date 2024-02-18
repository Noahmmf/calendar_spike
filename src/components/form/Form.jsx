import { useState } from "react"
import { useDispatch } from "react-redux";

export default function Form(){
    const dispatch= useDispatch();

const [title, setTitle] = useState('');
const [start, setStart] = useState('');

const handleClick = () => {
    event.preventDefault();

    const newEvent = {
      title: title,
      start: start
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
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="time" onChange={(e) => setStart(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </form>
        </>
    )
}
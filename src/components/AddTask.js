import { useState } from "react";

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const data = (e)=>{
        e.preventDefault();

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false)
    }

  return (
    <div className="tasks-form">
        <form onSubmit={data}>
            <div><input type='text' placeholder="Your Task" value={text} onChange={(e) => setText(e.target.value)} required /></div>
            <div><input type='text' placeholder="Day" value={day} onChange={(e) => setDay(e.target.value)} /></div>
            <div><span>Reminder?</span><label></label><input className="customize" type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} /></div>
            <input type='submit' value='Add' />  
        </form>
    </div>
  )
}

export default AddTask
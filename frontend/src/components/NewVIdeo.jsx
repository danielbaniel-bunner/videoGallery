import { useState } from "react";
import axios from 'axios'
import "./NewVideo.css"

export function NewVideo() {
    const [description,setDescription]= useState('');
    const [title,setTitle]=useState('');
    const [date, setDate]=useState('');
    const [file,setFile]=useState(null);

    const addVideoHandler = event => {
        event.preventDefault();
        // console.log({description,file})
        // //process data
        // const formData = new FormData();
        // formData.append('video', file);
        // formData.append('title', title);
        // formData.append('description', description);

        const formData = new FormData();

        formData.append('file', file);
        formData.append("title", title);

        try {
            const vidToSend = fetch("http://localhost:5050/upload-video", {
                method: 'POST',
                body: formData
            })
        } catch (e) {
            console.log(e)
        }

    };
    const descriptionHandler = event => {
        setDescription(event.target.value)
    };

    const titleHandler = event => {
        setTitle(event.target.value)
    };

    const dateHandler = event => {
        setDate(event.target.value)
    };
    const newFileHandler = event => {
        setFile(event.target.files[0]);
    };
    return (
            <form className="new-video" onSubmit ={addVideoHandler}> 
                <div class =" description-input">
                    <p>Description</p>
                    <input type="text" value={description} onChange={descriptionHandler}/>
                </div>
                <div class = "title-input">
                    <p>Title</p>
                    <input type = "text" value = {title} onChange={titleHandler}/>
                </div>
                <div>
                    <p>Date</p>
                    <input type = "date" value = {date} onChange={dateHandler}/>
                </div>
                <div class="file-input">
                    <p>File</p>
                     <input type ="file"  onChange={newFileHandler}/>
                </div>
                <div class = "submit-btn">
                    <p>Submit</p>
                    <button type = "submit">Add VIdeo</button>
                </div>
            </form>
        
    );
    
};
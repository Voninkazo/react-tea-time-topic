import React from 'react';

export default function FormComponent(props) {
    return (
            <form className="form" onSubmit={props.handleSubmit}>
                <label htmlFor="title" className="label">Add a new topic</label>
                <input type="text"
                 name="title" 
                 id="topic" 
                 placeholder="Write your topic idea here..."
                 className="input" 
                 value={props.value} 
                 />
                <button type="submit" id="submit">Submit</button>
            </form>
    )
}
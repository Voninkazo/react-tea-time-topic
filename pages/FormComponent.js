import React from 'react';

export default function FormComponent(props) {
    return (
            <form className="form" onSubmit={props.handleSubmit}>
                <label htmlFor="topic" className="label">Add a new topic</label>
                <input type="text"
                 name="topic" 
                 id="topic" 
                 placeholder="Write your topic idea here..."
                 className="input"
                 />
                <button type="submit" id="submit">Submit</button>
            </form>
    )
}
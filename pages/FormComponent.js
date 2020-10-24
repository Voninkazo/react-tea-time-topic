import React from 'react';

export default function FormComponent() {
    return (
            <form className="form">
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
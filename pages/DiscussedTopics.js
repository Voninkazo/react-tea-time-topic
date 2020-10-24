import React from 'react';
import IconDelete from '../icons/delete.svg';


export default function DiscussedTopics({topic,handleDelete}) {
    console.log(handleDelete)
    return(
        <ul>
            <li>
                <p>{topic.title}</p>
                <button className="remove" value={topic.id} onClick={handleDelete}>
                <img src={IconDelete} alt=""/>
                </button>
            </li>
            <li><p>{topic.discussedOn}</p></li>
        </ul>
    )
}
import React from 'react';
import IconDelete from '../icons/delete.svg';


export default function DiscussedTopics({topic}) {

    return(
        <ul>
            <li>
                <p>{topic.title}</p>
                <p className="remove" datatype={topic.id}>
                <img src={IconDelete} alt=""/>
                </p>
            </li>
            <li><p>{topic.discussedOn}</p></li>
        </ul>
    )
}
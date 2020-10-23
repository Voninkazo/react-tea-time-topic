import React from 'react';
import IconLike from '../icons/like.svg';
import IconDislike from '../icons/dislike.svg';
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
            <li>
                <button className="like" value={topic.id}>
                    <img src={IconLike} alt=""/>
                    <span>{topic.upvotes}</span>
                </button>
                <button className="dislike" value={topic.id}>
                    <img src={IconDislike} alt=""/>
                    <span>{topic.downvotes}</span>
                </button>
            </li>
            <li><p>{topic.discussedOn}</p></li>
        </ul>
    )
}
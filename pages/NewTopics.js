import React from 'react';
import IconArchaive from '../icons/archaive.svg';
import IconLike from '../icons/like.svg';
import IconDislike from '../icons/dislike.svg';

export default function NewTopics({topic}) {
    return(
            <ul>
                <li>
                    <p>{topic.title}</p>
                    <p className="archaive" value={topic.id}>
                    <img src={IconArchaive} alt=""/>
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
            </ul>
    )
}
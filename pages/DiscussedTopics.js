import React from 'react';

export default function DiscussedTopics({topic,handleDelete}) {
    // console.log(handleDelete)
    const discussedOnDate =new Date(Number(topic.discussedOn));
    return(
        <ul>
            <li>
                <p>{topic.title}</p>
                <button className="remove" value={topic.id} onClick={handleDelete}>
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 5.125H15.5M14.625 5.125L13.8664 15.7493C13.8349 16.1908 13.6374 16.604 13.3135 16.9056C12.9896 17.2073 12.5634 17.375 12.1208 17.375H4.87925C4.43662 17.375 4.01043 17.2073 3.68652 16.9056C3.36262 16.604 3.16505 16.1908 3.13363 15.7493L2.375 5.125H14.625ZM6.75 8.625V13.875V8.625ZM10.25 8.625V13.875V8.625ZM11.125 5.125V2.5C11.125 2.26794 11.0328 2.04538 10.8687 1.88128C10.7046 1.71719 10.4821 1.625 10.25 1.625H6.75C6.51794 1.625 6.29538 1.71719 6.13128 1.88128C5.96719 2.04538 5.875 2.26794 5.875 2.5V5.125H11.125Z" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </li>
            <li><p>{discussedOnDate.toLocaleDateString()}</p></li>
        </ul>
    )
}
import React, {useState} from 'react';
import IconArchaive from '../icons/archaive.svg';
import IconLike from '../icons/like.svg';
import IconDislike from '../icons/dislike.svg';

export default function NewTopics({topic, archaiving, allTopics,setAllTopics}) {

    let likeVotes = topic.upvotes;
    let dislikeVotes = topic.downvotes;

    const [upVotes, setUpVotes] = useState(likeVotes);

   function handleUpvotes() {
    console.log("I'm in handleUpvotes function");
    setUpVotes(upVotes + 1);
    console.log(upVotes);
    setAllTopics([...allTopics])
}

    const [downVotes, setDownVotes] = useState(dislikeVotes);
    function handleDownVotes() {
        setDownVotes(downVotes + 1);
        setAllTopics([...allTopics])
    }
    
    return(
            <ul>
                <li>
                    <p>{topic.title}</p>
                    <p className="archaive" value={topic.id} onClick={archaiving}>
                    <img src={IconArchaive} alt=""/>
                    </p>
                </li>
                <li>
                    <button className="like" value={topic.id} onClick={handleUpvotes}>
                        <img src={IconLike} alt=""/>
                        <span>{upVotes}</span>
                    </button>
                    <button className="dislike" value={topic.id} onClick={handleDownVotes}>
                        <img src={IconDislike} alt=""/>
                        <span>{downVotes}</span>
                    </button>
                </li>
            </ul>
    )
}
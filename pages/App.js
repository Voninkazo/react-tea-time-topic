import React, { useEffect, useState } from 'react';
import DiscussedTopics from './DiscussedTopics';
import NewTopics from './NewTopics';
import FormComonent from './FormComponent';

export default function App() {
    const url = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json";

    const [allTopics, setAllTopics] = useState([]);
    const [previousTopics, setPreviousTopics] = useState([]);

    const getTopics = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setAllTopics(data);
            console.log(data);
        }catch(e){
            console.log(error(e));
        }
    }
    useEffect(() => {
        getTopics();
    },[])

    const [nexTopics, setNextTopics] = useState([])

    useEffect(() => {
        setNextTopics( allTopics.filter(topic=> {
            return(topic.discussedOn === "")
        }))
    },[allTopics])


    useEffect(() => {
        setPreviousTopics(allTopics.filter(topic=> {
        return(topic.discussedOn !== "")
        }))
    },[allTopics])

    function handleDelete(e) {
        console.log("deleted");
        const idToDelete = e.target.value;
        console.log(idToDelete);
        setPreviousTopics(previousTopics.filter(topic => topic.id !== idToDelete))
    }

     function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted");
    }

    return(
        <div className="container">
            <FormComonent  handleSubmit={handleSubmit}/>
            <h3>New Topics</h3> 
            <div className="lists">
                {
                    nexTopics.map(topic => {
                        return(
                            <NewTopics 
                            key={topic.id} topic={topic} 
                            />
                        )
                    })
                }
            </div>
            <h3>Discussed Topics</h3>
            <div className="lists">
                {
                    previousTopics.map(topic => {
                        return(
                            <DiscussedTopics
                             key={topic.id} topic={topic}
                             handleDelete={handleDelete}
                             />
                        )
                    })
                }
            </div>
        </div>
    )
}
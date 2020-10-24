import React, { useEffect, useState } from 'react';
import DiscussedTopics from './DiscussedTopics';
import NewTopics from './NewTopics';
import FormComonent from './FormComponent';

export default function App() {
    const url = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json";

    const [allTopics, setAllTopics] = useState([]);

    const getTopics = async () => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            setAllTopics(data);
            console.log(data);
        }catch(e){
            console.log(error(e))
        }
    }
    useEffect(() => {
        getTopics();
    },[])

    const newTopics = allTopics.filter(topic=> {
        return(topic.discussedOn === "")
    })

    const discussedTopics= allTopics.filter(topic=> {
        return(topic.discussedOn !== "")
    })

    return(
        <div className="container">
            <FormComonent />
            <h3>New Topics</h3>
            <div className="lists">
                {
                    newTopics.map(topic => {
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
                    discussedTopics.map(topic => {
                        return(
                            <DiscussedTopics
                             key={topic.id} topic={topic}
                             />
                        )
                    })
                }
            </div>
        </div>
    )
}
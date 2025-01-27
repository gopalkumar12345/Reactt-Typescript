import React from "react";
import Todo from "./components/Todo";


const tasks=[
    {
        id:1,
        tasks:"eating",
    },
    {
        id:2,
        tasks:"fishing",
    },
    {
        id:3,
        tasks:"sleeping"
    }

]

const App:React.FC = () => {
    return (
        <div>
            <Todo items = {tasks}/>
            <Todo items = {tasks}/>
            <Todo items = {tasks}/>
        </div>
    )
}

export default App
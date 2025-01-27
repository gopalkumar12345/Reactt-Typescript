import React from 'react'
import TodoItem from './Todoitem'

import './style.css'

interface ITodoitems {
    id : number,
    tasks : string,
}
 
interface ITodoitemsProps{
    items : ITodoitems[]
}


const Todo: React.FC <ITodoitemsProps> = (props) => {
  return (
    <div className='todo-container'>
        <ol>
            {
                props.items.map(item => <TodoItem title= {item.tasks} key={item.id}/>)
            }
        </ol>
    </div>
  )
}

export default Todo
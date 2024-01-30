import React from 'react'
import dummyData from '../../utils/task_dummy_data'
const TaskPage = () => {
  return (
    <div>
      {dummyData.map((task)=>(
        <ul key={task._id}>
            <li>{task._id}</li>
            <li>{task.task_name}</li>
            <li>{task.task_status}</li>
        </ul>
      ))}
    </div>
  )
}

export default TaskPage

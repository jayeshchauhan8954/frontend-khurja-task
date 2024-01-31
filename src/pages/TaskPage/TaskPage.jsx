import React, { useEffect, useState } from 'react'
import dummyData from '../../utils/task_dummy_data'
import Box from '@mui/material/Box'
import { getData } from '../../api/axios'
const TaskPage = () => {
  const [task, setTask] = useState(null);
  const getTask = async () => {
    try {
      let response = await getData('/intern/api/v1/get-all-tasks')
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getTask()
  }, [task])
  return (
    <div >

      {dummyData.map((task) => (
        <Box>
          <table style={{ float: "left", marginLeft: '10px' }} >
            <th>
              <td>Id</td>
              <td>Task Name</td>
              <td>Status</td>
              <td>Updated By</td>
            </th>
            <ul key={task.user}>

              <li style={{ listStyle: 'none' }}>{task._id}</li>
              <li style={{ listStyle: 'none' }}>{task.task_name}</li>
              <li style={{ listStyle: 'none' }}>{task.task_status}</li>
              <li style={{ listStyle: 'none' }}>{task.updated_by}</li>

            </ul>
          </table>
        </Box>
      ))}
    </div>
  )
}

export default TaskPage

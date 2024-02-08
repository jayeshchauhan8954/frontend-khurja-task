import React, { useEffect, useState } from 'react'
import dummyData from '../../utils/task_dummy_data'
import Box from '@mui/material/Box'
import { getData } from '../../api/axios'
// import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import CustomTable from '../../components/CustomTable/CustomTable'
const sec_key = 'intern_ProJecT_-khurja_St@Qo-main';
const TaskPage = () => {
  const [task, setTask] = useState(null);
  const columns = {
    col1: { title: "Id", status: true, getElement: (item) => item?._id || "--", },
    col2: { title: "staus", status: true, getElement: (item) => item?.task_status || "--", },

    col3: { title: "Task Name", status: true, getElement: (item) => item?.task_name || "--", },
    col4: { title: "Priority", status: true, getElement: (item) => item?.priority || "--", },
    col5: { title: "Updated By", status: true, getElement: (item) => item?.updated_by || "--", },

  };

  const getTask = async () => {
    try {
      // const headers = {
      //   'accessToken': `localStorage.getItem('accesstoken')`
      // };
      const headers = {
        'accessToken': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTRjMTI2ZjY4OTA2OGQ1NDc2M2YyZSIsImVtYWlsIjoib2ZmaWNpYWxqaXRhbmRyYWNoYXVoYW5AZ21haWwuY29tIiwibmFtZSI6IkpheWVzaCBDaGF1aGFuIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTcwNjg1NTQxNSwiZXhwIjoxNzA2OTQxODE1fQ.aVdQfYZ-Glb641l1Jb1jji5zwcYI82cyzhKRaQ3IaNY`
      };
      // console.log('token is by jayesh',headers.accessToken)
      
      let response = await getData('intern/api/v1/get-all-tasks', headers)
      // console.log(response, 'this response is coming from task data')
      setTask(response.data.data);
      console.log(task)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getTask()
  }, [setTask])
  return (
    <div >
      {/* 
      {dummyData.map((task) => (
        <Box>
          <table style={{ float: "left", marginLeft: '10px' }} >
            <th >
              <td style={{ float:'left',marginLeft:'40px'}}>Id</td>
              <td style={{ float:'left',marginLeft:'40px'}}>Task Name</td>
              <td style={{ float:'left',marginLeft:'40px'}}>Status</td>
              <td style={{ float:'left',marginLeft:'40px'}}>Updated By</td>
            </th>
            <ul key={task.user}>

              <li style={{ listStyle: 'none',float:'left',marginLeft:'30px' }}>{task._id}</li>
              <li style={{ listStyle: 'none',float:'left',marginLeft:'30px'}}>{task.task_name}</li>
              <li style={{ listStyle: 'none',float:'left',marginLeft:'30px'}}>{task.task_status}</li>
              <li style={{ listStyle: 'none',float:'left',marginLeft:'30px'}}>{task.updated_by}</li>

            </ul>
          </table>
        </Box>
      ))} */}




      <CustomTable
        freezeColum={7}
        columns={columns}
        data={task}
        isLoading={false}
      />
    </div>
  )
}

export default TaskPage



// here is the column of table

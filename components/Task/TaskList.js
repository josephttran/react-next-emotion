/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import Task from './TaskItem';

const Tasks = styled.ul`
  margin-top: 20px;
  label: tasks;
`

const TaskList = ({checklist, setChecklist}) => {
  return (
    <Tasks>
      {checklist.length > 0 ? checklist.map((ele) => <Task key={ele.id} task={ele} setChecklist={setChecklist}></Task>) : <li>No task</li>}
    </Tasks>
  )
}

export default TaskList;
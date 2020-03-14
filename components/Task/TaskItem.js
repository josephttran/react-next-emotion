/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Item = styled.li`
  label: task;
  margin-top: 5px;
  padding: 2px 6px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity, background, color;
  transition-duration: 0.2s;

  &.complete {
    opacity: 0.25;
    color: green;
  }

  &:not(.complete):hover {
    background: #ccebdb;
    opacity: 1;
  }
`

const TaskItem = ({task, setChecklist}) => {
  const handleClick = () => {
    setChecklist(prevState => {
      return prevState.map((ele, index) => {
        if (index == task.id) {
          return {
            ...ele,
            completed: !task.completed
          }
        }

        return ele;
      })
    })
  }

  return (
    <Item onClick={handleClick} className={task.completed ? "complete" : ""}>{task.message}</Item>
  )
}

export default TaskItem;
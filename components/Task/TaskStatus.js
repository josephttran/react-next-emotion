import { useState, useEffect } from 'react';

import Link from 'next/link';
import styled from '@emotion/styled';

const Status = styled.div`
  label: status;
  font-weight: 700;
  margin-top: 20px;
`

const TaskStatus = ({checklist}) => {
  const [numberCompleted, setNumberCompleted] = useState();

  useEffect(() => {
    setNumberCompleted(completed().length);
  }, [checklist]);

  const completed = () => checklist.filter(ele => ele.completed == true);
  const finished = () => completed().length == checklist.length;

  const isFinished = finished();

  if (isFinished) {
    return (
      <Status>
        That's it!&nbsp;
        <Link href='/submit'>
          <a>Here's how to submit your work.</a>
        </Link> 
      </Status> 
    )
  }

  return <Status>Complete { numberCompleted } / { checklist.length }</Status>
}

export default TaskStatus;
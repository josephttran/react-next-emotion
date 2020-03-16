/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useState, useEffect, useRef, useMemo } from 'react';

const transitionTime = '.4';

const Status = styled.div`
  label: status;
  font-weight: 700;
  margin-top: 20px;
  transition: opacity ${transitionTime}s;
`

const TaskStatus = ({checklist}) => {
  const submitLinkRef = useRef(null);
  const completeRef = useRef(null);
  const [isFinished, setIsFinished] = useState(false);
  const [numberCompleted, setNumberCompleted] = useState();
  const completed = useMemo(() => checklist.filter(ele => ele.completed == true), [checklist]);
  const finished = useMemo(() => completed.length == checklist.length, [checklist]);

  useEffect(() => {
    setNumberCompleted(completed.length);

    if(finished) {
      transitionFadeInOut(completeRef, submitLinkRef, parseInt(transitionTime) * 1000);
      setIsFinished(true);
    } else if (isFinished && completed.length + 1 == checklist.length) {
      transitionFadeInOut(submitLinkRef, completeRef, parseInt(transitionTime) * 1000);
      setIsFinished(false);
    } else {
      submitLinkRef.current.style.display = 'none';
    }
  }, [checklist]);

  const transitionFadeInOut = (outRef, inRef, outTransitionTime) => {
    inRef.current.style.display = 'none';
    outRef.current.style.opacity = 0;

    setTimeout(() => {
      outRef.current.style.display = 'none';
      inRef.current.style.display = 'block';
      inRef.current.style.visibility = 'hidden';
      inRef.current.style.opacity = 0;
      inRef.current.style.visibility = 'visible';

      setTimeout(() => {
        inRef.current.style.opacity = 1;
      }, 400);
    }, outTransitionTime);
  }

  return (
    <>
      <Status ref={completeRef}>
        Complete {numberCompleted} / {checklist.length}
      </Status>
      <Status ref={submitLinkRef}>
        That's it!&nbsp;
        <Link href='/submit'>
          <a>Here's how to submit your work.</a>
        </Link> 
      </Status>
    </>
  )
}

export default TaskStatus;
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Intro = styled.p`
  margin-top: 10px;
`

const TaskIntro = () => {
  return (
    <>
      <Intro>
        <strong>Your objective</strong>: Convert this Codesandbox to React.
      </Intro>
      <Intro>
        The purpose of this test is to validate experience with 
        some of the tasks you'll be encountering in your first month with
        Bukwild.  Such as:
      </Intro>
    </>
  )
}

export default TaskIntro
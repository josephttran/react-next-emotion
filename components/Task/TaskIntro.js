/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import Unorphan from '../Unorphan/Unorphan';

const Intro = styled.p`
  margin-top: 10px;
`

const TaskIntro = () => {
  const firstIntro = [<strong>Your objective</strong>, ": Convert this Codesandbox to React."];
  const secondIntro = [`The purpose of this test is to validate experience with some of the tasks you'll be encountering in your first month with Bukwild. Such as:`]

  return (
    <>
      <p css={css`margin-top: 10px;`}>
        <Unorphan text={firstIntro} />
      </p>
      <Intro>
        <Unorphan text={secondIntro} />
      </Intro>
    </>
  )
}

export default TaskIntro
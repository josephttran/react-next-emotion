import { useState } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';
import { TaskIntro, TaskStatus, TaskList } from '../components/Task';

function App({data}) {
  const [checklist, setChecklist] = useState(data.map((ele, index) => { return {id: index, message: ele, completed: false}}));

  return (
    <Layout>
      <section>
        <TaskIntro />
        <TaskList checklist={checklist} setChecklist={setChecklist}></TaskList>
        <TaskStatus checklist={checklist}></TaskStatus>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const res = await axios.get('http://localhost:3000/checklist.json');
    const data = await res.data;

    return {
      props: {data: data}
    }    
  } catch(err) {
    console.log(err);
  }
}

export default App
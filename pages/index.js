import Link from 'next/link';
import axios from 'axios';

import Layout from '../components/Layout';

function App({data}) {
  console.log(data);

  return (
    <Layout>
      <Link href='/submit'><a>Here's how to submit your work.</a></Link>
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
import Link from 'next/link';

import Layout from '../components/Layout'

function App() {
  return (
    <Layout>
      <Link href='/submit'>Here's how to submit your work.</Link>
    </Layout>
  )
}

export default App
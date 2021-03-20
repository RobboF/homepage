import Head from 'next/head'
import App from './App'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robbo.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App/>
    </div>
  )
}

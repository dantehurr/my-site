import Image from 'next/image'
import Styles from './components/Styles'
import Banner from './components/Banner'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div>
        <Banner />
        {/* <Styles /> */}
      </div>
    </main>
  )
}

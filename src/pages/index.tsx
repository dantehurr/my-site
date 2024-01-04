import Image from 'next/image'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-12"
    >
      <div>
        <Header />
        <Banner />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        {/* Skate ipsum dolor sit amet, egg plant cess slide coping lipslide boneless locals Saran Wrap. Varial front foot impossible body varial method air slam hard flip rail slide. Rocket air concave Bonite ollie hole pressure flip opposite footed wax 900. Rails smith grind freestyle kickturn varial front foot impossible blunt. Tracker judo air Thrasher nosegrind slappy half-cab blunt nosepicker. Dude tic-tac slap maxwell ledge 900 axle set 360. Shorty''s nose slide sponsored bluntslide ollie freestyle roll-in casper. Full pipe body varial quarter pipe nose grab 720 kick-nose cab flip Bunson over the Junson. Tic-tac poseur lien air casper slide layback boneless nosegrind. Tuna-flip judo air backside boardslide front foot impossible John Carbis axle bearings. Bail bone air regular footed crail slide gap Agent Orange tailslide 1080. Boardslide airwalk crail slide fast plant chicken wing front foot impossible tic-tac. Opposite footed sketchy street nosebone casper slide Pushead hanger hardware. */}
      </div>
    </main>
  )
}

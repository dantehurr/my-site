import Image from "next/image";

import { FaJs, FaReact, FaCss3Alt, FaHtml5, FaFigma, FaNodeJs, FaNpm,  } from 'react-icons/fa6';

const Banner = () => {
    return (
        <section>
            <div className="container bg-slate-500 p-2 lg: w-full">
                <div className="">
                    <div className="flex justify-end">
                        <img src="/MemojiBWHalftone.png" className="mix-blend-multiply w-full"/>
                    </div>
                    <div className="">
                        <header className="section-header pb-4 text-center">Hello, World!</header>
                        <p className="para px-3">Skate ipsum dolor sit amet, egg plant cess slide coping lipslide boneless locals Saran Wrap. Varial front foot impossible body varial method air slam hard flip rail slide. Rocket air concave Bonite ollie hole pressure flip opposite footed wax 900. Rails smith grind freestyle kickturn varial front foot impossible blunt. Tracker judo air Thrasher nosegrind slappy half-cab blunt nosepicker. Dude tic-tac slap maxwell ledge 900 axle set 360. Shorty''s nose slide sponsored bluntslide ollie freestyle roll-in casper. Full pipe body varial quarter pipe nose grab 720 kick-nose cab flip Bunson over the Junson. Tic-tac poseur lien air casper slide layback boneless nosegrind. Tuna-flip judo air backside boardslide front foot impossible John Carbis axle bearings. Bail bone air regular footed crail slide gap Agent Orange tailslide 1080. Boardslide airwalk crail slide fast plant chicken wing front foot impossible tic-tac. Opposite footed sketchy street nosebone casper slide Pushead hanger hardware.</p>
                    </div>
                </div>
                <div className="mx-auto py-6">
                    <div className="flex flex-row justify-around gap-4 text-4xl">
                        <FaCss3Alt/>
                        <FaFigma/>
                        <FaHtml5/>
                        <FaJs/>
                        <FaNodeJs/>
                        <FaNpm/>
                        <FaReact/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
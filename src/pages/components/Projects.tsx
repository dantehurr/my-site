import Image from "next/image";
import {FaArrowRight, FaJs, FaReact, FaCss3Alt, FaHtml5, FaFigma, FaNodeJs, FaNpm} from 'react-icons/fa6';
import { IoLogoIonic, IoLogoCapacitor } from 'react-icons/io5';
import { SiApachecordova, SiXcode} from 'react-icons/si';

const Projects = () => {
    return (
        <section id="portfolio" className="section">
            <header className="section-header">Some of my Projects</header>

            <div className="card-container">
                <div className="bg-gray-300 card dashed-hover">
                    <a href="https://gametime-stats.firebaseapp.com/home" target="_blank">
                        <img className="card-image" src="/GametimeMobile.png" />
                        <div className="p-4">
                            <h4 className="card-header">Gametime Stats<FaArrowRight /></h4>
                            <p className="card-content">Academic project: Create a progressive web app (PWA) to be hosted on the web and deployed to a mobile device as a native app.</p>
                            <p className="card-subtitle">
                                <IoLogoCapacitor />
                                <SiApachecordova />
                                <FaJs />
                                <IoLogoIonic />
                                <FaNpm />
                                <FaReact />
                                <SiXcode />
                            </p>
                        </div>
                    </a>
                </div>

                {/* <div className="bg-blue-500 card dashed-hover">
                    <a href="#">
                        <img className="card-image" src="https://picsum.photos/400" />
                        <div className="p-4">
                            <h4 className="card-header">Header</h4>
                            <p className="card-content">Para</p>
                            <p className="card-subtitle">tools</p>
                        </div>
                    </a>
                </div>

                <div className="bg-blue-500 card dashed-hover">
                    <a href="#">
                        <img className="card-image" src="https://picsum.photos/400" />
                        <div className="p-4">
                            <h4 className="card-header">Header</h4>
                            <p className="card-content">Para</p>
                            <p className="card-subtitle">tools</p>
                        </div>
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Projects;
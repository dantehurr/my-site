import Image from "next/image";
import Link from "next/link";
import {FaArrowRight, FaJs, FaReact, FaCss3Alt, FaHtml5, FaFigma, FaNodeJs, FaNpm} from 'react-icons/fa6';
import { IoLogoIonic, IoLogoCapacitor } from 'react-icons/io5';
import { SiApachecordova, SiXcode} from 'react-icons/si';

const Projects = () => {
    return (
        <section id="portfolio" className="section">
            <header className="section-header">Some of my Projects</header>

            <div className="card-container">
                <div className="bg-gray-300 card dashed-hover">
                    <a href="/projects/gametime" target="_blank">
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

                <div className="bg-gray-300 card dashed-hover">
                    <a href="/projects/gametime" target="_blank">
                        <img className="card-image" src="/ParallaxDesktop.png" />
                        <div className="p-4">
                            <h4 className="card-header">Parallax Demo<FaArrowRight /></h4>
                            <p className="card-content">Personal project: Created a vertical parallax scroll desktop site using react-spring and media tags to modify the site colors based on user's appearance mode.</p>
                            <p className="card-subtitle">
                                <FaJs />
                                <FaNpm />
                                <FaReact />
                            </p>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;
import Image from "next/image";

import { FaJs, FaReact, FaCss3Alt, FaHtml5, FaFigma, FaNodeJs, FaNpm } from 'react-icons/fa6';
import { IoLogoIonic, IoLogoCapacitor } from 'react-icons/io5';
import { SiApachecordova, SiXcode} from 'react-icons/si';

const Banner = () => {
    return (
        <section>
            <div className="section">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-80 lg:order-last lg:h-full">
                        <img src="/dante2024.JPG" className="lg:pl-10 absolute h-auto lg:max-h-full object-cover rounded-full"/>
                    </div>
                    <div className="lg:py-20">
                        <header className="section-header">Hello, World!</header>
                        <p className="mt-4">I'm dante, a multidisciplinary creative technologist, located in the NYC Metro Area. Some of the projects I have worked on span across various skills such as, mobile web development, iOS application engineering, brand identity design, and communications design. If you'd like to inquire about a project, or even just source some information, drop a line below!</p>
                        <div className="mx-auto text-center lg:text-left">
                            <a href="#contact-form" className="button dashed-hover">contact</a>
                        </div>
                    </div>
                </div>
                <div className="flex py-10 lg:py-0">
                    <div className="flex flex-row mx-auto gap-4 lg:gap-8 lg:text-3xl text-3xl">
                        <FaCss3Alt/>
                        <FaFigma/>
                        <FaHtml5/>
                        <IoLogoIonic />
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
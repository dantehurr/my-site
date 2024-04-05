import Image from "next/image";
import { FaFilePdf } from 'react-icons/fa6';

const Resume = () => {
    return (
        <section id="resume" className="section">
            <header className="section-header">Who am I, Actually?</header>
            <div className="pt-5">
                <p className="">I am a senior at Pace University, set to recieve my BA in Computer Science in December 2024. I have a concentration in Graphic Design and Typography, which helps when designing interfaces and content presentations. At Pace, I have participated in a variety of leadership activities, and will soon deliver 'Scholar's Remarks' to the Pace Alumni community at the 2024 Presidential Scholarship Reception. Throughout my educational time at Pace, I have learned a wide range of technical skills and software tools, from Java all the way to Adobe Photoshop. I have worked interdepartmentally at Nike, since 2019, while obtaining my Bachelor. Outside of work and school, I am an amateur printer and garment constructor, I love to watch basketball, play video games on my Xbox, and make cool LEGO creations.</p>
            </div>
            <div className="pt-10 ">
                <a href="DanteHurr-JuniorEngineer.pdf" target="_blank" className="hover:underline text-bluest-blue font-medium flex flex-row items-center gap-2 text-lg">
                    <FaFilePdf />
                View my resume here
                </a>
            </div>
        </section>
    );
};

export default Resume;
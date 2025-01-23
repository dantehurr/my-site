import Image from "next/image";
import { FaFilePdf } from 'react-icons/fa6';

const Resume = () => {
    return (
        <section id="resume" className="section">
            <header className="section-header">Who am I, Actually?</header>
            <div className="pt-5">
                <p>I am a recent graduate of Pace University, where I earned a Bachelor's degree in Computer Science, with a minor concentration of Graphic Design and Typography. Graduating with Cum Laude honors. My academic journey and hands-on experience has equipped me with a robust foundation in both technical and creative disciplines which helps when designing interfaces and content presentations. </p>
                <p className="pt-5">While at Pace, I participated in a variety of leadership activities, including public speaking and mulicultural enrichment. I continuously achieved high academic standards, having earned a spot on the Dean's List nearly every semester I attended. During my Senior year, I completed a 6-month-long dual term internship as a Web Developer at world renowned law firm Willkie Farr & Gallagher LLP. During my intership, I gained experience in Front End Development and UI/UX Design.</p>
                <p className="pt-5">Currently, I am seeking employment opportunities as an Entry Level Software Engineer and a team where I will be able to build my skills as a developer by solving complex problems with innovative solutions.</p>
                <p className="pt-5">Examples of my work can be found below and on <a href="https://github.com/dantehurr" target="_blank" rel="noopener noreferrer" className="underline text-bluest-blue">my GitHub</a>.</p>
            </div>
            <div className="pt-10 ">
                <a href="DanteHurr_JuniorDeveloper.pdf" target="_blank" className="hover:underline text-bluest-blue font-medium flex flex-row items-center gap-2 text-lg">
                    <FaFilePdf />
                View my resume here
                </a>
            </div>
        </section>
    );
};

export default Resume;
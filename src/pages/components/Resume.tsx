import Image from "next/image";
import { FaFilePdf } from 'react-icons/fa6';

const Resume = () => {
    return (
        <section id="resume" className="section">
            <header className="section-header">Who am I, Actually?</header>
            <div className="pt-5">
                <p>I am graduate student at Pace University, where I also earned a Bachelor's degree in Computer Science with Cum Laude honors among other scholarly distinctions. My academic journey and hands-on experience has equipped me with a robust foundation in both technical and creative disciplines which helps when designing interfaces and content presentations. </p>
                <p className="pt-5">At Pace, I participate in a variety of leadership activities, including public speaking and mulicultural enrichment. I continuously achieved high academic standards, having earned a spot on the Dean's List nearly every semester I attended. I have completed internships in Front-end Development, Mobile/Web Development, and UI/UX Design. Currently, I am working as a Graduate Assistant, studying and working with Artificial Intelligence tools.</p>
                <p className="pt-5">I am seeking early career employment opportunities with a part-time or flexible schedule, where I will be able to build my skills while mainitaining my status as a high academic performer. At the moment, I am most interested in gaining experience in Project Management or Software Development (JavaScript/Python preferred).</p>
                <p className="pt-5">Examples of my work can be found below and on <a href="https://github.com/dantehurr" target="_blank" rel="noopener noreferrer" className="underline text-bluest-blue">my GitHub</a>.</p>
            </div>
            <div className="pt-10 ">
                <a href="DanteHurr2026.pdf" target="_blank" className="hover:underline text-bluest-blue font-medium flex flex-row items-center gap-2 text-lg">
                    <FaFilePdf />
                View my full resume here
                </a>
            </div>
        </section>
    );
};

export default Resume;

import Image from "next/image";
import { FaLinkedin, FaGithub, FaLaptopCode, FaBehance } from 'react-icons/fa6';

const Header = () => {
    return(
        <header id="header" className="flex flex-col lg:flex-row lg:top-0 items-center lg:justify-between mx-5 lg:mx-0">
            <div className='h-0 pb-12 lg:pb-0'>
                <img id='logo' className='h-8' src='logo.svg' />
            </div>
            <div className='h-4'>
                <div className='flex mx-auto gap-3 text-4xl lg:text-3xl justify-center text-bluest-blue'>
                    <a href='https://linkedin.com/in/dantehurr/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href='https://github.com/dantehurr' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    {/* <a href='https://webpage.pace.edu/dh51481n/' target="_blank" rel="noopener noreferrer"><FaLaptopCode /></a> */}
                    {/* <a href='https://www.behance.net/dantehurr' target="_blank" rel="noopener noreferrer"><FaBehance /></a> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
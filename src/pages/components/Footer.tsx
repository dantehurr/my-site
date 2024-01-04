const Footer = () => {
    return (
        <section id="footer" className="bottom-0 h-20 lg:h-24 w-full pt-14">
            <footer className="bg-bluest-blue text-white w-full grid grid-cols-2 p-3 lg:p-6 outline-dashed outline-slate-700">
                <div className="text-xl text-center items-center my-auto order-first">
                    webpage by dante
                </div>
                <div className="border-l-white border-l-2 order-last text-right pr-3 text-sm">
                    created with Next.js, TailwindCSS, + React.
                </div>
            </footer>
        </section>
    );
};

export default Footer;
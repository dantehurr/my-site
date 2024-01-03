const Projects = () => {
    return (
        <section className="section">
            <header className="section-header">My Work</header>
            <div>
                Projects
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

            <div className="card-container bg-gray-200 dashed-hover block">
                    <a href="#" className="card">
                        <div className="card-content bg-slate-500">
                            <img className="" src="https://picsum.photos/200" />
                            <div className="card-header">
                                <h4>h4</h4>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="card-container bg-gray-200 dashed-hover">
                    <a href="#" className="card">
                        <div className="card-content bg-slate-500">
                            <div className="card-header">
                                <h4>h4</h4>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="card-container bg-gray-200 dashed-hover">
                    <a href="#" className="card">
                        <div className="card-content bg-slate-500">
                            <div className="card-header">
                                <h4>h4</h4>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
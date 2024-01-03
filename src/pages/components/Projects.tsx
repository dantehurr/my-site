const Projects = () => {
    return (
        <section className="section">
            <header className="section-header">My Work</header>

            <div className="card-container">
                <div className="bg-blue-500 card dashed-hover">
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
                </div>
            </div>
        </section>
    );
};

export default Projects;
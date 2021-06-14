import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                    <div className="container">
                        <a className="navbar-brand title-icon" href="#"><span className="font-primary">B</span><span className="font-secondary">loom Brush and Roll</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-black" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h1>
                    This is where a large image will go.
                </h1>
                {/* About section */}
                <div id="about">
                    <h2><span className="font-primary">A</span>bout</h2>
                    
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                Image will go here
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Bloom Brush and Roll</h5>
                                    <p className="card-text">
                                        We offer an Exclusive Extended Warranty. To our knowledge, Bloom Brush and Roll is the only local painting company that offers a Free extended warranty. Paint manufacturers offer a standard one year warranty on their paint products if all preparation is followed as directed. We take it far beyond this- When a client follows our professional direction, using only Sherwin Williams products and preparation as described in our detailed written estimate, we offer our exclusive extended 36 month warranty, not only on the paint products, but labor as well. What does this mean? It means that if the paint fails within 36 months, starts peeling or flaking, or is otherwise compromised, we will repair it at absolutely no cost to our clients. We stand behind our work, and are willing to put it in writing.<br/><br/>
                                        We provide a detailed, written estimate to each potential client. This estimate will describe the description of the structure being painted, a detailed list of all preparation to be performed, number of coats of paint, including primers, a description of a paint products to be used, estimate of timing schedule, description of warranty, along with the total price. This is provided for potential clients to use for comparison shopping. We believe we offer a product and service that surpasses what most local painting companies are willing to do for their clients, and we put it in writing.<br/><br/>
                                        We do not except down payments for our labors. While we may ask for money toward the cost of paint (receipts provided), we will not ask clients to pay any labor costs until the job is complete and they are 100% satisfied. Once a client is confident and satisfied that Bloom Brush and Roll has fulfilled it's contract, and is happy with the final outcome, we will at that time accept final payment.<br/><br/>
                                        <ul>
                                            <li>
                                                We only use top line Sherwin Williams products
                                            </li>
                                            <li>
                                                Detailed written estimates                                
                                            </li>
                                            <li>
                                                Extended Labor warranty                                
                                            </li>
                                            <li>
                                                No down payments                                
                                            </li>
                                        </ul>                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>               
                   
                </div>           

                {/* Services section */}     
                <div id="services">
                    <h2><span className="font-primary">S</span>ervices</h2>
                    
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                Image will go here
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Services We Provide</h5>
                                    <p className="card-text">
                                        This is where the services will go.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>               
                   
                </div>                

                {/* Pricing section */}     
                <div id="pricing">
                    <h2><span className="font-primary">P</span>ricing</h2>
                    
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                Image will go here
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cost/Prices</h5>
                                    <p className="card-text">
                                        This is where the pricing info will go.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>               
                   
                </div>                

                {/* Projects section */}     
                <div id="projects">
                    <h2><span className="font-primary">P</span>rojects</h2>
                    
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                Image will go here
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Completed Projects: Before/After</h5>
                                    <p className="card-text">
                                        This will be a lot of photos and some descriptions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>               
                   
                </div>                

                {/* Contact section */}     
                <div id="contact">
                    <h2><span className="font-primary">C</span>ontact</h2>
                    
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-4">
                                Image will go here
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Contact us!</h5>
                                    <p className="card-text">
                                        Holds framework for contact information.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>               
                   
                </div>                                                
            </div>
        )
    }
}

export default Home;
import React from 'react';
import styles from './packagesSection.module.scss';

const PackagesSection = () => {
  return (
    <section className="packages_section" id="package">
            <div className="container">
                <h2 className="title_main">Packages</h2>
                <h6 className="sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                <div className="packages_wrapper">
                    <nav className="packages_tabs">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="tours-nav_tab" data-bs-toggle="tab"
                                data-bs-target="#tours-tab" type="button" role="tab" aria-controls="tours-tab"
                                aria-selected="true">Family Tours</button>
                            <button className="nav-link" id="trekking-nav-tab" data-bs-toggle="tab"
                                data-bs-target="#trekking-tab" type="button" role="tab" aria-controls="trekking-tab"
                                aria-selected="false">Trekking</button>
                            <button className="nav-link" id="cruise-nav-tab" data-bs-toggle="tab"
                                data-bs-target="#cruise-tab" type="button" role="tab" aria-controls="cruise-tab"
                                aria-selected="false">Cruise</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="tours-tab" role="tabpanel"
                            aria-labelledby="tours-nav_tab">
                            <div className="package_content">
                                <div className="row">
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="trekking-tab" role="tabpanel" aria-labelledby="trekking-nav-tab">
                            <div className="package_content">
                                <div className="row">
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="cruise-tab" role="tabpanel" aria-labelledby="cruise-nav-tab">
                            <div className="package_content">
                                <div className="row">
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-xl-2">
                                        <div className="package_item">
                                            <a href="#" className="package_link">
                                                <div className="img_wrapper">
                                                    <figure className="ratio">
                                                        <img src="./assets/logo.png" alt="package-img"/>
                                                    </figure>
                                                </div>
                                                <div className="data_wrapper">
                                                    <h5 className="data_title">Lorem ipsum</h5>
                                                    <a href="#" className="data_link">View More</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default packagesSection

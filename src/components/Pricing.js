import React from 'react'
import { Link } from 'react-router-dom'

export default function Pricing() 
{
  
    return (
        <div className="page-content">

            {/* Start home */}
            <section className="page-title-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center text-white">
                                <h3 className="mb-4">Pricing Plans</h3>
                                <div className="page-next">
                                    <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                                            <li className="breadcrumb-item"><a href="">Pricing Plans</a></li>
                                            <li className="breadcrumb-item active" aria-current="page"> Pricing Plans </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>
            {/* end home */}

            {/* START SHAPE */}
            <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="" fill-opacity="1"
                            d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
            {/* END SHAPE */}



            {/* START PRICING */}
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center">
                                        <span className="badge warning-bg-subtle  fs-15 mb-2">Choose Your Plan</span>
                                        <h3>Save up to 15%</h3>
                                        <p className="text-muted">The faster, most seamless CI & development you'll find anywhere.</p>
                                    </div>
                                </div>{/*end col*/}
                        </div>{/*end row*/}
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-5 pt-2">
                                <div className="pricing-box card bg-light">
                                    <div className="card-body p-4 px-lg-5">
                                        <div className="pricing-icon bg-light rounded-circle icons-md">
                                            <i className="uim uim-telegram-alt"></i>
                                        </div>
                                        <div className="pricing-name text-center mt-4 pt-2">
                                            <h4 className="fs-18">Starter</h4>
                                        </div>
                                        <div className="pricing-price text-center mt-4">
                                            <h2 className="fw-semibold">$35.99<small className="fs-16">/mo</small></h2>
                                        </div>
                                        <ul className="list-unstyled pricing-details text-muted mt-4">
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Unlimited file recovery</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Professional reports</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Sell on marketplaces</li>
                                            <li className="pricing-item text-decoration-line-through"><i className="mdi mdi-close-thick bg-soft-muted me-2"></i> Unlimited Builds</li>
                                            <li className="pricing-item text-decoration-line-through"><i className="mdi mdi-close-thick bg-soft-muted me-2"></i> Job displayed for 30 days</li>
                                            <li className="pricing-item text-decoration-line-through"><i className="mdi mdi-close-thick bg-soft-muted me-2"></i> Premium Support 24/7</li>
                                        </ul>
                                        <div className="text-center mt-4 mb-2">
                                            <a href="javascript:void(0)" className="btn btn-soft-primary rounded-pill">Purchase Now <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>{/*end pricing-box*/}
                            </div>{/*end col*/}
                            <div className="col-lg-4 col-md-6 mt-5 pt-2">
                                <div className="pricing-box card bg-light">
                                    <div className="card-body p-4 px-lg-5">
                                        <div className="pricing-icon bg-light rounded-circle icons-md">
                                            <i className="uim uim-rocket"></i>
                                        </div>
                                        <div className="pricing-name text-center mt-4 pt-2">
                                            <h4 className="fs-18">Professional</h4>
                                        </div>
                                        <div className="pricing-price text-center mt-4">
                                            <h2 className="fw-semibold">$49.99<small className="fs-16">/mo</small></h2>
                                        </div>
                                        <ul className="list-unstyled pricing-details text-muted mt-4">
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Unlimited file recovery</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Professional reports</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Sell on marketplaces</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Unlimited Builds</li>
                                            <li className="pricing-item text-decoration-line-through"><i className="mdi mdi-close-thick bg-soft-muted me-2"></i> Job displayed for 30 days</li>
                                            <li className="pricing-item text-decoration-line-through"><i className="mdi mdi-close-thick bg-soft-muted me-2"></i> Premium Support 24/7</li>
                                        </ul>
                                        <div className="text-center mt-4 mb-2">
                                            <a href="javascript:void(0)" className="btn btn-primary rounded-pill">Purchase Now <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>{/*end pricing-box*/}
                            </div>{/*end col*/}
                            <div className="col-lg-4 col-md-6 mt-5 pt-2">
                                <div className="pricing-box card bg-light">
                                    <div className="card-body p-4 px-lg-5">
                                        <div className="pricing-icon bg-light rounded-circle icons-md">
                                            <i className="uim uim-bag"></i>
                                        </div>
                                        <div className="pricing-name text-center mt-4 pt-2">
                                            <h4 className="fs-18">Enterprice</h4>
                                        </div>
                                        <div className="pricing-price text-center mt-4">
                                            <h2 className="fw-semibold">$59.99<small className="fs-16">/mo</small></h2>
                                        </div>
                                        <ul className="list-unstyled pricing-details text-muted mt-4">
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Unlimited file recovery</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Professional reports</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Sell on marketplaces</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Unlimited Builds</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Job displayed for 30 days</li>
                                            <li className="pricing-item"><i className="mdi mdi-check-bold success-bg-subtle me-2"></i> Premium Support 24/7</li>
                                        </ul>
                                        <div className="text-center mt-4 mb-2">
                                            <a href="javascript:void(0)" className="btn btn-soft-primary rounded-pill">Purchase Now <i className="uil uil-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>{/*end pricing-box*/}
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                </div>
                {/*end container*/}
            </section> 
            {/* END PRICING */}

        
        </div>
    

    )
}
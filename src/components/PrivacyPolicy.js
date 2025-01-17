import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() 
{
  
    return (
        <div class="page-content">

                    {/* Start home */}
                    <section class="page-title-box">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <div class="text-center text-white">
                                        <h3 class="mb-4">Privacy & Policy</h3>
                                        <div class="page-next">
                                            <nav class="d-inline-block" aria-label="breadcrumb text-center">
                                                <ol class="breadcrumb justify-content-center">
                                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                                    <li class="breadcrumb-item"><a href="">Pages</a></li>
                                                    <li class="breadcrumb-item active" aria-current="page"> Privacy & Policy </li>
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
                    <div class="position-relative" style= {{ zIndex: 1 }}>
                        <div class="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                                <path fill="" fill-opacity="1"
                                    d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* END SHAPE */}


                    {/* START PRIVACY-POLICY */}
                    <section class="section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-12">
                                    <h5 class="mb-4">Use for Nuvo Hire</h5>
                                    <ul class="about-list list-unstyled text-muted mb-4 pb-2">
                                        <li>
                                             At Nuvo Hire, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Nuvo Hire and how we use
                                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at <b class="text-danger">support@ready2jobs.com</b>
                                        </li>
                                        <li>
                                            If you have additional questions or require more information about our Privacy Policy
                                        </li>
                                        <li>
                                            This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Nuvo Hire. This policy is not applicable to any information collected offline or via channels other than this website.
                                        </li>
                                        <li>
                                            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity to our website with regards to the information that they shared and/or collect in Nuvo Hire. This policy is not applicable to any information collected offline or via channels other than this website.
                                        </li>
                                    </ul>

                                    <h5 class="mb-4">We use your information to :</h5>
                                    
                                    <ul class="about-list list-unstyled text-muted mb-4 pb-2">
                                        <li>
                                            Digital Marketing Solutions for Tomorrow
                                        </li>
                                        <li>
                                            Our Talented & Experienced Marketing Agency
                                        </li>
                                        <li>
                                            It is said that song composers of the past used texts.
                                        </li>
                                        <li>
                                            Create your own skin to match your brand
                                        </li>
                                    </ul>
                                    
                                    <h5 class="mb-4">Privacy and copyright protection</h5>

                                    <ul class="about-list list-unstyled text-muted mb-4 pb-2">
                                        <li>
                                            There is now an <b class="text-danger">abundance</b> of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.
                                        </li>
                                        <li>
                                            It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.
                                        </li>
                                    </ul>

                                    <div class="text-end">
                                        <a href="" class="btn btn-primary"><i class="uil uil-print"></i> Print</a>
                                    </div>

                                </div>{/*end col*/}
                            </div>{/*end row*/}
                        </div>{/*end container*/}
                    </section>
                    {/* END PRIVACY-POLICY */}

                </div>
    )
}
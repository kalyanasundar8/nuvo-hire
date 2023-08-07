import React from 'react'

export default function Footer() {
  return (
        <div className='FooterScreen'>
          
          
                <section className="bg-subscribe">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6">
                                <div className="text-center text-lg-start">
                                    <h4 className="text-white">Get New Jobs Notification!</h4>
                                    <p className="text-white-50 mb-0">Subscribe & get all related jobs notification.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mt-4 mt-lg-0">
                                    <form className="subscribe-form" action="#">
                                        <div className="input-group justify-content-center justify-content-lg-end">
                                            <input type="text" className="form-control" id="subscribe" placeholder="Enter your email"/>
                                            <button className="btn btn-primary" type="button" id="subscribebtn">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                   
                    <div className="email-img d-none d-lg-block">
                        <img src="assets/images/subscribe.png" alt="" className="img-fluid"/>
                    </div>
                </section>
                
                <section className="bg-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                                    <h4 className="text-white mb-4">Nuvo Hire</h4>
                                    <p className="text-white-50">Nuvo Hire is the one-destination platform, rendering the most promising solutions to the needs of both recruiters and candidates.</p>
                                    <p className="text-white mt-3">Follow Us on:</p>
                                    <ul className="footer-social-menu list-inline mb-0">
                                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/ready2jobs-manpower-suppliers-pvt-ltd/"><i className="uil uil-linkedin"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.facebook.com/OfficialR2J"><i className="uil uil-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/ready2jobs_official/"><i className="uil uil-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCgkBlMK3ePbzl7LZlMrwU1Q"><i className="uil uil-youtube"></i></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/ready2jobs_offi"><i className="uil uil-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="footer-item mt-4 mt-lg-0">
                                    <p className="fs-16 text-white mb-4">Company</p>
                                    <ul className="list-unstyled footer-list mb-0">
                                        <li><a href="about.php"><i className="mdi mdi-chevron-right"></i> About Us</a></li>
                                        <li><a href="contact.php"><i className="mdi mdi-chevron-right"></i> Contact Us</a></li>
                                        <li><a href="services.php"><i className="mdi mdi-chevron-right"></i> Services</a></li>
                                        <li><a href="blog.php"><i className="mdi mdi-chevron-right"></i> Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="footer-item mt-4 mt-lg-0">
                                    <p className="fs-16 text-white mb-4">For Jobs</p>
                                    <ul className="list-unstyled footer-list mb-0">
                                        <li><a href="job-categories.php"><i className="mdi mdi-chevron-right"></i> Browser Categories</a></li>
                                        <li><a href="jobs.php"><i className="mdi mdi-chevron-right"></i> Browser Jobs</a></li>
                                        <li><a href="job-details.php"><i className="mdi mdi-chevron-right"></i> Job Details</a></li>
                                        <li><a href="bookmark-jobs.php"><i className="mdi mdi-chevron-right"></i> Bookmark Jobs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="footer-item mt-4 mt-lg-0">
                                    <p className="text-white fs-16 mb-4">For Candidates</p>
                                    <ul className="list-unstyled footer-list mb-0">
                                        <li><a href="candidate-list.php"><i className="mdi mdi-chevron-right"></i> Candidate List</a></li>
                                        <li><a href="candidate-grid.php"><i className="mdi mdi-chevron-right"></i> Candidate Grid</a></li>
                                        <li><a href="candidate-details.php"><i className="mdi mdi-chevron-right"></i> Candidate Details</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="footer-item mt-4 mt-lg-0">
                                    <p className="fs-16 text-white mb-4">Support</p>
                                    <ul className="list-unstyled footer-list mb-0">
                                        <li><a href="contact.php"><i className="mdi mdi-chevron-right"></i> Help Center</a></li>
                                        <li><a href="faqs.php"><i className="mdi mdi-chevron-right"></i> FAQ'S</a></li>
                                        <li><a href="privacy-policy.php"><i className="mdi mdi-chevron-right"></i> Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
                <div className="footer-alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="text-white-50 text-center mb-0">
                                    <script>document.write(new Date().getFullYear())</script> &copy; Nuvo Hire. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="style-switcher" onclick="toggleSwitcher()" style="left: -165px;">
                    <div>
                        <h6>Select your color</h6>
                        <ul className="pattern list-unstyled mb-0">
                            <li>
                                <a className="color-list color1" href="javascript: void(0);" onclick="setColorGreen()"></a>
                            </li>
                            <li>
                                <a className="color-list color2" href="javascript: void(0);" onclick="setColor('blue')"></a>
                            </li>
                            <li>
                                <a className="color-list color3" href="javascript: void(0);" onclick="setColor('green')"></a>
                            </li>
                        </ul>
                        <div className="mt-3">
                            <h6>Light/dark Layout</h6>
                            <div className="text-center mt-3">
                               
                                <a href="javascript: void(0);" id="mode" className="mode-btn text-white rounded-3">
                                    <i className="uil uil-brightness mode-dark mx-auto"></i>
                                    <i className="uil uil-moon mode-light"></i>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="bottom d-none d-md-block" >
                        <a href="javascript: void(0);" className="settings rounded-end"><i className="mdi mdi-cog mdi-spin"></i></a>
                    </div>
                </div>
                
                <button onclick="topFunction()" id="back-to-top">
                    <i className="mdi mdi-arrow-up"></i>
                </button>
                
    

        </div>
  )
}

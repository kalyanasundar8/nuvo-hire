import React from 'react'
import { Link } from 'react-router-dom';
//import '../../assets/js/app'
//import '../../assets/js/pages/switcher.init.js'
//import '../../assets/js/pages/index.init.js'
export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
            <div>	
                <section class="bg-subscribe">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-lg-6">
                                <div class="text-center text-lg-start">
                                    <h4 class="text-white">Get New Jobs Notification!</h4>
                                    <p class="text-white-50 mb-0">Subscribe & get all related jobs notification.</p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mt-4 mt-lg-0">
                                    <form class="subscribe-form" action="#">
                                        <div class="input-group justify-content-center justify-content-lg-end">
                                            <input type="text" class="form-control" id="subscribe" placeholder="Enter your email"/>
                                            <button class="btn btn-primary" type="button" id="subscribebtn">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div class="email-img d-none d-lg-block">
                        <img src="../../assets/images/subscribe.png" alt="" class="img-fluid"/>
                    </div>
                </section>
               
                <section class="bg-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="footer-item mt-4 mt-lg-0 me-lg-5">
                                    <h4 class="text-white mb-4"></h4>
                                    <p class="text-white-50">Job portal is the one-destination platform, rendering the most promising solutions to the needs of both recruiters and candidates.</p>
                                    <p class="text-white mt-3">Follow Us on:</p>
                                    <ul class="footer-social-menu list-inline mb-0">
                                        <li class="list-inline-item"><Link to="https://www.linkedin.com/company/ready2jobs-manpower-suppliers-pvt-ltd/"><i class="uil uil-linkedin"></i></Link></li>
                                        <li class="list-inline-item"><Link to="https://www.facebook.com/OfficialR2J"><i class="uil uil-facebook-f"></i></Link></li>
                                        <li class="list-inline-item"><Link to="https://www.instagram.com/ready2jobs_official/"><i class="uil uil-instagram"></i></Link></li>
                                        <li class="list-inline-item"><Link to="https://www.youtube.com/channel/UCgkBlMK3ePbzl7LZlMrwU1Q"><i class="uil uil-youtube"></i></Link></li>
                                        <li class="list-inline-item"><Link to="https://twitter.com/ready2jobs_offi"><i class="uil uil-twitter"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-6">
                                <div class="footer-item mt-4 mt-lg-0">
                                    <p class="fs-16 text-white mb-4">Company</p>
                                    <ul class="list-unstyled footer-list mb-0">
                                        <li><Link to="/about-us"><i class="mdi mdi-chevron-right"></i> About Us</Link></li>
                                        <li><Link to="/contact-us"><i class="mdi mdi-chevron-right"></i> Contact Us</Link></li>
                                        <li><Link to="/services"><i class="mdi mdi-chevron-right"></i> Services</Link></li>
                                        <li><Link to="/blog"><i class="mdi mdi-chevron-right"></i> Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-6">
                                <div class="footer-item mt-4 mt-lg-0">
                                    <p class="fs-16 text-white mb-4">For Jobs</p>
                                    <ul class="list-unstyled footer-list mb-0">
                                        <li><Link to="/job-categories"><i class="mdi mdi-chevron-right"></i> Browser Categories</Link></li>
                                        <li><Link to="/jobs"><i class="mdi mdi-chevron-right"></i> Browser Jobs</Link></li>
                                        <li><Link to="/job-detail"><i class="mdi mdi-chevron-right"></i> Job Details</Link></li>
                                        <li><Link to="/bookmark-jobs"><i class="mdi mdi-chevron-right"></i> Bookmark Jobs</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-6">
                                <div class="footer-item mt-4 mt-lg-0">
                                    <p class="text-white fs-16 mb-4">For Candidates</p>
                                    <ul class="list-unstyled footer-list mb-0">
                                        <li><Link to="/candidates"><i class="mdi mdi-chevron-right"></i> Candidate List</Link></li>
                                        <li><Link to="/candidate-grid"><i class="mdi mdi-chevron-right"></i> Candidate Grid</Link></li>
                                        <li><Link to="/candidate-detail"><i class="mdi mdi-chevron-right"></i> Candidate Details</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-6">
                                <div class="footer-item mt-4 mt-lg-0">
                                    <p class="fs-16 text-white mb-4">Support</p>
                                    <ul class="list-unstyled footer-list mb-0">
                                        <li><Link to="/contact-us"><i class="mdi mdi-chevron-right"></i> Help Center</Link></li>
                                        <li><Link to="/faqs"><i class="mdi mdi-chevron-right"></i> FAQ'S</Link></li>
                                        <li><Link to="/privacy-policy"><i class="mdi mdi-chevron-right"></i> Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div class="footer-alt">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <p class="text-white-50 text-center mb-0">
                                    {currentYear} &copy; All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
              
                <div id="style-switcher"   onClick="toggleSwitcher()" style={{ left: '-165px' }}>
                    <div>
                        <h6>Select your color</h6>
                        <ul class="pattern list-unstyled mb-0">
                            <li>
                                <Link class="color-list color1" to="javascript: void(0);" onClick="setColorGreen()"></Link>
                            </li>
                            <li>
                                <Link class="color-list color2" to="javascript: void(0);" onclick="setColor('blue')"></Link>
                            </li>
                            <li>
                                <Link class="color-list color3" to="javascript: void(0);" onClick="setColor('green')"></Link>
                            </li>
                        </ul>
                        <div class="mt-3">
                            <h6>Light/dark Layout</h6>
                            <div class="text-center mt-3">
                             
                                <Link to="javascript: void(0);" id="mode" class="mode-btn text-white rounded-3">
                                    <i class="uil uil-brightness mode-dark mx-auto"></i>
                                    <i class="uil uil-moon mode-light"></i>
                                </Link>
                              
                            </div>
                        </div>
                    </div>
                    {/* <div class="bottom d-none d-md-block" >
                        <Link to="javascript: void(0);" class="settings rounded-end"><i class="mdi mdi-cog mdi-spin"></i></Link>
                    </div> */}
                </div>
               
               
                
                
            </div>
            {/* <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="https://unicons.iconscout.com/release/v4.0.0/script/monochrome/bundle.js"></script>


      
        <script src="assets/libs/choices.js/public/assets/scripts/choices.min.js"></script>
        
		
		<script src="assets/libs/nouislider/nouislider.min.js"></script>
		<script src="assets/js/pages/area-filter-range.init.js"></script>

		
		<script src="assets/js/pages/checkbox.init.js"></script>

		
		<script src="assets/js/pages/job-list.init.js"></script>
        
        <script src="assets/libs/swiper/swiper-bundle.min.js"></script>

        
        <script src="assets/js/pages/job-list.init.js"></script>
        <script src="assets/js/pages/index.init.js"></script>

        
        <script src="../../assets/js/pages/switcher.init.js"></script>
        
        
        <script src="assets/js/app.js"></script> */}

        </div>
  )
}

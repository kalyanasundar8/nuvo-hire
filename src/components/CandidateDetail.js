import React from 'react'
import { Link } from 'react-router-dom'

export default function CandidateDetail() 
{
  
    return (
        <div class="page-content">

                    {/* Start home */}
                    <section class="page-title-box">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <div class="text-center text-white">
                                        <h3 class="mb-4">Candidate Details</h3>
                                        <div class="page-next">
                                            <nav class="d-inline-block" aria-label="breadcrumb text-center">
                                                <ol class="breadcrumb justify-content-center">
                                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                                    <li class="breadcrumb-item"><a href="">Pages</a></li>
                                                    <li class="breadcrumb-item active" aria-current="page"> Candidate Details </li>
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
                    <div class="position-relative" style={{ zIndex: 1 }}>
                        <div class="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                                <path fill="" fill-opacity="1"
                                    d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* END SHAPE */}


                    {/* START CANDIDATE-DETAILS */}
                    <section class="section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card side-bar">
                                        <div class="card-body p-4">
                                            <div class="candidate-profile text-center">
                                                <img src="assets/images/user/img-01.jpg" alt="" class="avatar-lg rounded-circle" />
                                                <h6 class="fs-18 mb-0 mt-4">Gabriel Palmer</h6>
                                                <p class="text-muted mb-4">Creative Designer</p>
                                                <ul class="candidate-detail-social-menu list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <a href="" class="social-link"><i class="uil uil-twitter-alt"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="" class="social-link"><i class="uil uil-whatsapp"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="" class="social-link"><i class="uil uil-phone-alt"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>{/*end candidate-profile*/}

                                        <div class="candidate-profile-overview  card-body border-top p-4">
                                            <h6 class="fs-17 fw-semibold mb-3">Profile Overview</h6>
                                            <ul class="list-unstyled mb-0">
                                                <li>
                                                    <div class="d-flex">
                                                        <label class="text-dark">Categories</label>
                                                        <div>
                                                            <p class="text-muted mb-0">Accounting / Finance</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex">
                                                        <label class="text-dark">Offered Salary</label>
                                                        <div>
                                                            <p class="text-muted mb-0">$450 per hour</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex">
                                                        <label class="text-dark">Languages</label>
                                                        <div>
                                                            <p class="text-muted mb-0">English, Turkish, Japanese</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex">
                                                        <label class="text-dark">Experience</label>
                                                        <div>
                                                            <p class="text-muted mb-0">3 Years</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex">
                                                        <label class="text-dark">Qualification</label>
                                                        <div>
                                                            <p class="text-muted mb-0">Associate Degree</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex">
                                                        <label class="text-dark">Views</label>
                                                        <div>
                                                            <p class="text-muted mb-0">2574</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="mt-3">
                                                <a href="" class="btn btn-danger btn-hover w-100"><i class="uil uil-phone"></i> Contact Me</a>
                                                <a href="" class="btn btn-primary btn-hover w-100 mt-2"><i class="uil uil-import"></i> Download CV</a>
                                            </div>
                                            <ul class="list-inline d-flex justify-content-between align-items-center mb-0 mt-2">
                                                <li class="list-inline-item text-warning review-rating">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>  
                                                    <i class="mdi mdi-star-half-full"></i>
                                                </li>
                                                <li class="list-inline-item">
                                                    <div class="favorite-icon">
                                                        <a href=""><i class="uil uil-heart-alt fs-18"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>{/*candidate-profile-overview*/}
                                        <div class="card-body p-4 border-top">
                                            <h6 class="fs-17 fw-semibold mb-3">Professional Skills</h6>
                                            <div>
                                                <span class="badge bg-success-subtle text-success fs-13 mt-1">User Interface Design</span>
                                                <span class="badge bg-success-subtle text-success fs-13 mt-1">Web Design</span>
                                                <span class="badge bg-success-subtle text-success fs-13 mt-1">Responsive Design</span>
                                                <span class="badge bg-success-subtle text-success fs-13 mt-1">Mobile App Design</span>
                                                <span class="badge bg-success-subtle text-success fs-13 mt-1">UI Design</span>
                                            </div>
                                        </div>{/*end card-body*/}
                                        <div class="candidate-contact-details card-body p-4 border-top">
                                            <h6 class="fs-17 fw-semibold mb-3">Contact Details</h6>
                                            <ul class="list-unstyled mb-0">
                                                <li>
                                                    <div class="d-flex align-items-center mt-4">
                                                        <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                                                            <i class="uil uil-envelope-alt"></i>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h6 class="fs-14 mb-1">Email</h6>
                                                            <p class="text-muted mb-0">gabrielpalmer@gmail.com</p> 
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex align-items-center mt-4">
                                                        <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                                                            <i class="uil uil-map-marker"></i>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h6 class="fs-14 mb-1">Address</h6>
                                                            <p class="text-muted mb-0">Dodge City, Louisiana</p> 
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex align-items-center mt-4">
                                                        <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                                                            <i class="uil uil-phone"></i>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h6 class="fs-14 mb-1">Phone</h6>
                                                            <p class="text-muted mb-0">+1(452) 125-6789</p> 
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="d-flex align-items-center mt-4">
                                                        <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                                                            <i class="uil uil-skype-alt"></i>
                                                        </div>
                                                        <div class="ms-3">
                                                            <h6 class="fs-14 mb-1">Skype</h6>
                                                            <p class="text-muted mb-0">@gabrielpalmer</p> 
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>{/*end candidate-overview*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                                
                                <div class="col-lg-8">
                                    <div class="card candidate-details ms-lg-4 mt-4 mt-lg-0">
                                        <div class="card-body p-4 candidate-personal-detail">
                                            <div>
                                                <h6 class="fs-17 fw-semibold mb-3">About Me</h6>
                                                <p class="text-muted mb-2">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                                                    shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                                                <p class="text-muted mb-0">As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.</p>
                                            </div>
                                            <div class="candidate-education-details mt-4 pt-3">
                                                <h6 class="fs-17 fw-bold mb-0">Education</h6>
                                                <div class="candidate-education-content mt-4 d-flex">
                                                    <div class="circle flex-shrink-0 bg-primary-subtle text-primary"> B </div>
                                                    <div class="ms-4">
                                                        <h6 class="fs-16 mb-1">BCA - Bachelor of Computer Applications</h6>
                                                        <p class="mb-2 text-muted">International University - (2004 - 2010)</p>
                                                        <p class="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                                    </div>
                                                </div>
                                                <div class="candidate-education-content mt-4 d-flex">
                                                    <div class="circle flex-shrink-0 bg-primary-subtle text-primary"> M </div>
                                                    <div class="ms-4">
                                                        <h6 class="fs-16 mb-1">MCA - Master of Computer Application</h6>
                                                        <p class="mb-2 text-muted">International University - (2010 - 2012)</p>
                                                        <p class="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                                    </div>
                                                </div> 
                                                <div class="candidate-education-content mt-4 d-flex">
                                                    <div class="circle flex-shrink-0 bg-primary-subtle text-primary"> D </div>
                                                    <div class="ms-4">
                                                        <h6 class="fs-16 mb-1">Design Communication Visual</h6>
                                                        <p class="text-muted mb-2">International University - (2012-2015)</p>
                                                        <p class="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                                    </div>
                                                </div>
                                            </div>{/*end candidate-education-details*/}
                                            <div class="candidate-education-details mt-4 pt-3">
                                                <h6 class="fs-17 fw-bold mb-0">Experience</h6>
                                                <div class="candidate-education-content mt-4 d-flex">
                                                    <div class="circle flex-shrink-0 bg-primary-subtle text-primary"> W </div>
                                                    <div class="ms-4">
                                                        <h6 class="fs-16 mb-1">Web Design & Development Team Leader</h6>
                                                        <p class="mb-2 text-muted">Creative Agency - (2013 - 2016)</p>
                                                        <p class="text-muted">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                                    </div>
                                                </div>
                                                <div class="candidate-education-content mt-4 d-flex">
                                                    <div class="circle flex-shrink-0 bg-primary-subtle text-primary"> P </div>
                                                    <div class="ms-4">
                                                        <h6 class="fs-16 mb-1">Project Manager</h6>
                                                        <p class="mb-2 text-muted">Nuvo Hire Technology Pvt.Ltd - (Pressent)</p>
                                                        <p class="text-muted mb-0">There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="candidate-portfolio mt-4 pt-3">
                                                <h6 class="fs-17 fw-bold mb-0">Projects</h6>
                                                <div class="row">
                                                    <div class="col-lg-4 mt-4">
                                                        <div class="candidate-portfolio-box card border-0">
                                                            <img src="assets/images/blog/img-01.jpg" alt="" class="img-fluid" />
                                                            <div class="bg-overlay"></div>
                                                            <div class="zoom-icon">
                                                                <a href="assets/images/blog/img-01.jpg" class="image-popup text-white" data-title="The Coding Awards" data-description="There are many variations of passages of available, but the majority alteration in some form."><i class="uil uil-search-alt"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 mt-4">
                                                        <div class="candidate-portfolio-box card border-0">
                                                            <img src="assets/images/blog/img-02.jpg" alt="" class="img-fluid" />
                                                            <div class="bg-overlay"></div>
                                                            <div class="zoom-icon">
                                                                <a href="assets/images/blog/img-02.jpg" class="image-popup text-white" data-title="Project Explained" data-description="There are many variations of passages of available, but the majority alteration in some form."><i class="uil uil-search-alt"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 mt-4">
                                                        <div class="candidate-portfolio-box card border-0">
                                                            <img src="assets/images/blog/img-03.jpg" alt="" class="img-fluid" />
                                                            <div class="bg-overlay"></div>
                                                            <div class="zoom-icon">
                                                                <a href="assets/images/blog/img-03.jpg" class="image-popup text-white" data-title="Social Geek Made" data-description="There are many variations of passages of available, but the majority alteration in some form."><i class="uil uil-search-alt"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/*end candidate-portfolio*/}
                                            <div class="mt-4 pt-3">
                                                <div class="d-sm-flex align-items-top">
                                                    <div class="flex-shrink-0">
                                                        <img class="rounded-circle avatar-md img-thumbnail" src="assets/images/user/img-04.jpg" alt="img" />
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-3">
                                                        <div>
                                                            <p class="text-muted float-end fs-14 mb-2">Jun 23, 2023</p>
                                                            <h6 class="mt-sm-0 mt-3 mb-1">Michelle Durant</h6>
                                                            <div class="text-warning review-rating mb-2">
                                                                <i class="mdi mdi-star"></i>
                                                                <i class="mdi mdi-star"></i>
                                                                <i class="mdi mdi-star"></i>
                                                                <i class="mdi mdi-star"></i>  
                                                                <i class="mdi mdi-star-half-full"></i>
                                                            </div>
                                                            <p class="text-muted fst-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-sm-flex align-items-top mt-4">
                                                    <div class="flex-shrink-0">
                                                        <img class="rounded-circle avatar-md img-thumbnail" src="assets/images/user/img-02.jpg" alt="img" />
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-3">
                                                        <div>
                                                            <p class="text-muted float-end fs-14 mb-2">Jun 25, 2023</p>
                                                            <h6 class="mt-sm-0 mt-3 mb-1">Jeffrey Montgomery</h6>
                                                            <div class="text-warning review-rating mb-2">
                                                                <i class="mdi mdi-star"></i>
                                                                <i class="mdi mdi-star"></i>
                                                                <i class="mdi mdi-star"></i>
                                                                <i class="mdi mdi-star-half-full"></i>
                                                                <i class="mdi mdi-star-outline"></i>
                                                            </div>
                                                            <p class="text-muted fst-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form action="#" class="mt-4 pt-3">
                                                <h6 class="fs-17 fw-semibold mb-2">Add a review</h6>
                                                <p class="text-muted mb-3">Your Rating for this listing</p>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label for="inputname" class="form-label">Your Name</label>
                                                            <input type="text" class="form-control" id="inputname" placeholder="Enter your name" />
                                                        </div>
                                                    </div>{/*end col*/}
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="inputemail" class="form-label">Email</label>
                                                            <input type="email" class="form-control" id="inputemail" placeholder="Enter your email" />
                                                        </div>
                                                    </div>{/*end col*/}
                                                    <div class="col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="inputsubject" class="form-label">Subject</label>
                                                            <input type="text" class="form-control" id="inputsubject" placeholder="Subject" />
                                                        </div>
                                                    </div>{/*end col*/}
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label for="inputcoment" class="form-label">Review</label>
                                                            <textarea class="form-control" id="inputcoment" rows="3" placeholder="Add your review"></textarea>
                                                        </div>
                                                    </div>{/*end col*/}
                                                </div>{/*end row*/}
                                                <div class="text-end">
                                                    <button type="submit" class="btn btn-primary btn-hover">Submit Review <i class="uil uil-angle-right-b"></i></button>
                                                </div>
                                            </form> 
                                        </div>{/*end card-body*/}
                                    </div>{/*end card*/}
                                </div>{/*end col*/}
                            </div>{/*end row*/}
                        </div>{/*end container*/}
                    </section>
                    {/* END CANDIDATE-DETAILS */}

                </div>
    )
}
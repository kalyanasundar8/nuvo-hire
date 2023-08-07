import React from 'react'
import { Link } from 'react-router-dom'

export default function JobPost() 
{
  
    return (
        <div class="page-content">

                   
                    <section class="page-title-box">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <div class="text-center text-white">
                                        <h3 class="mb-4">Manage Job Post</h3>
                                        <div class="page-next">
                                            <nav class="d-inline-block" aria-label="breadcrumb text-center">
                                                <ol class="breadcrumb justify-content-center">
                                                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                                                    <li class="breadcrumb-item"><a href="">Manage Jobs</a></li>
                                                    <li class="breadcrumb-item active" aria-current="page"> Manage Job Post </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                           
                        </div>
                        
                    </section>
                   

                    
                    <div class="position-relative" style={{ zIndex: 1 }}>
                        <div class="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                                <path fill="" fill-opacity="1"
                                    d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                  


                        
                        <section class="section">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="primary-bg-subtle p-3">
                                                <h5 class="mb-0 fs-17">Post a New Job!</h5>
                                        </div>
                                    </div>
                                </div>
                                <form action="#" class="job-post-form shadow mt-4">                
                                    <div class="job-post-content box-shadow-md rounded-3 p-4"> 
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-4">
                                                    <label for="jobtitle" class="form-label">Job Title</label>
                                                    <input type="text" class="form-control" id="jobtitle" placeholder="Title"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="mb-4">
                                                    <label for="jobdescription" class="form-label">Job Description</label>
                                                    <textarea class="form-control" id="jobdescription" rows="3" placeholder="Enter Job Description"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="email" class="form-label">Email Address</label>
                                                    <input type="email" class="form-control" id="email" placeholder="Email Address"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="phoneNumber" class="form-label">Phone Number</label>
                                                    <input type="number" class="form-control" id="phoneNumber" placeholder="Phone Number"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="choices-single-categories" class="form-label">Categories</label>
                                                    <select class="form-select" data-trigger="" name="choices-single-categories" id="choices-single-categories" aria-label="Default select example">
                                                        <option value="ne">Digital & Creative</option>
                                                        <option value="df">Retail</option>
                                                        <option value="od">Management</option>
                                                        <option value="rd">Human Resources</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="jobtype" class="form-label">Job Type</label>
                                                    <input type="text" class="form-control" id="jobtype" placeholder="Job type"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="designation" class="form-label">Designation</label>
                                                    <input type="text" class="form-control" id="designation" placeholder="Designation"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="salary" class="form-label">Salary($)</label>
                                                    <input type="number" class="form-control" id="salary" placeholder="Salary"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="qualification" class="form-label">Qualification</label>
                                                    <input type="text" class="form-control" id="qualification" placeholder="Qualification"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="skills" class="form-label">Job Skills </label>
                                                    <input type="text" class="form-control" id="skills" placeholder="Job skills"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="mb-4">
                                                    <label for="lastdate" class="form-label">Application Deadline Date</label>
                                                    <input type="date" class="form-control" id="lastdate"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="mb-4">
                                                    <label for="choices-single-location" class="form-label">Country</label>
                                                    <select class="form-select" data-trigger name="choices-single-location" id="choices-single-location" aria-label="Default select example">
                                                        <option value="ME">Montenegro</option>
                                                        <option value="MS">Montserrat</option>
                                                        <option value="MA">Morocco</option>
                                                        <option value="MZ">Mozambique</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="mb-4">
                                                    <label for="city" class="form-label">City</label>
                                                    <input type="text" class="form-control" id="city" placeholder="City"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="mb-4">
                                                    <label for="zipcode" class="form-label">Zipcode</label>
                                                    <input type="text" class="form-control" id="zipcode" placeholder="Zipcode"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="text-end">
                                                    <a href="" class="btn btn-success">Back</a>
                                                    <a href="" class="btn btn-primary">Post Now <i class="mdi mdi-send"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                        

                </div>
    )
}
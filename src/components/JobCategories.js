import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function JobCategories() {
  // Create a state for job-categories

  const { id } = useParams();

  const jobCategoryData = useFetch(`sub-categories?category_id=${id}`);

  const jobCategory = jobCategoryData.data;

  return (
    <div class='page-content'>
      <section class='page-title-box'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <div class='text-center text-white'>
                <h3 class='mb-4'>Jobs Categories</h3>
                <div class='page-next'>
                  <nav
                    class='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol class='breadcrumb justify-content-center'>
                      <li class='breadcrumb-item'>
                        <Link to='/index.php'>Home</Link>
                      </li>
                      <li class='breadcrumb-item'>
                        <Link to='/javascript:void(0)'>Company</Link>
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        {" "}
                        Jobs Categories{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class='position-relative' style={{ zIndex: 1 }}>
        <div class='shape'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 250'>
            <path
              fill=''
              fill-opacity='1'
              d='M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>

      <section class='section'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-lg-6'>
              <div class='text-center mb-5'>
                <p class='badge bg-warning fs-14 mb-2'>Jobs Live Today</p>
                <h4>Browse Job By Categories</h4>
                <p class='text-muted'>
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </div>
          </div>
          <div class='row'>
            {Array.isArray(jobCategory)
              ? jobCategory.map((jobCat) => (
                  <div key={jobCat.id} class='col-lg-4'>
                    <div class='card job-Categories-box bg-light border-0'>
                      <div class='card-body p-4'>
                        <ul class='list-unstyled job-Categories-list mb-0'>
                          <li>
                            <Link to='/jobs' class='primary-link'>
                              {jobCat.name}{" "}
                              <span class='badge bg-info-subtle text-info float-end'>
                                {jobCat.jobs_count}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              : null}
            {/* <div class='col-lg-4'>
              <div class='card job-Categories-box bg-light border-0'>
                <div class='card-body p-4'>
                  <ul class='list-unstyled job-Categories-list mb-0'>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Accounting & Finance{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          25
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Bank Jobs{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          10
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Data Entry Job{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          71
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Purchasing Manager{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          40
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Project Manager{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          86
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Education & training{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          47
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Marketing & Advertising{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          47
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Catering & Tourism{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          47
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div class='col-lg-4'>
              <div class='card job-Categories-box bg-light border-0'>
                <div class='card-body p-4'>
                  <ul class='list-unstyled job-Categories-list mb-0'>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Government Jobs{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          120
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Defence Jobs{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          73
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Teaching Jobs{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          88
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Retail & Customer Services{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          10
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Diploma Jobs{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          55
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Health Care Jobs{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          99
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Manufacturing & production{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          27
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Performing arts & media{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          11
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='card job-Categories-box bg-light border-0'>
                <div class='card-body p-4'>
                  <ul class='list-unstyled job-Categories-list mb-0'>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        It / Software Jobs{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          175
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Logistics / Transportation{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          60
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Sports Jobs{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          42
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Forest Worker{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          30
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Animal Care Worker{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          120
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Digital Marketing{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          88
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Administrative Officer{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          04
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/jobs' class='primary-link'>
                        Garage services{" "}
                        <span class='badge bg-info-subtle text-info float-end'>
                          75
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='section'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='section-title text-center'>
              <h3 class='title mb-4 pb-2'>
                See everything about your employee at one place.
              </h3>
              <p class='para-desc text-muted mx-auto'>
                Start working with Nuvo Hire that can provide everything you
                need to generate awareness, drive traffic, connect.
              </p>
              <div class='mt-4'>
                <Link
                  to='/javascript:void(0)'
                  class='btn btn-primary btn-hover mt-2'
                >
                  <i class='uil uil-rocket'></i> Get Started Now
                </Link>
                <Link
                  to='/javascript:void(0)'
                  class='btn btn-outline-primary btn-hover ms-sm-1 mt-2'
                >
                  <i class='uil uil-capsule'></i> Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

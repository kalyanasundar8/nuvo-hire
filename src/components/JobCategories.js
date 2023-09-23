import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {
  fetchAllSubCategories,
  fetchSingleSubCategories,
} from "../services/JobService";

export default function JobCategories() {
  // Create a state for job-categories

  const { id } = useParams();

  const [jobCategory, setJobCategory] = useState("");

  useEffect(() => {
    const fetchingSubCategories = async () => {
      if (id === "all") {
        await fetchAllSubCategories().then((data) => {
          console.log(data);
          setJobCategory(data);
        });
      } else {
        await fetchSingleSubCategories(id).then((data) => {
          console.log(data);
          setJobCategory(data);
        });
      }
    };

    fetchingSubCategories();
  }, [id]);

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
            <div class='col-lg-4'>
              <div class='card job-Categories-box bg-light border-0'>
                <div class='card-body p-4'>
                  {Array.isArray(jobCategory) &&
                    jobCategory.slice(0, 8).map((allCat) => (
                      <ul
                        key={allCat.id}
                        class='list-unstyled job-Categories-list mb-3'
                      >
                        <li>
                          <Link
                            to={`/jobs?subcategory_id=${allCat.id}`}
                            style={
                              allCat.jobs_count === 0
                                ? {
                                    pointerEvents: "none",
                                    color: "#007bff",
                                    textDecoration: "none",
                                  }
                                : { color: "inherit" }
                            }
                            class='primary-link'
                          >
                            {allCat.name}{" "}
                            <span class='badge bg-info-subtle text-info float-end'>
                              {allCat.jobs_count}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
            </div>

            <div class='col-lg-4'>
              <div class='card job-Categories-box bg-light border-0'>
                <div class='card-body p-4'>
                  {Array.isArray(jobCategory) && jobCategory.length > 8 && (
                    <ul class='list-unstyled job-Categories-list mb-0'>
                      {jobCategory.slice(8).map((allCat) => (
                        <li key={allCat.id}>
                          <Link
                            to={`/jobs?subcategory_id=${allCat.id}`}
                            class='primary-link'
                          >
                            {allCat.name}{" "}
                            <span class='badge bg-info-subtle text-info float-end'>
                              {allCat.jobs_count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div class='col-lg-4'>
              <div class='card job-Categories-box bg-light border-0'>
                <div class='card-body p-4'>
                  {Array.isArray(jobCategory) && jobCategory.length > 16 && (
                    <ul class='list-unstyled job-Categories-list mb-0'>
                      {jobCategory.slice(8).map((allCat) => (
                        <li key={allCat.id}>
                          <Link
                            to={`/jobs?subcategory_id=${allCat.id}`}
                            class='primary-link'
                          >
                            {allCat.name}{" "}
                            <span class='badge bg-info-subtle text-info float-end'>
                              {allCat.jobs_count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Apiservice from "../../services/ApiService";
import { fetchJoseekerAppliedJobs } from "../../services/JobService";


export default function MyJobs() {
  const [appliedJobs, setAppliedJobs] = useState("");

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const response = await fetchJoseekerAppliedJobs();
        console.log(response.data.data);
        setAppliedJobs(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobsData();
  }, []);

  return (
    <div class='page-content'>
      {/*Start home */}
      <section class='page-title-box'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <div class='text-center text-white'>
                <h3 class='mb-4'>Bookmark Jobs</h3>
                <div class='page-next'>
                  <nav
                    class='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol class='breadcrumb justify-content-center'>
                      <li class='breadcrumb-item'>
                        <Link to='/'>Home</Link>
                      </li>
                      <li class='breadcrumb-item'>
                        <Link to=''>Profile</Link>
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        {" "}
                        Bookmark Jobs{" "}
                      </li>
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
      {/*end home */}

      {/*START SHAPE */}
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
      {/*END SHAPE */}

      {/*START MANAGE-JOBS */}
      <section class='section'>
        <div class='container'>
          <div class='row align-items-center'>
            <div class='col-lg-8'>
              <div class='mb-4 mb-lg-0'>
                <h6 class='mb-0'> My Job Listings </h6>
              </div>
            </div>
            {/*end col*/}
            
            {/*end col*/}
          </div>
          {/*end row*/}
          <div class='row'>
            <div class='col-lg-12'>
              {Array.isArray(appliedJobs) &&
                appliedJobs.map((appliedJob) => (
                  <div key={appliedJob.job_id} class='job-box card mt-4'>
                    <div class='card-body p-4'>
                      <div class='row'>
                        <div class='col-lg-1'>
                          <Link to='company-details.php'>
                            <img
                              src='assets/images/featured-job/img-01.png'
                              alt=''
                              class='img-fluid rounded-3'
                            />
                          </Link>
                        </div>
                        {/*end col*/}
                        <div class='col-lg-9'>
                          <div class='mt-3 mt-lg-0'>
                            <h5 class='fs-17 mb-1'>
                              <Link
                                to={`/job-detail/${appliedJob.job_id}`}
                                class='text-dark'
                              >
                                {appliedJob.job_title}
                              </Link>
                            </h5>
                            <ul class='list-inline mb-0'>
                              <li class='list-inline-item'>
                                <p class='text-muted fs-14 mb-0'>
                                  {appliedJob.company_name}
                                </p>
                              </li>
                              <li class='list-inline-item'>
                                <p class='text-muted fs-14 mb-0'>
                                  <i class='mdi mdi-map-marker'></i> California
                                </p>
                              </li>
                              <li class='list-inline-item'>
                                <p class='text-muted fs-14 mb-0'>
                                  <i class='uil uil-wallet'></i> $250 - $800 /
                                  month
                                </p>
                              </li>
                            </ul>
                            <div class='mt-2'>
                              <span class='badge danger-bg-subtle mt-1'>
                                Part Time
                              </span>
                              <span class='badge warning-bg-subtle mt-1'>
                                Urgent
                              </span>
                            </div>
                          </div>
                        </div>
                        {/*end col*/}
                        <div class='col-lg-2 align-self-center'>
                          <ul class='list-inline mt-3 mb-0'>
                            <li
                              class='list-inline-item'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              title='View More'
                            >
                              <Link
                                to='/job-detail'
                                class='avatar-sm success-bg-subtle d-inline-block text-center rounded-circle fs-18'
                              >
                                <i class='mdi mdi-eye'></i>
                              </Link>
                            </li>
                            <li
                              class='list-inline-item'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              title='Delete'
                            >
                              <Link
                                to=''
                                data-bs-toggle='modal'
                                data-bs-target='#deleteModal'
                                class='avatar-sm danger-bg-subtle d-inline-block text-center rounded-circle fs-18'
                              >
                                <i class='uil uil-trash-alt'></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                  </div>
                ))}
              {/*end job-box*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div class='row'>
            <div class='col-lg-12 mt-4 pt-2'>
              <nav aria-label='Page navigation example'>
                <ul class='pagination job-pagination mb-0 justify-content-center'>
                  <li class='page-item disabled'>
                    <Link class='page-link' to='' tabindex='-1'>
                      <i class='mdi mdi-chevron-double-left fs-15'></i>
                    </Link>
                  </li>
                  <li class='page-item active'>
                    <Link class='page-link' to=''>
                      1
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to=''>
                      2
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to=''>
                      3
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to=''>
                      4
                    </Link>
                  </li>
                  <li class='page-item'>
                    <Link class='page-link' to=''>
                      <i class='mdi mdi-chevron-double-right fs-15'></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*END MANAGE-JOBS */}

      {/*DELETE Modal */}
      <div
        class='modal fade'
        id='deleteModal'
        tabindex='-1'
        aria-labelledby='deleteModal'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='staticBackdropLabel'>
                Delete Jobs ?
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div>
                <h6 class='text-danger'>
                  <i class='uil uil-exclamation-triangle'></i> Warning: Are you
                  sure you want to delete job Post ?
                </h6>
                <p class='text-muted'>
                  {" "}
                  Your jobs post will be permenently removed and you won't be
                  able to see them again, including the once you're shared with
                  your friends.
                </p>
              </div>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-primary btn-sm'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button type='button' class='btn btn-danger btn-sm'>
                Yes, delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*END DELETE MODAL */}
    </div>
  );
}

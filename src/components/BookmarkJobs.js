import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBookmarkJob } from "../services/JobService";
import {
  FaBan,
  FaBuilding
} from "react-icons/fa";

export default function BookmarkJobs() {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const fetchBookmarkedJobs = async () => {
      try {
        const response = await fetchBookmarkJob();
        console.log(response.data.data);
        setBookmarkedJobs(response.data.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchBookmarkedJobs();
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
                <h6 class='mb-0'>Bookmarked Jobs</h6>
              </div>
            </div>
            {/*end col*/}
            {/*end col*/}
          </div>
          {/*end row*/}
          <div class='row'>
          {Array.isArray(bookmarkedJobs) && bookmarkedJobs.length > 0 ? (
              bookmarkedJobs.map((bookmarkedJob) =>
                bookmarkedJob.status === "approved" ? (
                  <div key={bookmarkedJob.job_id} className="col-lg-12">
                    <div className="job-box card mt-4">
                      <div className="card-body p-4">
                        <div className="row" key={bookmarkedJob.id}>
                          <div className="col-lg-1">
                            <Link to="company-details.php">
                              {bookmarkedJob.company_logo ? (
                                <img
                                  src={bookmarkedJob.company_logo}
                                  alt=""
                                  className="img-fluid rounded-3"
                                />
                              ) : (
                                <div style={{ color: "grey" }}>
                                  <FaBuilding size={32} />
                                </div> // Replace this with your desired icon
                              )}
                            </Link>
                          </div>
                          <div className="col-lg-9">
                            <div className="mt-3 mt-lg-0">
                              <h5 className="d-flex fs-17 mb-1">
                                <Link
                                  to={`/job-detail/${bookmarkedJob.id}`}
                                  className="text-dark"
                                  key={bookmarkedJob.id} // Move the key attribute here
                                >
                                  {bookmarkedJob.job_title}
                                </Link>
                              </h5>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    {bookmarkedJob.company_name}
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    <i className="mdi mdi-map-marker"></i>{" "}
                                    {bookmarkedJob.city_id &&
                                      bookmarkedJob.city_id.name}
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    <i className="uil uil-wallet"></i> $
                                    {bookmarkedJob.salary_id &&
                                      bookmarkedJob.salary_id.name}{" "}
                                    / month
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                  </div>
                ) : <p>Waitin</p>
              )
            ) : (
              <div
                style={{
                  marginTop: "50px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                  className="text-muted"
                >
                  No jobs found
                </p>
              </div>
            )}
          </div>
          {/*end row*/}
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

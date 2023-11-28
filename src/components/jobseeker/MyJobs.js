import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Apiservice from "../../services/ApiService";
import {
  FaBan,
  FaBuilding,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { fetchJoseekerAppliedJobs } from "../../services/JobService";
import Loading from "../layouts/Loading";
import useScrollToTop from "../../hooks/useScrollToTop";

export default function MyJobs() {
  const [appliedJobs, setAppliedJobs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        setLoading(true);

        const timoutId = setTimeout(() => {
          setLoading(false);
          setError(new Error("Network error"));
        }, 20000);

        const response = await fetchJoseekerAppliedJobs();
        console.log(response);

        clearTimeout(timoutId);
        setAppliedJobs(response.data.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchJobsData();
  }, []);

  useScrollToTop();

  return (
    <div class="page-content">
      {/*Start home */}
      <section class="page-title-box">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="text-center text-white">
                <h3 class="mb-4">Applied Jobs</h3>
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
      <div class="position-relative" style={{ zIndex: 1 }}>
        <div class="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill=""
              fill-opacity="1"
              d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/*END SHAPE */}

      {/*START MANAGE-JOBS */}
      <section class="section">
        <div class="container" style={{ marginBottom: "100px" }}>
          {/* <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="mb-4 mb-lg-0">
                <h6 class="mb-0">Applied Jobs</h6>
              </div>
            </div> */}
          {/*end col*/}

          {/*end col*/}
          {/* </div> */}
          {/*end row*/}
          {loading ? (
            <Loading />
          ) : error ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "130px",
                textAlign: "center",
              }}
              className="text-muted"
            >
              <div>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <p>Check your newtwork</p>
              </div>
            </div>
          ) : (
            <div class="row">
              {Array.isArray(appliedJobs) && appliedJobs.length > 0 ? (
                appliedJobs.map((appliedJob) => (
                  <div key={appliedJob.job_id} className="col-lg-12">
                    <div className="job-box card mt-2">
                      <div className="card-body p-4">
                        <div className="row" key={appliedJob.id}>
                          <div className="col-lg-1">
                            <Link to="company-details.php">
                              {appliedJob.company_logo ? (
                                <img
                                  src={appliedJob.company_logo}
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
                                  to={`/job-detail/${appliedJob.job_id}`}
                                  className="text-dark"
                                  key={appliedJob.id} // Move the key attribute here
                                >
                                  {appliedJob.job_title}
                                </Link>
                              </h5>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    {appliedJob.company_name}
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    <i className="mdi mdi-map-marker"></i>{" "}
                                    {appliedJob.city_id &&
                                      appliedJob.city_id.name}
                                  </p>
                                </li>
                                <li className="list-inline-item">
                                  <p className="text-muted fs-14 mb-0">
                                    <i className="uil uil-wallet"></i> $
                                    {appliedJob.salary_id &&
                                      appliedJob.salary_id.name}{" "}
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
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      marginTop: "130px",
                      textAlign: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-muted"
                    />
                    <p
                      style={{
                        marginTop: "10px",
                        textAlign: "center",
                        fontSize: "18px",
                      }}
                      className="text-muted"
                    >
                      No active application{" "}
                      <Link to="/jobs" className="text-primary">
                        Find jobs
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*END MANAGE-JOBS */}

      {/*DELETE Modal */}
      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Delete Jobs ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <h6 class="text-danger">
                  <i class="uil uil-exclamation-triangle"></i> Warning: Are you
                  sure you want to delete job Post ?
                </h6>
                <p class="text-muted">
                  {" "}
                  Your jobs post will be permenently removed and you won't be
                  able to see them again, including the once you're shared with
                  your friends.
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-danger btn-sm">
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

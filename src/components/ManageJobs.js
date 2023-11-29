import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { deleteEmployeeJobs, fetchEmployeeMyJobs } from "../services/JobService";
import {
  FaBan,
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Loading from "./layouts/Loading";
import useScrollToTop from "../hooks/useScrollToTop";

export default function ManageJobs() {
  const [manageJobs, setManageJobs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const deleteJob = async (jobId) => {
    const payload = {
      job_id: jobId,
    };
    try {
      const response = await deleteEmployeeJobs(payload);
      console.log(response);
      if (response?.data?.status === true) {
        setSuccess("Job was deleted successfuly");
        window.location.reload();
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMyJobs = async () => {
      try {
        setLoading(true);

        const timeoutId = setTimeout(() => {
          setLoading(false);
          setError(new Error("Newtwork error"));
        }, 3000);

        const response = await fetchEmployeeMyJobs();
        console.log(response.data);

        clearTimeout(timeoutId);

        setManageJobs(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error: ", error);
      }
    };

    fetchMyJobs();
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
                <h3 class="mb-4">My Jobs</h3>
                <p class="">(Created jobs)</p>
                {/* <div class='page-next'>
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
                        My Jobs{" "}
                      </li>
                    </ol>
                  </nav>
                </div> */}
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
        <div class="container">
          {/* <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="mb-4 mb-lg-0">
                <h6 class="mb-0"> My Job Listings </h6>
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
                marginTop: "100px",
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
            <div>
              {Array.isArray(manageJobs) && manageJobs.length > 0 ? (
                manageJobs.map((manage) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={manage.id} class="row">
                            <div class="col-lg-1">
                              <Link to="company-details.php">
                                {manage.company_logo ? (
                                  <img
                                    src={manage.company_logo}
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
                            {/*end col*/}
                            <div class="col-lg-9">
                              <div class="mt-3 mt-lg-0">
                                <h5 class="d-flex fs-17 mb-1">
                                  <Link
                                    to={`/job-detail/${manage.id}`}
                                    class="text-dark"
                                  >
                                    {manage.job_title}
                                  </Link>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {manage.status === "cctive" ? (
                                      <span
                                        style={{
                                          background: "#fcd299",
                                          color: "orange",
                                          padding: "3px",
                                          fontSize: "11px",
                                          borderRadius: "3px",
                                        }}
                                      >
                                        Active
                                      </span>
                                    ) : manage.status === "approved" ? (
                                      <span
                                        style={{
                                          background: "#90ee90",
                                          color: "green",
                                          padding: "3px",
                                          fontSize: "11px",
                                          borderRadius: "3px",
                                        }}
                                      >
                                        Approved
                                      </span>
                                    ) : (
                                      <span
                                        style={{
                                          background: "#ffcccb",
                                          color: "red",
                                          padding: "3px",
                                          fontSize: "11px",
                                          borderRadius: "3px",
                                        }}
                                      >
                                        Not approved
                                      </span>
                                    )}
                                  </div>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {manage.company_name}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {manage.city_id && manage.city_id.name}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {manage.salary_id &&
                                        manage.salary_id.name}{" "}
                                      / month
                                    </p>
                                  </li>
                                </ul>
                                <div>
                                  <Link
                                    to={`/applied-jobs/${manage.id}`}
                                    className="mt-1 text-muted fs-12"
                                  >
                                    Applied count:{" "}
                                    {manage.applied_candidates_count > 0 ? (
                                      <span
                                        style={{
                                          fontWeight: "bold",
                                          color: "green",
                                        }}
                                      >
                                        {manage.applied_candidates_count}
                                      </span>
                                    ) : (
                                      <span
                                        style={{
                                          fontWeight: "bold",
                                          color: "red",
                                        }}
                                      >
                                        {manage.applied_candidates_count}
                                      </span>
                                    )}
                                  </Link>
                                </div>
                                <div class="mt-2">
                                  <span class="badge danger-bg-subtle mt-1">
                                    {manage.employment_type_id &&
                                      manage.employment_type_id.name}
                                  </span>
                                  <span class="badge warning-bg-subtle mt-1">
                                    Urgent
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <ul class="list-inline d-flex align-items-center mt-3 mb-0">
                                <li
                                  class="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <Link
                                    to={`/edit-jobs-post/${manage.id}`}
                                    class="avatar-sm success-bg-subtle d-inline-block text-center rounded-circle fs-18"
                                  >
                                    <i class="uil uil-edit"></i>
                                  </Link>
                                </li>
                                <li
                                  class="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Delete"
                                >
                                  <Link
                                    to=""
                                    onClick={() => deleteJob(manage.id)}
                                  >
                                    <i class="uil uil-trash-alt"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item"></li>
                              </ul>
                            </div>
                            {/*end col*/}
                          </div>
                        </div>
                      </div>
                      {/*end job-box*/}
                    </div>
                    {/*end col*/}
                  </div>
                ))
              ) : (
                <div
                  style={{
                    marginTop: "50px",
                    textAlign: "center",
                  }}
                  className="text-muted"
                >
                  <FaBan />
                  <p>
                    No jobs found{" "}
                    <Link to="/create-new-job" className="text-primary">
                      Create a job post
                    </Link>{" "}
                  </p>
                </div>
              )}
            </div>
          )}
          {/*end row*/}
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

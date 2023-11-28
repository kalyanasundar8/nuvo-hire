import React, { useEffect, useState } from "react";
import {
  fetchAppliedJobs,
  addSorlistedCandidates,
  fetchApplicationDetails,
  candidateSelection,
} from "../../services/JobService";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { FaUsers } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

import Loading from "../layouts/Loading";

const AppliedJobsList = () => {
  const { id } = useParams();

  const [appliedJobList, setAppliedJobList] = useState([]);
  console.log(appliedJobList);

  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectCandidate = async (shortlistedId, statusCode) => {
    console.log(shortlistedId, statusCode);
    const payload = {
      selected: 0,
      joined: 0,
      not_joined: 0,
    };

    if (statusCode === "selected") {
      payload.selected = 1;
    } else if (statusCode === "joined") {
      payload.joined = 1;
    } else if (statusCode === "not_joined") {
      payload.joined = 1;
    }

    console.log(payload);
    try {
      setButtonLoading(true);
      const response = await candidateSelection(payload, shortlistedId);
      console.log(response);

      // if(response?.response?.data?.status === false) {
      //   set
      // }
      setButtonLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const shortListCandidate = async (candidateId, jobId) => {
    console.log(candidateId, jobId);
    const payload = {
      candidate_id: candidateId,
      manage_job_id: jobId,
    };
    console.log(payload);

    try {
      const response = await addSorlistedCandidates(payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [status, setStatus] = useState("applied");
  console.log(status);

  const fetchDetails = async (list_type) => {
    const payload = {
      manage_job_id: id,
      list: list_type,
    };

    console.log(payload);

    setStatus(list_type);

    try {
      setLoading(true);

      const timeoutId = setTimeout(() => {
        setLoading(false);
        setError(new Error("Network error"));
      }, 20000);

      const response = await fetchApplicationDetails(payload);
      console.log(response.data.data);
      setAppliedJobList(response?.data?.data);

      clearTimeout(timeoutId);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails(status);
  }, [status]);

  return (
    <div class="page-content">
      {/*Start home */}
      <section class="page-title-box">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="text-center text-white">
                <h3 class="mb-4">Application status</h3>
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
          <div className="d-flex justify-content-end align-items-center">
            <select
              className="form-select"
              style={{ width: "200px" }}
              onChange={(e) => fetchDetails(e.target.value)}
            >
              <option value="applied">Applied List</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="selected">Selected</option>
              <option value="joined">Joined</option>
              <option value="not_joined">Not selected</option>
            </select>
          </div>
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
            <React.Fragment>
              {status === "applied" &&
              Array.isArray(appliedJobList) &&
              appliedJobList.length > 0 ? (
                appliedJobList.map((applied) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={applied.manage_job_id} class="row">
                            <div class="col-lg-1">
                              <div style={{ color: "grey" }}>
                                <FaUsers size={32} />
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-9">
                              <div class="mt-3 mt-lg-0">
                                <h5 class="d-flex fs-17 mb-1">
                                  <Link
                                    // to={`/job-detail/${manage.id}`}
                                    class="text-dark"
                                  >
                                    {applied.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {applied.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {applied.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {applied.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <button
                                onClick={() =>
                                  shortListCandidate(applied.candidate_id, id)
                                }
                                className="sortlist-btn-hover"
                                style={{
                                  border: "none",
                                  padding: "6px 10px",
                                  borderRadius: "10px",
                                }}
                              >
                                Shortlist
                              </button>
                              <button
                                className="reject-btn-hover"
                                style={{
                                  border: "none",
                                  marginLeft: "10px",
                                  padding: "6px 10px",
                                  borderRadius: "10px",
                                }}
                              >
                                Reject
                              </button>
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
              ) : status === "shortlisted" &&
                Array.isArray(appliedJobList) &&
                appliedJobList.length > 0 ? (
                appliedJobList.map((shortlisted) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={shortlisted.manage_job_id} class="row">
                            <div class="col-lg-1">
                              <div style={{ color: "grey" }}>
                                <FaUsers size={32} />
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-7">
                              <div class="mt-3 mt-lg-0">
                                <h5 class="d-flex fs-17 mb-1">
                                  <Link
                                    // to={`/job-detail/${manage.id}`}
                                    class="text-dark"
                                  >
                                    {shortlisted.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {shortlisted.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {shortlisted.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i>
                                      {`$ ${
                                        shortlisted.salary_range
                                          ? shortlisted.salary_range
                                          : "Not disclosed"
                                      } / month`}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-4 align-self-center">
                              <button
                                onClick={() =>
                                  selectCandidate(
                                    shortlisted.shortlist_id,
                                    "selected"
                                  )
                                }
                                className="sortlist-btn-hover"
                                style={{
                                  border: "none",
                                  padding: "6px 10px",
                                  borderRadius: "10px",
                                  fontSize: "12px",
                                }}
                              >
                                Select
                              </button>
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
              ) : status === "joined" &&
                Array.isArray(appliedJobList) &&
                appliedJobList.length > 0 ? (
                appliedJobList.map((joined) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={joined.id} class="row">
                            <div class="col-lg-1">
                              <div style={{ color: "grey" }}>
                                <FaUsers size={32} />
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-9">
                              <div class="mt-3 mt-lg-0">
                                <h5 class="d-flex fs-17 mb-1">
                                  <Link
                                    // to={`/job-detail/${manage.id}`}
                                    class="text-dark"
                                  >
                                    {joined.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {joined.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {joined.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {joined.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div class="col-lg-1 align-self-center">
                              <p
                                style={{
                                  backgroundColor: "#C1FFC1",
                                  color: "#2E7D32",
                                  fontWeight: "bold",
                                  border: "none",
                                  padding: "6px 6px",
                                  borderRadius: "5px",
                                  fontSize: "10px",
                                  display: "flex",
                                  textAlign: "center",
                                  alignItems: "center"
                                }}
                              >
                                Joined
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end job-box*/}
                    </div>
                    {/*end col*/}
                  </div>
                ))
              ) : status === "not_joined" &&
                Array.isArray(appliedJobList) &&
                appliedJobList.length > 0 ? (
                appliedJobList.map((notjoined) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={notjoined.id} class="row">
                            <div class="col-lg-1">
                              <div style={{ color: "grey" }}>
                                <FaUsers size={32} />
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-9">
                              <div class="mt-3 mt-lg-0">
                                <h5 class="d-flex fs-17 mb-1">
                                  <Link
                                    // to={`/job-detail/${manage.id}`}
                                    class="text-dark"
                                  >
                                    {notjoined.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {notjoined.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {notjoined.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {notjoined.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <button
                                onClick={() =>
                                  shortListCandidate(notjoined.candidate_id, id)
                                }
                                className="sortlist-btn-hover"
                                style={{
                                  border: "none",
                                  padding: "6px 10px",
                                  borderRadius: "10px",
                                }}
                              >
                                Sortlist
                              </button>
                              <button
                                className="reject-btn-hover"
                                style={{
                                  border: "none",
                                  marginLeft: "10px",
                                  padding: "6px 10px",
                                  borderRadius: "10px",
                                }}
                              >
                                Reject
                              </button>
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
              ) : status === "selected" &&
                Array.isArray(appliedJobList) &&
                appliedJobList.length > 0 ? (
                appliedJobList.map((selected) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={selected.id} class="row">
                            <div class="col-lg-1">
                              <div style={{ color: "grey" }}>
                                <FaUsers size={32} />
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-9">
                              <div class="mt-3 mt-lg-0">
                                <h5 class="d-flex fs-17 mb-1">
                                  <Link
                                    // to={`/job-detail/${manage.id}`}
                                    class="text-dark"
                                  >
                                    {selected.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {selected.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {selected.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {selected.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <button
                                onClick={() =>
                                  selectCandidate(
                                    selected.shortlist_id,
                                    "joined"
                                  )
                                }
                                className="sortlist-btn-hover"
                                style={{
                                  border: "none",
                                  padding: "6px 10px",
                                  borderRadius: "10px",
                                  fontSize: "12px",
                                  marginLeft: "8px",
                                }}
                              >
                                Joined
                              </button>
                              <button
                                onClick={() =>
                                  selectCandidate(
                                    selected.shortlist_id,
                                    "selected"
                                  )
                                }
                                className="sortlist-btn-hover"
                                style={{
                                  border: "none",
                                  padding: "6px 10px",
                                  borderRadius: "10px",
                                  fontSize: "12px",
                                  marginLeft: "8px",
                                }}
                              >
                                Not joined
                              </button>
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
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <p>No applications</p>
                </div>
              )}
            </React.Fragment>
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
};

export default AppliedJobsList;

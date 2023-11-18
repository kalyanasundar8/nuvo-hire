import React, { useEffect, useState } from "react";
import {
  fetchAppliedJobs,
  addSorlistedCandidates,
  fetchApplicationDetails,
} from "../../services/JobService";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const AppliedJobsList = () => {
  const { id } = useParams();

  const [appliedJobList, setAppliedJobList] = useState("");

  const fetchAppliedJobsList = async () => {
    try {
      const response = await fetchAppliedJobs(id);
      console.log(response?.data?.data);
      setAppliedJobList(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAppliedJobsList();
  }, []);

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

  const [status, setStatus] = useState("");

  const fetchDetails = async (list_type) => {
    const payload = {
      manage_job_id: id,
      list: list_type,
    };

    console.log(payload);

    setStatus(list_type);

    try {
      const response = await fetchApplicationDetails(payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
        <div class="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mb-0">Application Status</h1>
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
          {status === "applied"
            ? Array.isArray(appliedJobList) && appliedJobList.length > 0
              ? appliedJobList.map((appliedList) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={appliedList.id} class="row">
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
                                    {appliedList.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {appliedList.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {appliedList.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {appliedList.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <button
                                onClick={() =>
                                  shortListCandidate(
                                    appliedList.candidate_id,
                                    id
                                  )
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
              : status === "shortlisted"
              ? appliedJobList.map((appliedList) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={appliedList.id} class="row">
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
                                    {appliedList.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {appliedList.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {appliedList.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {appliedList.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <button
                                onClick={() =>
                                  shortListCandidate(
                                    appliedList.candidate_id,
                                    id
                                  )
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
              : status === "joined"
              ? appliedJobList.map((appliedList) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={appliedList.id} class="row">
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
                                    {appliedList.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {appliedList.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {appliedList.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {appliedList.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <button
                                onClick={() =>
                                  shortListCandidate(
                                    appliedList.candidate_id,
                                    id
                                  )
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
              : status === "not_joined"
              ? appliedJobList.map((appliedList) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={appliedList.id} class="row">
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
                                    {appliedList.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {appliedList.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {appliedList.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {appliedList.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <button
                                onClick={() =>
                                  shortListCandidate(
                                    appliedList.candidate_id,
                                    id
                                  )
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
              : status === "selected"
              ? appliedJobList.map((appliedList) => (
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="job-box card mt-4">
                        <div class="card-body p-4">
                          <div key={appliedList.id} class="row">
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
                                    {appliedList.candidate_name}
                                  </Link>
                                </h5>
                                <ul class="list-inline mb-0">
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      {appliedList.designation}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="mdi mdi-map-marker"></i>{" "}
                                      {appliedList.jobseeker_type}
                                    </p>
                                  </li>
                                  <li class="list-inline-item">
                                    <p class="text-muted fs-14 mb-0">
                                      <i class="uil uil-wallet"></i> $
                                      {appliedList.salary_range} / month
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*end col*/}
                            <div class="col-lg-2 align-self-center">
                              <button
                                onClick={() =>
                                  shortListCandidate(
                                    appliedList.candidate_id,
                                    id
                                  )
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
              : ""
            : <p style={{
              marginTop: "20px",
            }} className="text-muted">{`No ${status} application is in here!`}</p>}
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

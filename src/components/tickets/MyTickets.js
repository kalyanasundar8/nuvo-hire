import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";

// Icons
import { FaBan } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faTicket
} from "@fortawesome/free-solid-svg-icons";

import Loading from "../layouts/Loading";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);

        const timeoutId = setTimeout(() => {
          setLoading(false);
          setError(new Error("Network error"));
        }, 20000);

        const response = await ApiService("my-tickets", "GET", null, true);
        console.log(response.data.data);

        clearTimeout(timeoutId);

        setTickets(response.data.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error: ", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div class="page-content">
      {/*Start home */}
      <section class="page-title-box">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="text-center text-white">
                <h3 class="mb-4">My Tickets</h3>
                <div class="page-next"></div>
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
        <div class="container" style={{marginBottom: "100px"}}>
          <div className="row">
            <div className="col-lg-8">
            </div>
            {/* Left-aligned column */}
            <div className="col-lg-4 text-lg-end">
              {/* Right-aligned content */}
              <Link to="/raise-new-ticket" className="btn btn-primary">
                Raise New Ticket
              </Link>
            </div>
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
            <div className="row">
              {Array.isArray(tickets) && tickets.length > 0 ? (
                tickets.map((ticket) => (
                  <div key={ticket.id} className="col-md-12 mt-4">
                    <Link
                      to={`/view-tickets/${ticket.id}`}
                      className="primary-link"
                    >
                      <div className="card mb-4">
                        <div className="card-body d-flex justify-content-between align-items-center">
                          <div>
                            <span
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              #{ticket.id}
                            </span>
                            <h5
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              {ticket.title}
                              <span
                                style={{
                                  fontSize: "10px",
                                  marginLeft: "10px",
                                  backgroundColor: "#333",
                                  color: "#fff",
                                  paddingLeft: "3px",
                                  paddingRight: "3px",
                                  paddingTop: "3px",
                                  paddingBottom: "3px",
                                  borderRadius: "3px",
                                }}
                              >
                                {" "}
                                {ticket.status}
                              </span>
                            </h5>
                            <h6 className="card-text"></h6>
                          </div>
                          <div>
                            <Link
                              to={`/edit-ticket/${ticket.id}`}
                              className="primary-link"
                            >
                              Edit <i className="mdi mdi-pencil"></i>
                            </Link>
                            <span className="mx-2">|</span>
                            <Link
                              to={`/delete-ticket/${ticket.id}`}
                              className="primary-link"
                            >
                              Delete <i className="mdi mdi-delete"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    marginTop: "50px",
                    textAlign: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faTicket} className="text-muted"/>
                  <p
                    style={{
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                    className="text-muted"
                  >
                    No tickets created{" "}
                    <Link to="/raise-new-ticket" className="text-primary">
                      Raise new ticket
                    </Link>
                  </p>
                </div>
              )}
            </div>
          )}
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*END TICKETS */}
    </div>
  );
};

export default MyTickets;
